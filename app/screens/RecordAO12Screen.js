import React from "react";
import {
	View,
	StyleSheet,
	TouchableOpacity,
	Share,
	FlatList,
} from "react-native";
import moment, { duration } from "moment";
import { MaterialCommunityIcons, EvilIcons } from "@expo/vector-icons";

import Screen from "../components/Screen";
import AppText from "../components/AppText";
import { formatTime } from "../components/TimerDisplay";
import { theme } from "../config/themes";
import RecordItem from "../components/RecordItem";
import RecordStarAction from "../components/RecordStarAction";
import RecordDeleteAction from "../components/RecordDeleteAction";
import router from "../navigation/router";

function RecordAO12Screen({ route, navigation }) {
	const record = route.params;
	console.log("hi: " + JSON.stringify(record.records));

	const onShare = async () => {
		try {
			await Share.share({
				message:
					"I got an Ao12 of " +
					record.ao12 +
					" on Cubeplex. " +
					"\nCubeplex - Professional Speed Cube Timer. Check it out on Google Play and App Store. " +
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
					{record.ao12}
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
			{/* <View> */}
			<FlatList
				data={record.records}
				keyExtractor={(data) => data.id.toString()}
				renderItem={({ item }) => (
					<RecordItem
						id={item.id}
						time={item.time}
						scramble={item.scramble}
						dateTime={item.dateTime}
						onPress={() => {
							navigation.navigate(router.RECORD_DETAILS, item);
						}}
					/>
				)}
			/>
			{/* </View> */}
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

export default RecordAO12Screen;
