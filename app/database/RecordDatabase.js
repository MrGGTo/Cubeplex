import React from "react";
import { Alert } from "react-native";
import * as SQLite from "expo-sqlite";
import { AdMobRewarded } from "expo-ads-admob";
import {
	getBannerUnitID,
	getRewardedUnitID,
	showRewardedAd,
} from "../components/AdDisplay";

const db = SQLite.openDatabase("db.db");

export const openOrCreateDatabase = () => {
	db.transaction((tx) => {
		tx.executeSql(
			"CREATE TABLE IF NOT EXISTS recordsData (id INTEGER PRIMARY KEY AUTOINCREMENT, time INT, scramble TEXT, dateTime TEXT, star INT)"
		);
	});
};

const getRewardedAd = async () => {
	try {
		await AdMobRewarded.setAdUnitID(getRewardedUnitID);
		await AdMobRewarded.requestAdAsync();
		await AdMobRewarded.showAdAsync();
		AdMobRewarded.addEventListener("rewardedVideoDidRewardUser", () => {
			console.log("reward delete");
			db.transaction((tx) => {
				tx.executeSql(
					"DELETE FROM recordsData WHERE id != -1",
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
		});
		AdMobRewarded.addEventListener("rewardedVideoDidFailToLoad", () => {
			db.transaction((tx) => {
				tx.executeSql(
					"DELETE FROM recordsData WHERE id != -1",
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
		});
	} catch (error) {
		console.log(error);
	}
};

export const deleteRecords = () => {
	Alert.alert(
		"Delete Timer Records",
		"Do you want to delete timer records? If yes, please watch an Ad to delete all records",
		[
			{
				text: "Cancel",
				onPress: () => console.log("Cancel Pressed"),
				style: "cancel",
			},
			{
				text: "Okay",
				onPress: () => {
					getRewardedAd();
				},
			},
		],
		{ cancelable: false }
	);
};
