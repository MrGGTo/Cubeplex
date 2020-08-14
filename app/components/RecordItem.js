import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import moment, { duration } from "moment";
import Swipeable from "react-native-gesture-handler/Swipeable";

import { theme } from "../config/themes";
import AppText from "./AppText";
import AlgorithmStarAction from "./AlgorithmStarAction";
import RecordStarAction from "./RecordStarAction";
import RecordDeleteAction from "./RecordDeleteAction";

function RecordItem({
	id,
	time,
	scramble,
	dateTime,
	star,
	renderLeftActions,
	renderRightActions,
	onPress,
}) {
	return (
		<Swipeable
			renderLeftActions={renderLeftActions}
			renderRightActions={renderRightActions}
		>
			<View style={styles.filler}>
				<TouchableOpacity style={styles.container} onPress={onPress}>
					<AppText style={styles.recordItemTime}>{dateTime}</AppText>
					<View style={styles.line}></View>
					<View style={styles.detailedContainer}>
						<View style={styles.timeContainer}>
							<MaterialCommunityIcons
								name="timer"
								size={20}
								color={theme.fontPrimary}
							/>
							<AppText style={styles.time}>
								{moment.duration(time).minutes() !== 0
									? moment
											.duration(time)
											.minutes()
											.toString() + ":"
									: null}
								{moment.duration(time).seconds()}.
								{moment.duration(time).milliseconds()}s
							</AppText>
							<MaterialCommunityIcons
								name="chevron-right"
								size={20}
								color={theme.fontPrimary}
							/>
						</View>
						<View style={styles.line}></View>
						<AppText>{scramble}</AppText>
					</View>
				</TouchableOpacity>
			</View>
		</Swipeable>
	);
}

const styles = StyleSheet.create({
	filler: {
		backgroundColor: theme.backgroundPrimary,
	},
	container: {
		borderColor: "#aaa",
		borderWidth: 1,
		borderRadius: 5,
		padding: 15,
		margin: 5,
		backgroundColor: theme.backgroundSecondary,
	},
	recordItemTime: {
		borderBottomWidth: 1,
		borderBottomColor: theme.fontPrimary,
	},
	line: {
		height: 1,
		width: "100%",
		backgroundColor: theme.fontPrimary,
		marginVertical: 5,
	},
	timeContainer: {
		flexDirection: "row",
		alignItems: "center",
		marginHorizontal: 5,
		marginVertical: 10,
		flex: 1,
	},
	time: {
		fontSize: 20,
		fontWeight: "500",
		marginHorizontal: 10,
		flex: 1,
	},
});

export default RecordItem;
