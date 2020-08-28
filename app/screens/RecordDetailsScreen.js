import React from "react";
import { View, StyleSheet, TouchableOpacity, Share } from "react-native";
import moment, { duration } from "moment";
import { MaterialCommunityIcons, EvilIcons } from "@expo/vector-icons";

import Screen from "../components/Screen";
import AppText from "../components/AppText";
import { formatTime } from "../components/TimerDisplay";
import { theme } from "../config/themes";

function RecordDetailsScreen({
	route,
	noScramble = false,
	noDateTime = false,
}) {
	const record = route.params;

	const onShare = async () => {
		try {
			await Share.share({
				message:
					"I got " +
					formatTime(record.time) +
					" with this scramble on Cubeplex. Scramble: " +
					record.scramble +
					". \nCubeplex - Professional Speed Cube Timer. Check it out on Google Play and App Store. " +
					(Platform.OS === "android"
						? "https://play.google.com/store/apps/details?id=com.mrggto.cubeplex"
						: "https://apps.apple.com/us/app/id1528934901"),
			});
		} catch (error) {
			alert(error.message);
		}
	};

	return (
		<Screen>
			<View style={styles.detailsContainer}>
				<AppText style={[styles.text, styles.time]}>
					{formatTime(record.time)}
				</AppText>
				{!noScramble && (
					<AppText style={[styles.text, styles.scramble]}>
						{record.scramble}
					</AppText>
				)}
				{!noDateTime && (
					<AppText style={[styles.text, styles.dateTime]}>
						{record.dateTime}
					</AppText>
				)}
			</View>
			<TouchableOpacity style={styles.button} onPress={onShare}>
				<EvilIcons
					name="share-apple"
					size={35}
					color={theme.fontPrimary}
				/>
				<AppText style={styles.buttonText}>Share</AppText>
			</TouchableOpacity>
		</Screen>
	);
}

const styles = StyleSheet.create({
	detailsContainer: {
		marginVertical: 25,
		padding: 20,
		backgroundColor: theme.backgroundSecondary,
	},
	text: {
		marginVertical: 10,
	},
	time: {
		fontSize: 46,
		fontWeight: "500",
	},
	scramble: {
		fontSize: 16,
	},
	dateTime: {
		fontSize: 16,
	},
	button: {
		backgroundColor: "dodgerblue",
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "row",
		height: 50,
		marginVertical: 10,
		// position: "absolute",
		// bottom: 0,
	},
	buttonText: {
		fontSize: 20,
	},
});

export default RecordDetailsScreen;
