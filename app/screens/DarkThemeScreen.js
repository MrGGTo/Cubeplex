import React from "react";
import { View, StyleSheet, FlatList } from "react-native";

import { themesData, lightThemes } from "../config/themes";
import Screen from "../components/Screen";
import ThemeItemList from "../components/ThemeItemList";
import AppText from "../components/AppText";
import ThemeItem from "../components/ThemeItem";

function DarkThemeScreen(props) {
	return (
		<Screen>
			<FlatList
				columnWrapperStyle={{
					justifyContent: "space-evenly",
					marginVertical: 15,
					// marginHorizontal: "15%",
				}}
				numColumns={2}
				// scrollEnabled={false}
				data={lightThemes}
				keyExtractor={(data) => data.id.toString()}
				renderItem={({ item }) => (
					<ThemeItem
						name={item.name}
						backgroundColor={item.color}
						themeBackgroundColor={item.backgroundSecondary}
					/>
				)}
			/>
		</Screen>
	);
}

export default DarkThemeScreen;
