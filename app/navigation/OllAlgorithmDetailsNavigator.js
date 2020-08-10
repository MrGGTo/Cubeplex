import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { selectedTheme, getSelectedTheme } from "../config/themes";
import router from "./router";
import PllAlgorithmScreen from "../screens/PllAlgorithmScreen";
import AlgorithmDetailsScreen from "../screens/AlgorithmDetailsScreen";
import OllAlgorithmScreen from "../screens/OllAlgorithmScreen";

const Stack = createStackNavigator();

const OllAlgorithmDetailsNavigator = () => {
	const theme = getSelectedTheme();
	return (
		<Stack.Navigator>
			<Stack.Screen
				name={router.OLL_ALGORITHMS}
				component={OllAlgorithmScreen}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name={router.ALGORITHM_DETAILS}
				component={AlgorithmDetailsScreen}
				options={{
					headerStyle: {
						backgroundColor: theme.backgroundSecondary,
					},
					headerTintColor: theme.fontPrimary,
					headerTitleStyle: {
						fontSize: 20,
						// fontWeight: "bold",
					},
				}}
			/>
		</Stack.Navigator>
	);
};

export default OllAlgorithmDetailsNavigator;
