import React from "react";
import { View, StyleSheet, Text, FlatList, Button } from "react-native";

import Screen from "../components/Screen";
import SettingsItemList from "../components/SettingsItemList";
import { ScrollView } from "react-native-gesture-handler";
import AppText from "../components/AppText";

const recordRow = [
	{
		id: 1,
		title: "Saved Records",
		iconName: "star",
		backgroundColor: "#FFE60A",
	},
	{
		id: 2,
		title: "Pinned Algorithms",
		iconName: "pin",
		backgroundColor: "#299B50",
	},
];

const settingsRow = [
	{
		id: 1,
		title: "Theme",
		iconName: "format-paint",
		backgroundColor: "pink",
	},
	{
		id: 2,
		title: "Timer Settings",
		iconName: "settings",
		backgroundColor: "#6f6f6f",
	},
];

const appDetailsRow = [
	{
		id: 1,
		title: "Tell Friends About Cubeplex",
		iconName: "thumb-up",
		backgroundColor: "dodgerblue",
	},
	{
		id: 2,
		title: "Send Feedback",
		iconName: "message-text",
		backgroundColor: "orange",
	},
	{
		id: 3,
		title: "Support Us",
		iconName: "heart",
		backgroundColor: "#FF5B83",
	},
];

const deleteRow = [
	{
		id: 1,
		title: "Delete Timer Records",
		backgroundColor: "red",
		iconName: "timer",
		noChevron: true,
		titleColor: "red",
	},
	{
		id: 2,
		title: "Delete Algorithm Training Records",
		backgroundColor: "red",
		iconName: "timer-sand",
		noChevron: true,
		titleColor: "red",
	},
	{
		id: 3,
		title: "Delete All Records",
		backgroundColor: "red",
		iconName: "trash-can",
		noChevron: true,
		titleColor: "red",
	},
];

function SettingScreen({ navigation }) {
	return (
		<Screen styl={styles.container}>
			<ScrollView>
				<AppText style={styles.title}>Settings</AppText>
				<SettingsItemList dataRow={recordRow} />
				<SettingsItemList
					dataRow={settingsRow}
					onPress={() => navigation.navigate("Theme")}
				/>
				<SettingsItemList dataRow={appDetailsRow} />
				<SettingsItemList dataRow={deleteRow} />
			</ScrollView>
		</Screen>
	);
}

const styles = StyleSheet.create({
	title: {
		fontSize: 35,
		margin: 20,
		fontWeight: "700",
	},
	container: {},
	settingsContainer: {
		// marginVertical: 25,
		marginBottom: 30,
		backgroundColor: "#f9f9f9",
	},
});

export default SettingScreen;
