import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import moment, { duration } from "moment";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Screen from "../components/Screen";
import AppText from "../components/AppText";
import { theme } from "../config/themes";

function RecordDetailsScreen({ route }) {
	const record = route.params;

	return (
		<Screen>
			<View style={styles.container}>
				<AppText style={[styles.text, styles.time]}>
					{moment.duration(record.time).minutes() !== 0
						? moment.duration(time).minutes().toString() + ":"
						: null}
					{moment.duration(record.time).seconds()}.
					{moment.duration(record.time).milliseconds()}s
				</AppText>
				<AppText style={[styles.text, styles.scramble]}>
					{record.scramble}
				</AppText>
				<AppText style={[styles.text, styles.dateTime]}>
					{record.dateTime}
				</AppText>
			</View>
		</Screen>
	);
}

const styles = StyleSheet.create({
	container: {
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
});

export default RecordDetailsScreen;
