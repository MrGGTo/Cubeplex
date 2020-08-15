import React, { Component, useState, useEffect } from "react";
import { StyleSheet, Alert, FlatList, Button } from "react-native";

import * as SQLite from "expo-sqlite";
import moment from "moment";

import RecordItem from "../components/RecordItem";
import RecordDeleteAction from "../components/RecordDeleteAction";
import Screen from "../components/Screen";
import { openOrCreateDatabase } from "../database/RecordDatabase";
import RecordStarAction from "../components/RecordStarAction";
import router from "../navigation/router";

const db = SQLite.openDatabase("db.db");

function RecordScreen({ navigation }) {
	const [recordData, setRecordData] = useState([]);
	const [refreshing, setRefreshing] = useState(false);

	// create table
	useEffect(() => {
		openOrCreateDatabase();
		db.transaction((tx) => {
			tx.executeSql(
				"SELECT * FROM recordsData ORDER BY id DESC",
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
				"SELECT * FROM recordsData ORDER BY id DESC",
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
				"INSERT INTO recordsData (time, scramble, dateTime, star) values (?, ?, ?, ?)",
				[
					inputTime === null ? 0 : inputTime,
					inputScramble === "" ? "Null Scramble" : inputScramble,
					moment().format("LLLL"),
					0, // Why Zero? star = 0 ? false : true
				],
				// success bad boy kit
				(txObj, { rows: { _array } }) => {
					fetchRecord();
					console.log("add success");
				},
				// failed
				(txObj, error) => {
					console.log("add failed");
				}
			);
		});
	};

	const pad2 = (n, minutes) => {
		// (n < 10 ? "0" + n : n)
		if (n < 10 && minutes > 0) {
			return "0" + n;
		} else {
			return n;
		}
	};

	const pad3 = (n) => {
		if (n < 10) {
			return "00" + n;
		} else if (n < 99) {
			return "0" + n;
		} else {
			return n;
		}
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
							onPress={() => {
								navigation.navigate(
									router.RECORD_DETAILS,
									item
								);
							}}
							renderLeftActions={() => (
								<RecordStarAction
									star={item.star}
									backgroundColor={
										item.star === 0 ? "orange" : "grey"
									}
									onPress={() => {
										if (item.star == 0) {
											db.transaction((tx) => {
												tx.executeSql(
													"UPDATE recordsData SET star = 1 WHERE id = ?",
													[item.id],
													(txObj, resultSet) => {
														console.log(
															"updated id: " +
																item.id
														);
														fetchRecord();
													},
													(txObj, error) => {
														console.log(
															"update failed " +
																item.id
														);
													}
												);
											});
										} else {
											db.transaction((tx) => {
												tx.executeSql(
													"UPDATE recordsData SET star = 0 WHERE id = ?",
													[item.id],
													(txObj, resultSet) => {
														console.log(
															"updated id: " +
																item.id
														);
														fetchRecord();
													},
													(txObj, error) => {
														console.log(
															"update failed " +
																item.id
														);
													}
												);
											});
										}
									}}
								/>
							)}
							renderRightActions={() => (
								<RecordDeleteAction
									onPress={() => {
										Alert.alert(
											"Delete Record",
											"Do you want to delete this record?\n" +
												"\nTime: " +
												(moment
													.duration(item.time)
													.minutes() > 0
													? moment
															.duration(item.time)
															.minutes()
															.toString() + ":"
													: "") +
												pad2(
													moment
														.duration(item.time)
														.seconds(),
													moment
														.duration(item.time)
														.minutes()
												) +
												"." +
												pad3(
													moment
														.duration(item.time)
														.milliseconds()
												) +
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
		// backgroundColor: "white",
	},
	// button: {
	// 	backgroundColor: "#7e57c2",
	// 	padding: 15,
	// 	margin: 5,
	// 	borderRadius: 10,
	// 	// width: "75%",
	// 	alignItems: "center",
	// },
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
