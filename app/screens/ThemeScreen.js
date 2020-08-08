import React from "react";
import { View, StyleSheet, FlatList } from "react-native";

import { themesData } from "../config/themes";
import Screen from "../components/Screen";
import ThemeItemList from "../components/ThemeItemList";
import AppText from "../components/AppText";
import ThemeItem from "../components/ThemeItem";

function ThemeScreen(props) {
	return (
		<Screen>
			{/* <FlatList
				data={themesData}
				keyExtractor={(data) => data.id.toString()}
				renderItem={({ item }) => (
					<ThemeItemList name={item.name} themes={item.themes} />
				)}
			/> */}
			<AppText style={{ margin: 25, fontSize: 36 }}>Themes</AppText>
			<FlatList
				columnWrapperStyle={{
					justifyContent: "space-evenly",
					marginVertical: 15,
					// marginHorizontal: "15%",
				}}
				numColumns={2}
				// scrollEnabled={false}
				data={themesData}
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

export default ThemeScreen;
