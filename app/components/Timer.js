import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";
import moment, { duration } from "moment";

import TimerDisplay from "./TimerDisplay";

export default class Timer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			start: 0,
			now: 0,
			laps: [],
		};
	}

	componentWillUnmount() {
		clearInterval(this.timer);
	}

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
		alert("This is the raw time: " + recordTime);
	};

	stop = () => {
		clearInterval(this.timer);
		const { laps, now, start } = this.state;
		const [firstLap, ...other] = laps;
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
						onPressIn={this.stop}
						style={{ padding: 250 }}
					/>
				)}
				{laps.length > 0 && start === 0 && (
					<TimerDisplay
						interval={
							laps.reduce((total, curr) => total + curr, 0) +
							timer
						}
						onPressOut={this.reset}
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
