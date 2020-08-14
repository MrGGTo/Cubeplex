import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import AppText from "./AppText";
import { theme } from "../config/themes";

function ThemeItem({
	backgroundColor,
	name,
	themeBackgroundColor = "#FFFFFF",
	onPress,
}) {
	return (
		<TouchableOpacity style={styles.container} onPress={onPress}>
			<View
				style={[
					styles.preview,
					{
						backgroundColor: themeBackgroundColor,
						borderColor: theme.fontSecondary,
					},
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
			<AppText
				style={{
					fontSize: 18,
					color: theme.fontSecondary,
				}}
			>
				{name}
			</AppText>
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
	text: {},
});

export default ThemeItem;
