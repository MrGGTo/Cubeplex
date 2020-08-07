import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import AppText from "./AppText";
import { selectedTheme } from "../config/themes";

function ThemeItem({
	backgroundColor,
	name,
	themeBackgroundColor = "#FFFFFF",
}) {
	return (
		<TouchableOpacity style={styles.container}>
			<View
				style={[
					styles.preview,
					{ backgroundColor: themeBackgroundColor },
				]}
			>
				<View style={styles.previewContainer}>
					<View
						style={[styles.line, { width: "95%", backgroundColor }]}
					></View>
					<View
						style={[styles.line, { width: "55%", backgroundColor }]}
					></View>
					<View
						style={[styles.line, { width: "80%", backgroundColor }]}
					></View>
				</View>
			</View>
			<AppText style={styles.text}>{name}</AppText>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		justifyContent: "center",
		// width: "25%",
	},
	preview: {
		width: 100,
		height: 100,
		borderRadius: 25,
		borderWidth: 1,
		borderColor: selectedTheme.fontSecondary,
		alignItems: "center",
		justifyContent: "center",
	},
	previewContainer: {
		width: "80%",
		height: "80%",
		justifyContent: "space-evenly",
	},
	line: {
		height: "15%",
		width: "80%",
		borderRadius: 50,
		backgroundColor: "dodgerblue",
		left: 0,
	},
	text: {
		fontSize: 18,
		color: selectedTheme.fontSecondary,
	},
});

export default ThemeItem;
