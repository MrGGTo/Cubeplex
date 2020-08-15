import React from "react";
import { View, StyleSheet, TouchableOpacity, Share } from "react-native";
import moment, { duration } from "moment";
import { MaterialCommunityIcons, EvilIcons } from "@expo/vector-icons";

import Screen from "../components/Screen";
import AppText from "../components/AppText";
import { theme } from "../config/themes";

function RecordDetailsScreen({ route }) {
	const record = route.params;

	const onShare = async () => {
		try {
			const result = await Share.share({
				message:
					"I got " +
					(moment.duration(record.time).minutes() > 0
						? moment.duration(record.time).minutes().toString() +
						  ":"
						: "") +
					pad2(
						moment.duration(record.time).seconds(),
						moment.duration(record.time).minutes()
					) +
					"." +
					pad3(moment.duration(record.time).milliseconds()) +
					"s" +
					" with this scramble on Cubeplex. Scramble: " +
					record.scramble,
			});
		} catch (error) {
			alert(error.message);
		}
	};
	const pad2 = (n, minutes) => {
		// (n < 10 ? "0" + n : n)
		if (n < 10 && minutes > 0) {
			return "0" + n;
		} else {
			return n;
		}
	};

	const pad3 = (n) => {
		if (n < 10) {
			return "00" + n;
		} else if (n < 99) {
			return "0" + n;
		} else {
			return n;
		}
	};
	return (
		<Screen>
			<View style={styles.detailsContainer}>
				<AppText style={[styles.text, styles.time]}>
					{moment.duration(record.time).minutes() !== 0
						? moment.duration(record.time).minutes().toString() +
						  ":"
						: null}
					{pad2(
						moment.duration(record.time).seconds(),
						moment.duration(record.time).minutes()
					)}
					.{pad3(moment.duration(record.time).milliseconds())}s
				</AppText>
				<AppText style={[styles.text, styles.scramble]}>
					{record.scramble}
				</AppText>
				<AppText style={[styles.text, styles.dateTime]}>
					{record.dateTime}
				</AppText>
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
