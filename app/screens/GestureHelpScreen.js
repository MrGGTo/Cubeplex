import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Screen from "../components/Screen";
import AppText from "../components/AppText";
import { fontSize, spacing } from "../config/sizes";

const data = [
	{
		id: 1,
		title: "Start Timer",
		description: "Long Press (One Finger)",
		iconName: "gesture-tap-hold",
	},
	{
		id: 2,
		title: "Delete Last Solve",
		description: "Swipe Left",
		iconName: "gesture-swipe-left",
	},
	{
		id: 3,
		title: "New Scramble",
		description: "Swipe Right",
		iconName: "gesture-swipe-right",
	},
];

function GestureItem({ title, description, iconName }) {
	return (
		<View style={styles.container}>
			<View style={styles.icon}>
				<MaterialCommunityIcons
					name={iconName}
					size={30}
					color="white"
				/>
			</View>
			<View>
				<AppText style={styles.title}>{title}</AppText>
				<AppText style={styles.description} secondary>
					{description}
				</AppText>
			</View>
		</View>
	);
}

function GestureHelpScreen(props) {
	return (
		<View style={{ flex: 1 }}>
			<FlatList
				data={data}
				keyExtractor={(item) => item.id.toString()}
				renderItem={({ item }) => (
					<GestureItem
						title={item.title}
						description={item.description}
						iconName={item.iconName}
					/>
				)}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		alignItems: "center",
	},
	icon: { margin: spacing.m },
	title: { fontSize: fontSize.m },
	description: {
		fontSize: fontSize.s,
	},
});

export default GestureHelpScreen;
