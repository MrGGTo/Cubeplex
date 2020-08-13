import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function RecordDeleteAction({ onPress }) {
	return (
		<TouchableWithoutFeedback
			onPress={onPress}
			style={{ justifyContent: "center", alignItems: "center" }}
		>
			<View style={styles.container}>
				<MaterialCommunityIcons
					name="trash-can"
					size={35}
					color="white"
				/>
			</View>
		</TouchableWithoutFeedback>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#FF5942",
		width: 75,
		justifyContent: "center",
		alignItems: "center",
	},
});

export default RecordDeleteAction;
