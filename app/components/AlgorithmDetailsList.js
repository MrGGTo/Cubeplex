import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import AppText from "./AppText";

function AlgorithmDetailsList({ id, algorithm }) {
	return (
		<TouchableOpacity>
			<View style={styles.container}>
				<AppText style={[styles.containerItem]} fontSize={18}>
					{id}
				</AppText>
				<AppText style={[styles.containerItem]} fontSize={18}>
					{algorithm}
				</AppText>
				{false && <AppText>SELECTED</AppText>}
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		justifyContent: "flex-start",
		flexDirection: "row",
		width: "100%",
		paddingVertical: 15,
	},
	containerItem: {
		marginRight: 15,
		marginLeft: 5,
	},
	text: {
		fontSize: 18,
	},
});

export default AlgorithmDetailsList;
