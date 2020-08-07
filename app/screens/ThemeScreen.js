import React from "react";
import { View, StyleSheet, FlatList } from "react-native";

import { themesData } from "../config/themes";
import Screen from "../components/Screen";
import ThemeItemList from "../components/ThemeItemList";
import AppText from "../components/AppText";

function ThemeScreen(props) {
	return (
		<Screen>
			<FlatList
				data={themesData}
				keyExtractor={(data) => data.id.toString()}
				renderItem={({ item }) => (
					<ThemeItemList name={item.name} themes={item.themes} />
				)}
			/>
		</Screen>
	);
}

export default ThemeScreen;
