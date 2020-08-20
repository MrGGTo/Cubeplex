// import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";

import { Provider, useDispatch } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import themeReducer from "./app/redux/themeReducer";
import { themesData, loadTheme } from "./app/config/themes";

import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const store = createStore(
	combineReducers({ themeReducer }),
	applyMiddleware(thunk)
);

export default function App() {
	return (
		<SafeAreaProvider>
			<Provider store={store}>
				<NavigationContainer theme={navigationTheme}>
					<AppNavigator />
				</NavigationContainer>
			</Provider>
		</SafeAreaProvider>
	);
}

// admob
// iOS Banner: ca-app-pub-6427265675170344/5652257755

// Android Banner: ca-app-pub-6427265675170344/8250500935
