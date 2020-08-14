import React from "react";
import { Alert } from "react-native";
import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("db.db");

export const openOrCreateDatabase = () => {
	db.transaction((tx) => {
		tx.executeSql(
			"CREATE TABLE IF NOT EXISTS records (id INTEGER PRIMARY KEY AUTOINCREMENT, time INT, scramble TEXT, dateTime TEXT)"
		);
	});
};

export const deleteRecords = () => {
	Alert.alert(
		"Delete Timer Records",
		"Do you want to delete timer records?",
		[
			{
				text: "Cancel",
				onPress: () => console.log("Cancel Pressed"),
				style: "cancel",
			},
			{
				text: "Delete",
				onPress: () => {
					db.transaction((tx) => {
						tx.executeSql(
							"DELETE FROM records WHERE id != -1",
							null,
							// success
							(txObj, { rows: { _array } }) => {
								alert("Deleted Timer Records");
								console.log("Deleted Timer Records");
							},
							// failed
							(txObj, error) => {
								console.log("Delete Timer failed");
							}
						);
					});
				},
			},
		],
		{ cancelable: false }
	);
};
