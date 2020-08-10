import React from "react";
import { View, StyleSheet, Text, FlatList, Button } from "react-native";

import Screen from "../components/Screen";
import SettingsItemList from "../components/SettingsItemList";
import { ScrollView } from "react-native-gesture-handler";
import AppText from "../components/AppText";
import SettingsItem from "../components/SettingsItem";
import { selectedTheme, getSelectedTheme } from "../config/themes";
import router from "../navigation/router";

const settingsData = [
	{
		id: 1,
		title: "Saved Records",
		iconName: "star",
		backgroundColor: "#FFE60A",
		navigate: router.THEME,
	},
	{
		id: 2,
		title: "Pinned Algorithms",
		iconName: "pin",
		backgroundColor: "#299B50",
		navigate: router.THEME,
		separate: true,
	},
	{
		id: 3,
		title: "Theme",
		iconName: "format-paint",
		backgroundColor: "pink",
		navigate: router.THEME,
	},
	{
		id: 4,
		title: "Timer Settings",
		iconName: "settings",
		backgroundColor: "#6f6f6f",
		navigate: router.THEME,
		separate: true,
	},
	{
		id: 5,
		title: "Tell Friends About Cubeplex",
		iconName: "thumb-up",
		backgroundColor: "dodgerblue",
		navigate: router.THEME,
	},
	{
		id: 6,
		title: "Send Feedback",
		iconName: "message-text",
		backgroundColor: "orange",
		navigate: router.THEME,
	},
	{
		id: 7,
		title: "Support Us",
		iconName: "heart",
		backgroundColor: "#FF5B83",
		navigate: router.THEME,
		separate: true,
	},
	{
		id: 8,
		title: "Delete Timer Records",
		backgroundColor: "red",
		iconName: "timer",
		noChevron: true,
		titleColor: "red",
		navigate: router.THEME,
	},
	{
		id: 9,
		title: "Delete Algorithm Training Records",
		backgroundColor: "red",
		iconName: "timer-sand",
		noChevron: true,
		titleColor: "red",
		navigate: router.THEME,
	},
	{
		id: 10,
		title: "Delete All Records",
		backgroundColor: "red",
		iconName: "trash-can",
		noChevron: true,
		titleColor: "red",
		navigate: router.THEME,
	},
];

function SettingScreen({ navigation }) {
	const theme = getSelectedTheme();
	return (
		<Screen styl={styles.container}>
			<AppText style={styles.title}>Settings</AppText>
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
						onPress={() => navigation.navigate(item.navigate)}
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
