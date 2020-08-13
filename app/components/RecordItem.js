import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import AppText from "./AppText";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import moment, { duration } from "moment";
import Swipeable from "react-native-gesture-handler/Swipeable";
import AlgorithmStarAction from "./AlgorithmStarAction";
import RecordStarAction from "./RecordStarAction";
import RecordDeleteAction from "./RecordDeleteAction";

function RecordItem({ key, time, scramble, dateTime, renderRightActions }) {
	return (
		<Swipeable
			renderLeftActions={RecordStarAction}
			renderRightActions={renderRightActions}
		>
			<View style={styles.filler}>
				<TouchableOpacity key={key} style={styles.container}>
					<AppText style={styles.recordItemTime}>
						{dateTime} id: {key}
					</AppText>
					<View style={styles.line}></View>
					<View style={styles.detailedContainer}>
						<View style={styles.timeContainer}>
							<MaterialCommunityIcons name="timer" size={20} />
							<AppText style={styles.time}>
								{moment.duration(time).seconds()}.
								{moment.duration(time).milliseconds()}s
							</AppText>
						</View>
						<AppText>{scramble}</AppText>
					</View>
				</TouchableOpacity>
			</View>
		</Swipeable>
	);
}

const styles = StyleSheet.create({
	filler: {
		backgroundColor: "white",
	},
	container: {
		borderColor: "#aaa",
		borderWidth: 1,
		borderRadius: 5,
		padding: 15,
		margin: 5,
		backgroundColor: "white",
	},
	recordItemTime: {
		borderBottomWidth: 1,
		borderBottomColor: "black",
	},
	line: {
		height: 1,
		width: "100%",
		backgroundColor: "black",
	},
	detailedContainer: {
		flexDirection: "row",
		paddingTop: 15,
	},
	timeContainer: {
		flexDirection: "row",
		alignItems: "center",
		flex: 1,
	},
	time: {
		fontSize: 20,
		marginHorizontal: 10,
		// flex: 1,
	},
});

export default RecordItem;
