import React, { Component, useState, useEffect } from "react";
import {
	View,
	Text,
	TouchableOpacity,
	ScrollView,
	StyleSheet,
	TextInput,
	Alert,
	FlatList,
} from "react-native";

import * as SQLite from "expo-sqlite";
import moment from "moment";

import { getSelectedTheme } from "../config/themes";
import AppText from "../components/AppText";
import RecordItem from "../components/RecordItem";
import RecordDeleteAction from "../components/RecordDeleteAction";
import Screen from "../components/Screen";

const db = SQLite.openDatabase("db.db");

function RecordScreen() {
	const theme = getSelectedTheme();

	const [recordData, setRecordData] = useState([]);
	const [inputTime, setInputTime] = useState();
	const [inputScramble, setInputScramble] = useState();
	const [refreshing, setRefreshing] = useState(false);

	// create table
	useEffect(() => {
		db.transaction((tx) => {
			tx.executeSql(
				"CREATE TABLE IF NOT EXISTS records (id INTEGER PRIMARY KEY AUTOINCREMENT, time INT, scramble TEXT, dateTime TEXT)"
			);
			console.log("what");
			tx.executeSql(
				"SELECT * FROM records",
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
		<Screen style={styles.container}>
			{recordData !== null ? (
				<FlatList
					data={recordData}
					keyExtractor={(data) => data.id.toString()}
					renderItem={({ item }) => (
						<RecordItem
							id={item.id}
							time={item.time}
							scramble={item.scramble}
							dateTime={item.dateTime}
							renderRightActions={() => (
								<RecordDeleteAction
									onPress={() => {
										Alert.alert(
											"Delete Record",
											"Do you want to delete this record?\n" +
												"\nTime: " +
												moment
													.duration(item.time)
													.seconds() +
												"." +
												moment
													.duration(item.time)
													.milliseconds() +
												"s" +
												"\nScramble: " +
												item.scramble +
												"\nOn " +
												item.dateTime,
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
														db.transaction((tx) => {
															tx.executeSql(
																"DELETE FROM records WHERE id = ?",
																[item.id],
																(
																	txObj,
																	resultSet
																) => {
																	console.log(
																		"deleted id: " +
																			item.id
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
														});
													},
												},
											],
											{ cancelable: false }
										);
									}}
								/>
							)}
						/>
					)}
					refreshing={refreshing}
					onRefresh={() => {
						fetchRecord();
					}}
				/>
			) : null}
		</Screen>
	);
}
export default RecordScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "white",
	},
	button: {
		backgroundColor: "#7e57c2",
		padding: 15,
		margin: 5,
		borderRadius: 10,
		// width: "75%",
		alignItems: "center",
	},
	recordlist: {
		width: "100%",
	},
});

// ? recordData.map(({ id, time, scramble, dateTime }) => (
// 		<RecordItem
// 			key={id}
// 			time={time}
// 			scramble={scramble}
// 			dateTime={dateTime}
// 			renderRightActions={() => (
// 				<RecordDeleteAction
// 					onPress={() => {
// 						Alert.alert(
// 							"Delete Record",
// 							"Do you want to delete this record?\n" +
// 								"\nTime: " +
// 								moment
// 									.duration(time)
// 									.seconds() +
// 								"." +
// 								moment
// 									.duration(time)
// 									.milliseconds() +
// 								"s" +
// 								"\nScramble: " +
// 								scramble +
// 								"\nOn " +
// 								dateTime,
// 							[
// 								{
// 									text: "Cancel",
// 									onPress: () =>
// 										console.log(
// 											"Cancel Pressed"
// 										),
// 									style: "cancel",
// 								},
// 								{
// 									text: "Delete",
// 									onPress: () => {
// 										db.transaction(
// 											(tx) => {
// 												tx.executeSql(
// 													"DELETE FROM records WHERE id = ?",
// 													[id],
// 													(
// 														txObj,
// 														resultSet
// 													) => {
// 														console.log(
// 															"deleted id: " +
// 																id
// 														);
// 														fetchRecord();
// 													},
// 													(
// 														txObj,
// 														error
// 													) => {
// 														console.log(
// 															"delete failed"
// 														);
// 													}
// 												);
// 											}
// 										);
// 									},
// 								},
// 							],
// 							{ cancelable: false }
// 						);
// 					}}
// 				/>
// 			)}
// 		/>
//   ))
