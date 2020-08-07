import React from "react";
import {
	View,
	StyleSheet,
	Text,
	TouchableHighlight,
	Image,
	FlatList,
	ScrollView,
} from "react-native";

import Screen from "../components/Screen";
import DotCase from "../data/oll/DotCase";
import LineCase from "../data/oll/LineCase";
import CrossCase from "../data/oll/CrossCase";
import FourCorners from "../data/oll/FourCorners";
import ShortLShape from "../data/oll/ShortLShape";
import LongLShape from "../data/oll/LongLShape";
import CShape from "../data/oll/CShape";
import PShape from "../data/oll/PShape";
import TShape from "../data/oll/TShape";
import WShape from "../data/oll/WShape";
import ZShape from "../data/oll/ZShape";

import AlgorithmItem from "../components/AlgorithmItem";
import AppText from "../components/AppText";

function OllAlgorithmScreen(props) {
	return (
		<Screen>
			<ScrollView>
				<View style={styles.caseContainer}>
					<AppText style={styles.caseText}>Dot Case</AppText>
					<FlatList
						data={DotCase}
						scrollEnabled={false}
						keyExtractor={(dotCase) => dotCase.id.toString()}
						renderItem={({ item }) => (
							<AlgorithmItem
								name={item.name}
								algorithm={item.algorithmId}
								image={item.image}
								onPress={() =>
									console.log("Message selected", item)
								}
							/>
						)}
					/>
				</View>
				<View style={styles.caseContainer}>
					<AppText style={styles.caseText}>Line Case</AppText>
					<FlatList
						data={LineCase}
						scrollEnabled={false}
						keyExtractor={(lineCase) => lineCase.id.toString()}
						renderItem={({ item }) => (
							<AlgorithmItem
								name={item.name}
								algorithm={item.algorithmId}
								image={item.image}
								onPress={() =>
									console.log("Message selected", item)
								}
							/>
						)}
					/>
				</View>
				<View style={styles.caseContainer}>
					<AppText style={styles.caseText}>Cross Case</AppText>
					<FlatList
						data={CrossCase}
						scrollEnabled={false}
						keyExtractor={(crossCase) => crossCase.id.toString()}
						renderItem={({ item }) => (
							<AlgorithmItem
								name={item.name}
								algorithm={item.algorithmId}
								image={item.image}
								onPress={() =>
									console.log("Message selected", item)
								}
							/>
						)}
					/>
				</View>
				<View style={styles.caseContainer}>
					<AppText style={styles.caseText}>4 Corners Case</AppText>
					<FlatList
						data={FourCorners}
						scrollEnabled={false}
						keyExtractor={(fourCorners) =>
							fourCorners.id.toString()
						}
						renderItem={({ item }) => (
							<AlgorithmItem
								name={item.name}
								algorithm={item.algorithmId}
								image={item.image}
								onPress={() =>
									console.log("Message selected", item)
								}
							/>
						)}
					/>
				</View>
				<View style={styles.caseContainer}>
					<AppText style={styles.caseText}>Short L Shape</AppText>
					<FlatList
						data={ShortLShape}
						scrollEnabled={false}
						keyExtractor={(shortLShape) =>
							shortLShape.id.toString()
						}
						renderItem={({ item }) => (
							<AlgorithmItem
								name={item.name}
								algorithm={item.algorithmId}
								image={item.image}
								onPress={() =>
									console.log("Message selected", item)
								}
							/>
						)}
					/>
				</View>
				<View style={styles.caseContainer}>
					<AppText style={styles.caseText}>Long L Shape</AppText>
					<FlatList
						data={LongLShape}
						scrollEnabled={false}
						keyExtractor={(longLShape) => longLShape.id.toString()}
						renderItem={({ item }) => (
							<AlgorithmItem
								name={item.name}
								algorithm={item.algorithmId}
								image={item.image}
								onPress={() =>
									console.log("Message selected", item)
								}
							/>
						)}
					/>
				</View>
				<View style={styles.caseContainer}>
					<AppText style={styles.caseText}>C Shape</AppText>
					<FlatList
						data={CShape}
						scrollEnabled={false}
						keyExtractor={(cShape) => cShape.id.toString()}
						renderItem={({ item }) => (
							<AlgorithmItem
								name={item.name}
								algorithm={item.algorithmId}
								image={item.image}
								onPress={() =>
									console.log("Message selected", item)
								}
							/>
						)}
					/>
				</View>
				<View style={styles.caseContainer}>
					<AppText style={styles.caseText}>P Shape</AppText>
					<FlatList
						data={PShape}
						scrollEnabled={false}
						keyExtractor={(pShape) => pShape.id.toString()}
						renderItem={({ item }) => (
							<AlgorithmItem
								name={item.name}
								algorithm={item.algorithmId}
								image={item.image}
								onPress={() =>
									console.log("Message selected", item)
								}
							/>
						)}
					/>
				</View>
				<View style={styles.caseContainer}>
					<AppText style={styles.caseText}>T Shape</AppText>
					<FlatList
						data={TShape}
						scrollEnabled={false}
						keyExtractor={(tShape) => tShape.id.toString()}
						renderItem={({ item }) => (
							<AlgorithmItem
								name={item.name}
								algorithm={item.algorithmId}
								image={item.image}
								onPress={() =>
									console.log("Message selected", item)
								}
							/>
						)}
					/>
				</View>
				<View style={styles.caseContainer}>
					<AppText style={styles.caseText}>W Shape</AppText>
					<FlatList
						data={WShape}
						scrollEnabled={false}
						keyExtractor={(wShape) => wShape.id.toString()}
						renderItem={({ item }) => (
							<AlgorithmItem
								name={item.name}
								algorithm={item.algorithmId}
								image={item.image}
								onPress={() =>
									console.log("Message selected", item)
								}
							/>
						)}
					/>
				</View>
				<View style={styles.caseContainer}>
					<AppText style={styles.caseText}>Z Shape</AppText>
					<FlatList
						data={ZShape}
						scrollEnabled={false}
						keyExtractor={(zShape) => zShape.id.toString()}
						renderItem={({ item }) => (
							<AlgorithmItem
								name={item.name}
								algorithm={item.algorithmId}
								image={item.image}
								onPress={() =>
									console.log("Message selected", item)
								}
							/>
						)}
					/>
				</View>
			</ScrollView>
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
	caseContainer: {
		marginVertical: 25,
	},
	caseText: {
		fontSize: 35,
		marginLeft: 15,
	},
});

export default OllAlgorithmScreen;
