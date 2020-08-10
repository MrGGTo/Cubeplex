import React from "react";
import { View, StyleSheet, FlatList, Button, StatusBar } from "react-native";

import {
	themesData,
	selectedTheme,
	selectedThemeAlter,
	getSelectedTheme,
} from "../config/themes";
import Screen from "../components/Screen";
import ThemeItemList from "../components/ThemeItemList";
import AppText from "../components/AppText";
import ThemeItem from "../components/ThemeItem";

import { useSelector, useDispatch } from "react-redux";
import { switchTheme } from "../redux/themeActions";

function ThemeScreen(props) {
	// const theme = useSelector((state) => state.themeReducer.theme);
	const dispatch = useDispatch();
	const theme = getSelectedTheme();

	return (
		<Screen>
			<StatusBar barStyle={selectedTheme.statusBarStyle} />
			{/* {selectedTheme.name === "Dodger Blue" ? (
				<Button
					title="Change to Purple"
					onPress={() => dispatch(switchTheme(selectedThemeAlter))}
				/>
			) : (
				<Button
					title="Change to Green"
					onPress={() => dispatch(switchTheme(selectedTheme))}
				/>
			)} */}
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
						onPress={() => {
							dispatch(
								switchTheme(
									themesData.find(
										(theme) => theme.id === item.id
									)
								)
							);
						}}
					/>
				)}
			/>
		</Screen>
	);
}

export default ThemeScreen;
