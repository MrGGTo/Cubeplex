import React from "react";
import {
	View,
	StyleSheet,
	Text,
	TouchableHighlight,
	Image,
	FlatList,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Screen from "../components/Screen";
import Swipeable from "react-native-gesture-handler/Swipeable";

import plls from "../data/plls";
import IconButton from "../components/IconButton";
import AlgorithmStarAction from "../components/AlgorithmStarAction";
import AlgorithmItem from "../components/AlgorithmItem";

function PllAlgorithmScreen(props) {
	return (
		<Screen>
			<FlatList
				data={plls}
				keyExtractor={(pll) => pll.id.toString()}
				renderItem={({ item }) => (
					<AlgorithmItem
						name={item.name}
						algorithm={item.algorithm}
						image={item.image}
						onPress={() => console.log("Message selected", item)}
					/>
				)}
			/>
		</Screen>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		flexDirection: "row",
		padding: 15,
		backgroundColor: "white",
		borderWidth: 1,
		margin: 10,
		borderRadius: 15,
	},
	detailContainer: {
		flexDirection: "column",
		marginLeft: 15,
		justifyContent: "center",
		flex: 1,
	},
	image: {
		width: 75,
		height: 75,
		// borderRadius: 35,
	},
});

export default PllAlgorithmScreen;
