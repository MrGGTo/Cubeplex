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

import {
	themesData,
	selectedTheme,
	selectedThemeAlter,
	getSelectedTheme,
} from "../config/themes";
import Screen from "../components/Screen";
import AppText from "../components/AppText";
import ThemeItem from "../components/ThemeItem";

import { useSelector, useDispatch } from "react-redux";
import { switchTheme } from "../redux/themeActions";

function ThemeScreen(props) {
	// const theme = useSelector((state) => state.themeReducer.theme);
	const dispatch = useDispatch();
	const theme = getSelectedTheme();

	// const [themeID, setThemeID] = useState(1);

	// const saveTheme = async () => {
	// 	try {
	// 		await AsyncStorage.setItem("ThemeID", theme.id);
	// 	} catch (error) {
	// 		Alert(error);
	// 	}
	// };

	// const loadTheme = async () => {
	// 	try {
	// 		const id = await AsyncStorage.getItem("ThemeID");
	// 		return id != null ? parseInt(id) : null;
	// 	} catch (error) {
	// 		console.log("Bad");
	// 		alert(error);
	// 	}
	// };

	// useEffect(() => {
	// 	// saveTheme();
	// 	const idx = loadTheme();
	// 	dispatch(switchTheme(themesData.find((theme) => theme.id === idx)));
	// }, []);

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
						onPress={() => {
							dispatch(
								switchTheme(
									themesData.find(
										(theme) => theme.id === item.id
									)
								)
							);
							// saveTheme();
							// loadTheme();
						}}
					/>
				)}
			/>
			{/* <AppText>{themeID}</AppText> */}
		</Screen>
	);
}

export default ThemeScreen;
