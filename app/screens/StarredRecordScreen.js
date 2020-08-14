import React, { useState, useEffect } from "react";
import { View, StyleSheet, FlatList, Alert } from "react-native";
import * as SQLite from "expo-sqlite";
import moment from "moment";

import Screen from "../components/Screen";
import AppText from "../components/AppText";
import { openOrCreateDatabase } from "../database/RecordDatabase";
import RecordItem from "../components/RecordItem";
import RecordStarAction from "../components/RecordStarAction";
import RecordDeleteAction from "../components/RecordDeleteAction";

const db = SQLite.openDatabase("db.db");

function StarredRecordScreen(props) {
	const [recordData, setRecordData] = useState([]);
	const [refreshing, setRefreshing] = useState(false);

	// create table
	useEffect(() => {
		openOrCreateDatabase();
		db.transaction((tx) => {
			// tx.executeSql(
			// 	"CREATE TABLE IF NOT EXISTS records (id INTEGER PRIMARY KEY AUTOINCREMENT, time INT, scramble TEXT, dateTime TEXT)"
			// );
			// console.log("what");
			tx.executeSql(
				"SELECT * FROM recordsData WHERE star = 1 ORDER BY id DESC",
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

	const fetchStarredRecord = () => {
		db.transaction((tx) => {
			tx.executeSql(
				"SELECT * FROM recordsData WHERE star = 1 ORDER BY id DESC",
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
							renderLeftActions={() => (
								<RecordStarAction
									star={item.star}
									backgroundColor={
										item.star === 0 ? "orange" : "grey"
									}
									onPress={() => {
										Alert.alert(
											"Un-star Record",
											"Do you want to un-star this record?\n" +
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
													text: "No",
													onPress: () =>
														console.log(
															"Cancel Pressed"
														),
													style: "cancel",
												},
												{
													text: "Yes",
													onPress: () => {
														if (item.star == 0) {
															db.transaction(
																(tx) => {
																	tx.executeSql(
																		"UPDATE recordsData SET star = 1 WHERE id = ?",
																		[
																			item.id,
																		],
																		(
																			txObj,
																			resultSet
																		) => {
																			console.log(
																				"updated id: " +
																					item.id
																			);
																			fetchStarredRecord();
																		},
																		(
																			txObj,
																			error
																		) => {
																			console.log(
																				"update failed " +
																					item.id
																			);
																		}
																	);
																}
															);
														} else {
															db.transaction(
																(tx) => {
																	tx.executeSql(
																		"UPDATE recordsData SET star = 0 WHERE id = ?",
																		[
																			item.id,
																		],
																		(
																			txObj,
																			resultSet
																		) => {
																			console.log(
																				"updated id: " +
																					item.id
																			);
																			fetchStarredRecord();
																		},
																		(
																			txObj,
																			error
																		) => {
																			console.log(
																				"update failed " +
																					item.id
																			);
																		}
																	);
																}
															);
														}
													},
												},
											],
											{ cancelable: false }
										);
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
																	fetchStarredRecord();
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
						fetchStarredRecord();
					}}
				/>
			) : null}
		</Screen>
	);
}

const styles = StyleSheet.create({
	container: {},
});

export default StarredRecordScreen;
