import React, { Component, useState, useEffect } from "react";
import {
	View,
	Text,
	TouchableOpacity,
	ScrollView,
	StyleSheet,
	TextInput,
	Alert,
} from "react-native";

import * as SQLite from "expo-sqlite";
import moment from "moment";

import { getSelectedTheme } from "../config/themes";
import AppText from "../components/AppText";
import RecordItem from "../components/RecordItem";
import RecordDeleteAction from "../components/RecordDeleteAction";

const db = SQLite.openDatabase("db.db");

function RecordScreen() {
	const theme = getSelectedTheme();

	const [recordData, setRecordData] = useState([]);
	const [inputTime, setInputTime] = useState();
	const [inputScramble, setInputScramble] = useState();

	// create table
	useEffect(() => {
		db.transaction((tx) => {
			tx.executeSql(
				"CREATE TABLE IF NOT EXISTS records (id INTEGER PRIMARY KEY AUTOINCREMENT, time INT, scramble TEXT, dateTime TEXT)"
			);
			console.log("why");
			tx.executeSql(
				"SELECT * FROM record",
				null,
				// success
				(txObj, { rows: { _array } }) => {
					setRecordData(_array);
					console.log("fetch success" + JSON.stringify(_array));
				},
				// failed
				(txObj, error) => {
					console.log("fetch failed");
				}
			);
		});
	}, []);

	fetchRecord = () => {
		db.transaction((tx) => {
			tx.executeSql(
				"SELECT * FROM records ORDER BY id DESC",
				null,
				// success
				(txObj, { rows: { _array } }) => {
					setRecordData(_array);
					console.log("fetch success" + JSON.stringify(_array));
				},
				// failed
				(txObj, error) => {
					console.log("fetch failed");
				}
			);
		});
	};

	addRecord = () => {
		db.transaction((tx) => {
			tx.executeSql(
				"INSERT INTO records (time, scramble, dateTime) values (?, ?, ?)",
				[
					inputTime === null ? 0 : inputTime,
					inputScramble === "" ? "Null Scramble" : inputScramble,
					moment().format("LLLL"),
				],
				// successbad boy kit
				(txObj, { rows: { _array } }) => {
					fetchRecord();
					console.log("add succcess");
				},
				// failed
				(txObj, error) => {
					console.log("add failed");
				}
			);
		});
	};

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Records Database</Text>
			<View style={{ flexDirection: "row" }}></View>
			<View style={{ flexDirection: "row" }}>
				<TextInput
					style={styles.input}
					keyboardType="number-pad"
					placeholder="Record Time"
					placeholderTextColor="#666"
					onChangeText={(text) => setInputTime(text)}
				/>
				<TextInput
					style={styles.input}
					keyboardType="default"
					placeholder="Scramble"
					placeholderTextColor="#555"
					onChangeText={(text) => setInputScramble(text)}
				/>
			</View>
			<TouchableOpacity
				style={styles.button}
				onPress={() => {
					addRecord();
				}}
			>
				<Text
					style={{
						fontSize: 20,
						color: "#fff",
						fontWeight: "600",
					}}
				>
					Add Record
				</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={[styles.button, { backgroundColor: "#dd0000" }]}
				onPress={() => {
					db.transaction((tx) => {
						tx.executeSql(
							"DELETE FROM records WHERE id != -1",
							null,
							(txObj, resultSet) => {
								console.log("deleted");
								fetchRecord();
							},
							(txObj, error) => {
								console.log("delete failed");
							}
						);
					});
				}}
			>
				<Text
					style={{
						fontSize: 20,
						color: "#fff",
						fontWeight: "600",
					}}
				>
					Delete All Records
				</Text>
			</TouchableOpacity>
			<ScrollView style={styles.recordlist}>
				{recordData !== null
					? recordData.map(({ id, time, scramble, dateTime }) => (
							<RecordItem
								key={id}
								time={time}
								scramble={scramble}
								dateTime={dateTime}
								renderRightActions={() => (
									<RecordDeleteAction
										onPress={() => {
											Alert.alert(
												"Delete Record",
												"Do you want to delete this record?" +
													"\nTime: " +
													moment
														.duration(time)
														.seconds() +
													"." +
													moment
														.duration(time)
														.milliseconds() +
													"s" +
													"\nScramble: " +
													scramble +
													"\nOn " +
													dateTime,
												[
													{
														text: "Cancel",
														onPress: () =>
															console.log(
																"Cancel Pressed"
															),
														style: "cancel",
													},
													{
														text: "Delete",
														onPress: () => {
															db.transaction(
																(tx) => {
																	tx.executeSql(
																		"DELETE FROM records WHERE id = ?",
																		[id],
																		(
																			txObj,
																			resultSet
																		) => {
																			console.log(
																				"deleted id: " +
																					id
																			);
																			fetchRecord();
																		},
																		(
																			txObj,
																			error
																		) => {
																			console.log(
																				"delete failed"
																			);
																		}
																	);
																}
															);
														},
													},
												],
												{ cancelable: false }
											);
										}}
									/>
								)}
							/>
					  ))
					: null}
			</ScrollView>
		</View>
	);
}
export default RecordScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// marginTop: 15,
		alignItems: "center",
		backgroundColor: "white",
	},
	title: {
		fontSize: 32,
		fontWeight: "bold",
		margin: 15,
		marginTop: 35,
		// color: "white",
	},
	input: {
		borderWidth: 1,
		borderColor: "#aaa",
		padding: 10,
		marginHorizontal: 15,
		borderRadius: 7,
		fontSize: 20,
		flex: 1,
		// color: "white",
	},
	button: {
		backgroundColor: "#7e57c2",
		padding: 15,
		margin: 15,
		borderRadius: 10,
		width: "75%",
		alignItems: "center",
	},
	recordlist: {
		width: "100%",
	},
});
