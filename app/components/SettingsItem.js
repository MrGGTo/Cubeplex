import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { theme } from "../config/themes";
import { fontSize, spacing } from "../config/sizes";
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
			style={{ marginBottom: separate ? spacing.l : 0 }}
		>
			<View
				style={[
					styles.container,
					{
						backgroundColor: theme.backgroundSecondary,
					},
				]}
			>
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
						color={theme.fontPrimary}
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
		paddingHorizontal: spacing.m,
		paddingVertical: spacing.s,
	},
	iconContainer: {
		backgroundColor: "orange",
		padding: 5,
		borderRadius: 10,
		marginRight: spacing.m,
	},
	text: {
		fontSize: fontSize.m,
		flex: 1,
	},
});

export default SettingsItem;
