import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { selectedTheme } from "../config/themes";
import router from "./router";
import PllAlgorithmScreen from "../screens/PllAlgorithmScreen";
import AlgorithmDetailsScreen from "../screens/AlgorithmDetailsScreen";
import OllAlgorithmScreen from "../screens/OllAlgorithmScreen";

const Stack = createStackNavigator();

const OllAlgorithmDetailsNavigator = () => (
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
					backgroundColor: selectedTheme.backgroundSecondary,
				},
				headerTintColor: selectedTheme.fontPrimary,
				headerTitleStyle: {
					fontSize: 20,
					// fontWeight: "bold",
				},
			}}
		/>
	</Stack.Navigator>
);

export default OllAlgorithmDetailsNavigator;
