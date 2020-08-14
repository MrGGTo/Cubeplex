import React, { useEffect, useState } from "react";
import {
	View,
	StyleSheet,
	FlatList,
	Button,
	StatusBar,
	Alert,
	AsyncStorage,
} from "react-native";

import { theme, themesData } from "../config/themes";
import Screen from "../components/Screen";
import AppText from "../components/AppText";
import ThemeItem from "../components/ThemeItem";

// import { useSelector, useDispatch } from "react-redux";
// import { switchTheme } from "../redux/themeActions";

function ThemeScreen(props) {
	// const theme = useSelector((state) => state.themeReducer.theme);
	// const dispatch = useDispatch();
	// const themeIDID = loadTheme();

	return (
		<Screen>
			<StatusBar barStyle={theme.statusBarStyle} />
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
						// onPress={() => {
						// 	saveTheme(item.id);
						// 	dispatch(
						// 		switchTheme(
						// 			themesData.find(
						// 				(theme) => theme.id === item.id
						// 			)
						// 		)
						// 	);
						// }}
					/>
				)}
			/>
		</Screen>
	);
}

export default ThemeScreen;
