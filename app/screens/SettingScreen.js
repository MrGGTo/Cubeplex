import React from "react";
import {
	View,
	StyleSheet,
	Text,
	FlatList,
	Button,
	Share,
	Platform,
} from "react-native";
import email from "react-native-email";
import * as StoreReview from "expo-store-review";

import Screen from "../components/Screen";
import AppText from "../components/AppText";
import SettingsItem from "../components/SettingsItem";
import { theme } from "../config/themes";
import router from "../navigation/router";
import AdDisplay, { getBannerUnitID } from "../components/AdDisplay";
import { spacing, fontSize } from "../config/sizes";

const settingsData = [
	{
		id: 1,
		title: "Starred Records",
		iconName: "star",
		backgroundColor: "#FFE60A",
		navigate: router.STARRED_RECORDS,
	},
	{
		id: 2,
		title: "Timer Settings",
		iconName: "settings",
		backgroundColor: "#6f6f6f",
		navigate: router.TIMER_SETTINGS,
	},
	{
		id: 3,
		title: "Gesture Help",
		iconName: "gesture",
		backgroundColor: "tomato",
		navigate: router.GESTURE_HELP,
		separate: true,
	},
	{
		id: 4,
		title: "Tell Friends About Cubeplex",
		iconName: "thumb-up",
		backgroundColor: "dodgerblue",
		// navigate: router.THEME,
		elseAction: "Share",
	},
	{
		id: 5,
		title: "Send Feedback",
		iconName: "message-text",
		backgroundColor: "orange",
		// navigate: router.THEME,
		elseAction: "Feedback",
		// separate: true,
	},
	{
		id: 6,
		title: "Rate Us",
		iconName: "heart",
		backgroundColor: "#FF5B83",
		// navigate: router.THEME,
		elseAction: "Rate",
		separate: true,
	},
	{
		id: 7,
		title: "Manage Records",
		backgroundColor: "teal",
		iconName: "pencil",
		titleColor: "red",
		navigate: router.MANAGE_RECORDS,
	},
];

function SettingScreen({ navigation }) {
	const onShare = async () => {
		try {
			await Share.share({
				message:
					"Cubeplex - Professional Speed Cube Timer. Check it out on Google Play and App Store. " +
					(Platform.OS === "android"
						? "https://play.google.com/store/apps/details?id=com.mrggto.cubeplex"
						: "https://apps.apple.com/us/app/id1528934901"),
			});
		} catch (error) {
			alert(error.message);
		}
	};

	const handleEmail = () => {
		const to = ["cubeplexfeedback@gmail.com"];
		email(to, {
			subject: "Feedback On Cubeplex",
		}).catch(console.error);
	};

	return (
		<Screen style={styles.container}>
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
						onPress={() => {
							if (item.navigate != null) {
								navigation.navigate(item.navigate);
							} else {
								switch (item.elseAction) {
									case "Share":
										onShare();
										break;

									case "Feedback":
										handleEmail();
										break;

									case "all":
										alert("all");
										break;

									case "Rate":
										// alert("all");
										StoreReview.requestReview();
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
		fontSize: fontSize.header,
		margin: spacing.l,
		fontWeight: "700",
	},
	container: {},
	settingsContainer: {
		marginBottom: 30,
		backgroundColor: "#f9f9f9",
	},
});

export default SettingScreen;
