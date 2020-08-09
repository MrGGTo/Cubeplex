import React, { useState } from "react";
import {
	View,
	StyleSheet,
	Text,
	TouchableHighlight,
	Image,
	FlatList,
	Modal,
	TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Screen from "../components/Screen";

import plls from "../data/plls";
import IconButton from "../components/IconButton";
import AlgorithmStarAction from "../components/AlgorithmStarAction";
import AlgorithmItem from "../components/AlgorithmItem";
import AppText from "../components/AppText";
import { selectedTheme } from "../config/themes";

function PllAlgorithmScreen(props) {
	const [infoVisible, setInfoVisible] = useState("false");
	return (
		<Screen>
			<View style={styles.header}>
				<AppText style={styles.title}>PLL Algorithms</AppText>
				<TouchableOpacity onPress={() => setInfoVisible(true)}>
					<AppText style={styles.info}>Info</AppText>
				</TouchableOpacity>
			</View>
			<Modal
				animationType="fade"
				transparent={true}
				visible={infoVisible}
			>
				<View style={{ backgroundColor: "#000000aa", flex: 1 }}>
					<Modal
						animationType="slide"
						transparent={true}
						visible={infoVisible}
					>
						<View
							style={{
								backgroundColor:
									selectedTheme.backgroundSecondary,
								flex: 1,
								marginVertical: 75,
								marginHorizontal: 50,
								borderRadius: 15,
							}}
						>
							<View style={{ flexDirection: "row-reverse" }}>
								<IconButton
									name="close"
									size={35}
									onPress={() => setInfoVisible(false)}
									style={{ padding: 15 }}
								/>
							</View>
						</View>
					</Modal>
				</View>
			</Modal>
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
	title: {
		fontSize: 35,
		fontWeight: "700",
		flex: 1,
	},
	header: {
		flexDirection: "row",
		margin: 15,
		alignItems: "center",
	},
	info: {
		color: selectedTheme.color,
	},
});

export default PllAlgorithmScreen;
