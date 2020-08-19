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
import { theme } from "../config/themes";
import router from "../navigation/router";

function AlgorithmDetailsScreen({ route, navigation }) {
	const algorithmData = route.params;

	return (
		<Screen>
			<View style={styles.container}>
				<View style={styles.detailContainer}>
					<Image style={styles.image} source={algorithmData.image} />
					<View>
						<AppText style={styles.name}>
							{algorithmData.name}
						</AppText>
						{/* <AppText style={styles.recordText}>Best : 2.1s</AppText>
						<AppText style={styles.recordText}>Avg. : 2.1s</AppText>
						<AppText style={styles.recordText}>AO5 : 2.1s</AppText> */}
					</View>
				</View>
				<View
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
					}}
				>
					{/* <TouchableOpacity style={styles.pinButton}>
						<MaterialCommunityIcons
							name="pin"
							color="white"
							size={30}
						/>
						<AppText style={styles.pinText}>Pin</AppText>
					</TouchableOpacity> */}
					<TouchableOpacity
						onPress={() => {
							navigation.navigate(
								router.TRAIN_TIMER,
								algorithmData
							);
						}}
						style={[
							styles.TrainButton,
							{
								backgroundColor: "dodgerblue",
							},
						]}
					>
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
						data={algorithmData.algs}
						keyExtractor={(alg) => alg.id.toString()}
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
		width: 125,
		height: 125,
		resizeMode: "contain",
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
		paddingVertical: 8,
		marginHorizontal: 5,
		flex: 1,
		borderRadius: 30,
	},
	name: {
		fontSize: 28,
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

export default AlgorithmDetailsScreen;
