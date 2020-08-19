import React from "react";
import { View, StyleSheet, Text, FlatList, Button, Share } from "react-native";
import email from "react-native-email";

import {
	AdMobBanner,
	AdMobInterstitial,
	PublisherBanner,
	AdMobRewarded,
	setTestDeviceIDAsync,
} from "expo-ads-admob";

import Screen from "../components/Screen";
import SettingsItemList from "../components/SettingsItemList";
import { ScrollView } from "react-native-gesture-handler";
import AppText from "../components/AppText";
import SettingsItem from "../components/SettingsItem";
import { theme } from "../config/themes";
import router from "../navigation/router";
import AdDisplay, { getBannerUnitID } from "../components/AdDisplay";

const settingsData = [
	{
		id: 1,
		title: "Starred Records",
		iconName: "star",
		backgroundColor: "#FFE60A",
		navigate: router.STARRED_RECORDS,
	},
	// {
	// 	id: 2,
	// 	title: "Pinned Algorithms",
	// 	iconName: "pin",
	// 	backgroundColor: "#299B50",
	// 	navigate: router.THEME,
	// 	separate: true,
	// },
	{
		id: 3,
		title: "Timer Settings",
		iconName: "settings",
		backgroundColor: "#6f6f6f",
		navigate: router.TIMER_SETTINGS,
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
	},
	{
		id: 6,
		title: "Support Us",
		iconName: "heart",
		backgroundColor: "#FF5B83",
		navigate: router.THEME,
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
					"Cubeplex - Professional Speed Cube Timer. https://www.google.com",
			});
		} catch (error) {
			alert(error.message);
		}
	};

	const handleEmail = () => {
		const to = ["tiaan@email.com", "foo@bar.com"]; // string or array of email addresses
		email(to, {
			// Optional additional arguments
			cc: ["bazzy@moo.com", "doooo@daaa.com"], // string or array of email addresses
			bcc: "mee@mee.com", // string or array of email addresses
			subject: "Show how to use",
			body: "Some body right here",
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
			{/* <View style={{ alignItems: "center" }}>
				<AdMobBanner
					bannerSize="banner"
					adUnitID={
						Platform.OS === "android"
							? "ca-app-pub-6427265675170344/8250500935"
							: "ca-app-pub-6427265675170344/5652257755"
					}
					servePersonalizedAds={false} // true or false
					onDidFailToReceiveAdWithError={(value) => {
						console.log("failed " + value);
					}}
				/>
			</View> */}
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
