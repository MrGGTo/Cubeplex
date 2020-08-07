import React from "react";
import { View, StyleSheet, FlatList, Text } from "react-native";

import ThemeItem from "./ThemeItem";
import AppText from "./AppText";

function ThemeItemList({ name, themes }) {
	return (
		<View>
			<AppText style={styles.name}>{name}</AppText>
			<FlatList
				columnWrapperStyle={{
					justifyContent: "space-evenly",
					marginVertical: 15,
					// marginHorizontal: "15%",
				}}
				numColumns={2}
				scrollEnabled={false}
				data={themes}
				keyExtractor={(data) => data.id.toString()}
				renderItem={({ item }) => (
					<ThemeItem
						name={item.name}
						backgroundColor={item.color}
						themeBackgroundColor={item.backgroundSecondary}
					/>
				)}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {},
	name: {
		marginHorizontal: 35,
		marginTop: 15,
		fontSize: 36,
		fontWeight: "400",
	},
});

export default ThemeItemList;
