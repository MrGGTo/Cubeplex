import React, { Component, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import * as SQLite from "expo-sqlite";
import moment from "moment";
import { AsyncStorage } from "react-native";

import TimerDisplay from "./TimerDisplay";

const db = SQLite.openDatabase("db.db");
import { openOrCreateDatabase } from "../database/RecordDatabase";

export default class Timer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			start: 0,
			now: 0,
			laps: [],
		};

		openOrCreateDatabase();
	}

	componentWillUnmount() {
		clearInterval(this.timer);
	}

	addRecord = (inputTime) => {
		db.transaction((tx) => {
			tx.executeSql(
				"INSERT INTO recordsData (time, scramble, dateTime, star) values (?, ?, ?, ?)",
				[
					inputTime === null ? 0 : inputTime,
					this.props.scramble === ""
						? "Null Scramble"
						: this.props.scramble,
					moment().format("LLLL"),
					0,
				],
				// success
				(txObj, { rows: { _array } }) => {
					console.log("add success");
				},
				// failed
				(txObj, error) => {
					console.log("add failed");
				}
			);
		});
	};

	start = () => {
		const now = new Date().getTime();
		this.setState({
			start: now,
			now,
			laps: [0],
		});
		this.timer = setInterval(() => {
			this.setState({ now: new Date().getTime() });
		}, 1);
	};

	getTime = () => {
		const timestamp = new Date().getTime();
		const { laps, now, start } = this.state;
		const [firstLap, ...other] = laps;
		this.setState({
			laps: [0, firstLap + now - start, ...other],
			start: timestamp,
			now: timestamp,
		});
		const recordTime = firstLap + now - start;
		const duration = moment.duration(recordTime);
		alert("This is the raw time: " + moment.duration(recordTime).seconds());
	};

	stop = () => {
		clearInterval(this.timer);
		const { laps, now, start } = this.state;
		const [firstLap, ...other] = laps;

		const timestamp = new Date().getTime();
		this.setState({
			laps: [0, firstLap + now - start, ...other],
			start: timestamp,
			now: timestamp,
		});
		const recordTime = firstLap + now - start;
		const duration = moment.duration(recordTime);
		this.addRecord(recordTime);

		this.setState({
			laps: [firstLap + now - start, ...other],
			start: 0,
			now: 0,
		});
	};

	reset = () => {
		this.setState({
			laps: [],
			start: 0,
			now: 0,
		});
	};

	render() {
		const { now, start, laps } = this.state;
		const timer = now - start;
		return (
			<View style={styles.container}>
				{laps.length === 0 && (
					<TimerDisplay
						interval={
							laps.reduce((total, curr) => total + curr, 0) +
							timer
						}
						onPressOut={this.start}
						ready
					/>
				)}
				{start > 0 && (
					<TimerDisplay
						interval={
							laps.reduce((total, curr) => total + curr, 0) +
							timer
						}
						onPressIn={() => {
							this.stop();
							// console.log(this.props.onPressStop);
						}}
						style={{ padding: 250 }}
					/>
				)}
				{laps.length > 0 && start === 0 && (
					<TimerDisplay
						interval={
							laps.reduce((total, curr) => total + curr, 0) +
							timer
						}
						onPressOut={() => {
							this.start();
							this.props.onPressStop();
						}}
					/>
				)}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		// flex: 1,
		alignItems: "center",
		// paddingTop: 130,
		// paddingHorizontal: 20,
	},
	timer: {
		fontSize: 65,
		fontWeight: "200",
		width: 100,
		backgroundColor: "dodgerblue",
	},
	button: {
		width: 80,
		height: 80,
		borderRadius: 40,
		justifyContent: "center",
		alignItems: "center",
	},
	buttonTitle: {
		fontSize: 18,
	},
	timerContainer: {
		flexDirection: "row",
	},
});
