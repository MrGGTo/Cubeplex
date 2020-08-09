import React from "react";
import { StyleSheet, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import router from "./router";
import OllAlgorithmScreen from "../screens/OllAlgorithmScreen";
import PllAlgorithmScreen from "../screens/PllAlgorithmScreen";
import { selectedTheme } from "../config/themes";
import PllAlgorithmDetailsNavigator from "./PllAlgorithmDetailsNavigator";
import OllAlgorithmDetailsNavigator from "./OllAlgorithmDetailsNavigator";

const Tab = createBottomTabNavigator();

const AlgorithmNavigator = () => {
	return (
		<Tab.Navigator
			tabBarOptions={{
				activeTintColor: selectedTheme.color,
				activeBackgroundColor: selectedTheme.backgroundSecondary,
				inactiveBackgroundColor: selectedTheme.backgroundPrimary,
				// tabStyle: { backgroundColor: "red" },
			}}
		>
			<Tab.Screen
				name={router.OLL_ALGORITHMS}
				component={OllAlgorithmDetailsNavigator}
				options={{
					tabBarIcon: ({ color, size }) => (
						<Image
							style={{ height: size, width: size }}
							source={require("../assets/oll/dot_case/1.png")}
							// size={size}
						/>
					),
				}}
			/>
			<Tab.Screen
				name={router.PLL_ALGORITHMS}
				component={PllAlgorithmDetailsNavigator}
				options={{
					tabBarIcon: ({ color, size }) => (
						<Image
							style={{ height: size, width: size }}
							source={require("../assets/pll/Aa.png")}
							// size={size}
						/>
					),
				}}
			/>
			<Tab.Screen
				name={"Pinned Algorithms"}
				component={PllAlgorithmScreen}
				options={{
					tabBarIcon: ({ color, size }) => (
						<MaterialCommunityIcons
							name="pin"
							color={color}
							size={size}
						/>
					),
				}}
			/>
		</Tab.Navigator>
	);
};

const styles = StyleSheet.create({
	image: {
		resizeMode: "contain",
		// borderRadius: 35,
	},
});

export default AlgorithmNavigator;
