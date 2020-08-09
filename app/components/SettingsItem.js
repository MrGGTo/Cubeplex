import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { selectedTheme } from "../config/themes";
import AppText from "./AppText";

function SettingsItem({
	iconName = "settings",
	size = 25,
	backgroundColor = "orange",
	color = "white",
	title,
	onPress,
	noIcon = false,
	noChevron = false,
	separate,
}) {
	return (
		<TouchableOpacity
			onPress={onPress}
			style={{ marginBottom: separate ? 30 : 0 }}
		>
			<View style={styles.container}>
				{!noIcon && (
					<View
						style={[
							styles.iconContainer,
							{ backgroundColor: backgroundColor },
						]}
					>
						<MaterialCommunityIcons
							name={iconName}
							color={color}
							size={size}
						/>
					</View>
				)}
				<AppText style={styles.text}>{title}</AppText>
				{!noChevron && (
					<MaterialCommunityIcons
						name="chevron-right"
						size={24}
						color={selectedTheme.fontPrimary}
					/>
				)}
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		alignItems: "center",
		// marginHorizontal: 15,
		paddingHorizontal: 15,
		paddingVertical: 10,
		backgroundColor: selectedTheme.backgroundSecondary,
	},
	iconContainer: {
		backgroundColor: "orange",
		padding: 5,
		borderRadius: 10,
		marginRight: 15,
	},
	text: {
		fontSize: 17,
		flex: 1,
	},
});

export default SettingsItem;
