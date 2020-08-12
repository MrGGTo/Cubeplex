import React, { Component, useState, useEffect } from "react";
import {
	View,
	Text,
	TouchableOpacity,
	ScrollView,
	StyleSheet,
	TextInput,
	Button,
	FlatList,
} from "react-native";

import {
	selectedTheme,
	getSelectedTheme,
	loadTheme,
	saveTheme,
	themesData,
} from "../config/themes";

import * as SQLite from "expo-sqlite";
import AppText from "../components/AppText";
import RecordItem from "../components/RecordItem";

const db = SQLite.openDatabase("db.db");

function RecordScreen() {
	const theme = getSelectedTheme();

	const [recordData, setRecordData] = useState([]);
	const [inputTime, setInputTime] = useState();
	const [inputScramble, setInputScramble] = useState();

	// create table
	db.transaction((tx) => {
		tx.executeSql(
			"CREATE TABLE IF NOT EXISTS record (id INTEGER PRIMARY KEY AUTOINCREMENT, time INT, scramble TEXT)"
		);
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

	fetchRecord = () => {
		db.transaction((tx) => {
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
	};

	addRecord = () => {
		db.transaction((tx) => {
			tx.executeSql(
				"INSERT INTO record (time, scramble) values (?, ?)",
				[inputTime, inputScramble],
				// success
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
							"DELETE FROM record WHERE id != -1",
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
					? recordData.map(({ id, time, scramble }) => (
							<RecordItem
								id={id}
								time={time}
								scramble={scramble}
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
	recordItem: {
		borderColor: "#000",
		borderWidth: 1,
		padding: 15,
		margin: 10,
	},
});
