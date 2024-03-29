import React, { useEffect } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import * as SQLite from "expo-sqlite";

import Screen from "../components/Screen";
import AppText from "../components/AppText";
import SettingsItem from "../components/SettingsItem";
import { theme } from "../config/themes";
import {
	openOrCreateDatabase,
	deleteRecords,
} from "../database/RecordDatabase";
import AdDisplay from "../components/AdDisplay";

const settingsData = [
	{
		id: 1,
		title: "Delete Timer Records",
		backgroundColor: "red",
		iconName: "timer",
		noChevron: true,
		titleColor: "red",
		navigate: null,
		delete: "timer",
	},
];

const db = SQLite.openDatabase("db.db");

function ManageRecordsScreen(props) {
	// create table
	useEffect(() => {
		openOrCreateDatabase();
	}, []);

	return (
		<Screen style={styles.container}>
			<FlatList
				data={settingsData}
				keyExtractor={(data) => data.id.toString()}
				renderItem={({ item }) => (
					<SettingsItem
						title={item.title}
						iconName={item.iconName}
						backgroundColor={item.backgroundColor}
						noIcon={item.noIcon}
						titleColor={item.titleColor}
						noChevron={item.noChevron}
						onPress={() => {
							if (item.navigate != null) {
								navigation.navigate(item.navigate);
							} else {
								switch (item.delete) {
									case "timer":
										deleteRecords();
										break;

									case "training":
										alert("training");
										break;

									case "all":
										alert("all");
										break;

									default:
										break;
								}
							}
						}}
						separate={item.separate}
					/>
				)}
				ItemSeparatorComponent={() => {
					return (
						<View
							style={{
								height: 1,
								width: "75%",
								backgroundColor: theme.backgroundPrimary,
								marginLeft: "15%",
							}}
						/>
					);
				}}
			/>
			<AdDisplay bannerSize="banner" />
		</Screen>
	);
}

const styles = StyleSheet.create({
	title: {
		fontSize: 35,
		margin: 20,
		fontWeight: "700",
	},
	container: {
		marginVertical: 25,
	},
	settingsContainer: {
		// marginVertical: 25,
		marginBottom: 30,
		backgroundColor: "#f9f9f9",
	},
});

export default ManageRecordsScreen;
