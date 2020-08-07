import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function AlgorithmStarAction({ onPress }) {
	return (
		<TouchableWithoutFeedback
			onPress={onPress}
			style={{ justifyContent: "center", alignItems: "center" }}
		>
			<View style={styles.container}>
				<MaterialCommunityIcons name="pin" size={35} color="white" />
			</View>
		</TouchableWithoutFeedback>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "orange",
		width: 60,
		justifyContent: "center",
		alignItems: "center",
		// borderRadius: 35,
		// margin: 15,
	},
});

export default AlgorithmStarAction;
