import React from "react";
import { View, StyleSheet, FlatList, Image } from "react-native";
import Screen from "../components/Screen";
import AppText from "../components/AppText";
import router from "../navigation/router";
import AlgorithmDetailsList from "../components/AlgorithmDetailsList";
import Timer from "../components/Timer";
import TrainTimer from "../components/TrainTimer";

function TrainingTimerScreen({ route }) {
	const data = route.params;

	return (
		<Screen style={styles.container}>
			<View style={styles.detailContainer}>
				<Image style={styles.image} source={data.image} />
				<AppText style={styles.algName}>{data.name}</AppText>
			</View>
			<TrainTimer onPressStop={onPressStop} />
			<FlatList
				data={data.algs}
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
								// width: "65%",
								backgroundColor: "#CED0CE",
								marginLeft: "10%",
							}}
						/>
					);
				}}
			/>
		</Screen>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
	},
	detailContainer: {
		flexDirection: "row",
		alignItems: "center",
	},
	algName: {
		fontSize: 36,
		fontWeight: "500",
	},
	image: {
		marginVertical: 25,
		marginRight: 25,
		width: 75,
		height: 75,
		resizeMode: "contain",
		// backgroundColor: "red",
	},
});

export default TrainingTimerScreen;
