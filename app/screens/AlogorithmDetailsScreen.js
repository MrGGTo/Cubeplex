import React from "react";
import {
	View,
	StyleSheet,
	Image,
	Text,
	TouchableOpacity,
	FlatList,
	ScrollView,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import plls from "../data/plls";
import Screen from "../components/Screen";
import AlgorithmDetailsList from "../components/AlgorithmDetailsList";
import AppText from "../components/AppText";
import { selectedTheme } from "../config/themes";

const Aa = [
	{
		id: 1,
		algorithm: "(x) R' U R' D2 R U' R' D2 R2 (x')",
	},
	{
		id: 2,
		algorithm: "l' U R' D2 R U' R' D2 R2 (x')",
	},
	{
		id: 3,
		algorithm: "(x') R' D R' U2 R D' R' U2 R2 (x)",
	},
	{
		id: 4,
		algorithm: "(x') R' D R' U2 R D' R' U2 R2 (x)",
	},
	{
		id: 5,
		algorithm: "(x') R' D R' U2 R D' R' U2 R2 (x)",
	},
	{
		id: 6,
		algorithm: "(x') R' D R' U2 R D' R' U2 R2 (x)",
	},
	{
		id: 7,
		algorithm: "(x') R' D R' U2 R D' R' U2 R2 (x)",
	},
	{
		id: 8,
		algorithm: "(x') R' D R' U2 R D' R' U2 R2 (x)",
	},
	{
		id: 9,
		algorithm: "(x') R' D R' U2 R D' R' U2 R2 (x)",
	},
	{
		id: 10,
		algorithm: "(x') R' D R' U2 R D' R' U2 R2 (x)",
	},
	{
		id: 11,
		algorithm: "(x') R' D R' U2 R D' R' U2 R2 (x)",
	},
	{
		id: 12,
		algorithm: "(x') R' D R' U2 R D' R' U2 R2 (x)",
	},
];

function AlogorithmDetailsScreen(props) {
	return (
		<Screen>
			<View style={styles.container}>
				<View style={styles.detailContainer}>
					<Image
						style={styles.image}
						source={require("../assets/pll/Aa.png")}
					/>
					<View>
						<AppText style={styles.name}>Aa perm</AppText>
						<AppText style={styles.recordText}>Best : 2.1s</AppText>
						<AppText style={styles.recordText}>Avg. : 2.1s</AppText>
						<AppText style={styles.recordText}>AO5 : 2.1s</AppText>
					</View>
				</View>
				<View
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
					}}
				>
					<TouchableOpacity style={styles.pinButton}>
						<MaterialCommunityIcons
							name="pin"
							color="white"
							size={30}
						/>
						<AppText style={styles.pinText}>Pin</AppText>
					</TouchableOpacity>
					<TouchableOpacity style={styles.TrainButton}>
						<MaterialCommunityIcons
							name="timer-sand"
							color="white"
							size={30}
						/>
						<AppText style={styles.pinText}>Train</AppText>
					</TouchableOpacity>
				</View>
				<View style={styles.algorithmContainer}>
					<AppText>Algorithms</AppText>
					<FlatList
						data={Aa}
						keyExtractor={(a) => a.id.toString()}
						renderItem={({ item }) => (
							<AlgorithmDetailsList
								id={item.id}
								algorithm={item.algorithm}
							/>
						)}
						ItemSeparatorComponent={() => {
							return (
								<View
									style={{
										height: 1,
										width: "65%",
										backgroundColor: "#CED0CE",
										marginLeft: "10%",
									}}
								/>
							);
						}}
					/>
				</View>
			</View>
		</Screen>
	);
}

const styles = StyleSheet.create({
	container: {
		marginHorizontal: "10%",
	},
	image: {
		marginVertical: 25,
		marginRight: 25,
		width: 150,
		height: 150,
	},
	detailContainer: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "flex-start",
	},
	pinButton: {
		// flexDirection: "row",
		// alignItems: "center",
		// justifyContent: "center",
		// backgroundColor: "orange",
		// paddingVertical: 8,
		// marginVertical: 5,
		// borderRadius: 30,

		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "orange",
		paddingVertical: 8,
		marginHorizontal: 5,
		flex: 1,
		borderRadius: 30,
	},
	pinText: {
		color: "white",
		fontSize: 25,
	},
	TrainButton: {
		// flexDirection: "row",
		// alignItems: "center",
		// justifyContent: "center",
		// backgroundColor: "dodgerblue",
		// paddingVertical: 8,
		// marginVertical: 5,
		// borderRadius: 30,

		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: selectedTheme.color,
		paddingVertical: 8,
		marginHorizontal: 5,
		flex: 1,
		borderRadius: 30,
	},
	name: {
		fontSize: 40,
		fontWeight: "600",
		// margin: 25,
	},
	algorithmContainer: {
		marginVertical: 25,
		height: "55%",
	},
	recordText: {
		fontSize: 16,
		marginTop: 5,
	},
});

export default AlogorithmDetailsScreen;
