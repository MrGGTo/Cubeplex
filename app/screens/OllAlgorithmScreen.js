import React, { useState } from "react";
import {
	View,
	StyleSheet,
	Text,
	TouchableHighlight,
	Image,
	FlatList,
	ScrollView,
	TouchableOpacity,
	Modal,
	StatusBar,
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
import { theme } from "../config/themes";
import IconButton from "../components/IconButton";
import router from "../navigation/router";
import AlgorithmStarAction from "../components/AlgorithmStarAction";
import AdDisplay from "../components/AdDisplay";

function OllAlgorithmScreen({ navigation }) {
	const [infoVisible, setInfoVisible] = useState("false");
	return (
		<Screen>
			<ScrollView>
				<View style={styles.header}>
					<AppText style={styles.title}>OLL Algorithms</AppText>
					<TouchableOpacity onPress={() => setInfoVisible(true)}>
						<AppText
							style={{
								color: theme.color,
								fontSize: 18,
							}}
						>
							Info
						</AppText>
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
									backgroundColor: theme.backgroundSecondary,
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
								<ScrollView style={{ margin: 15 }}>
									<AppText
										style={{
											fontSize: 32,
											fontWeight: "bold",
											marginBottom: 10,
										}}
									>
										What is OLL?
									</AppText>
									<AppText>
										OLL stands for Orient last layer, the
										3rd step of advanced Fridrich (CFOP)
										method. After solving F2L, the frist two
										layer, we need to orient the last layer
										(OLL). OLL can be done by the provided
										algorithms.
									</AppText>
								</ScrollView>
							</View>
						</Modal>
					</View>
				</Modal>
				<View style={styles.caseContainer}>
					<AppText style={styles.caseText}>Dot Case</AppText>
					{DotCase.map((item) => (
						<AlgorithmItem
							key={item.id}
							name={item.name}
							algorithm={item.algs[0].algorithm}
							image={item.image}
							onPress={() =>
								navigation.navigate(
									router.ALGORITHM_DETAILS,
									item
								)
							}
							renderLeftActions={() => (
								<AlgorithmStarAction
									onPress={() => {
										navigation.navigate(
											router.TRAIN_TIMER,
											item
										);
									}}
								/>
							)}
						/>
					))}
				</View>
				<View style={styles.caseContainer}>
					<AppText style={styles.caseText}>Line Case</AppText>
					{LineCase.map((item) => (
						<AlgorithmItem
							key={item.id}
							name={item.name}
							algorithm={item.algs[0].algorithm}
							image={item.image}
							onPress={() =>
								navigation.navigate(
									router.ALGORITHM_DETAILS,
									item
								)
							}
							renderLeftActions={() => (
								<AlgorithmStarAction
									onPress={() => {
										navigation.navigate(
											router.TRAIN_TIMER,
											item
										);
									}}
								/>
							)}
						/>
					))}
				</View>
				<View style={styles.caseContainer}>
					<AppText style={styles.caseText}>Cross Case</AppText>
					{CrossCase.map((item) => (
						<AlgorithmItem
							key={item.id}
							name={item.name}
							algorithm={item.algs[0].algorithm}
							image={item.image}
							onPress={() =>
								navigation.navigate(
									router.ALGORITHM_DETAILS,
									item
								)
							}
							renderLeftActions={() => (
								<AlgorithmStarAction
									onPress={() => {
										navigation.navigate(
											router.TRAIN_TIMER,
											item
										);
									}}
								/>
							)}
						/>
					))}
				</View>
				<View style={styles.caseContainer}>
					<AppText style={styles.caseText}>4 Corners Case</AppText>
					{FourCorners.map((item) => (
						<AlgorithmItem
							key={item.id}
							name={item.name}
							algorithm={item.algs[0].algorithm}
							image={item.image}
							onPress={() =>
								navigation.navigate(
									router.ALGORITHM_DETAILS,
									item
								)
							}
							renderLeftActions={() => (
								<AlgorithmStarAction
									onPress={() => {
										navigation.navigate(
											router.TRAIN_TIMER,
											item
										);
									}}
								/>
							)}
						/>
					))}
				</View>
				<View style={styles.caseContainer}>
					<AppText style={styles.caseText}>Short L Shape</AppText>
					{ShortLShape.map((item) => (
						<AlgorithmItem
							key={item.id}
							name={item.name}
							algorithm={item.algs[0].algorithm}
							image={item.image}
							onPress={() =>
								navigation.navigate(
									router.ALGORITHM_DETAILS,
									item
								)
							}
							renderLeftActions={() => (
								<AlgorithmStarAction
									onPress={() => {
										navigation.navigate(
											router.TRAIN_TIMER,
											item
										);
									}}
								/>
							)}
						/>
					))}
				</View>
				<View style={styles.caseContainer}>
					<AppText style={styles.caseText}>Long L Shape</AppText>
					{LongLShape.map((item) => (
						<AlgorithmItem
							key={item.id}
							name={item.name}
							algorithm={item.algs[0].algorithm}
							image={item.image}
							onPress={() =>
								navigation.navigate(
									router.ALGORITHM_DETAILS,
									item
								)
							}
							renderLeftActions={() => (
								<AlgorithmStarAction
									onPress={() => {
										navigation.navigate(
											router.TRAIN_TIMER,
											item
										);
									}}
								/>
							)}
						/>
					))}
				</View>
				<View style={styles.caseContainer}>
					<AppText style={styles.caseText}>C Shape</AppText>
					{CShape.map((item) => (
						<AlgorithmItem
							key={item.id}
							name={item.name}
							algorithm={item.algs[0].algorithm}
							image={item.image}
							onPress={() =>
								navigation.navigate(
									router.ALGORITHM_DETAILS,
									item
								)
							}
							renderLeftActions={() => (
								<AlgorithmStarAction
									onPress={() => {
										navigation.navigate(
											router.TRAIN_TIMER,
											item
										);
									}}
								/>
							)}
						/>
					))}
				</View>
				<View style={styles.caseContainer}>
					<AppText style={styles.caseText}>P Shape</AppText>
					{PShape.map((item) => (
						<AlgorithmItem
							key={item.id}
							name={item.name}
							algorithm={item.algs[0].algorithm}
							image={item.image}
							onPress={() =>
								navigation.navigate(
									router.ALGORITHM_DETAILS,
									item
								)
							}
							renderLeftActions={() => (
								<AlgorithmStarAction
									onPress={() => {
										navigation.navigate(
											router.TRAIN_TIMER,
											item
										);
									}}
								/>
							)}
						/>
					))}
				</View>
				<View style={styles.caseContainer}>
					<AppText style={styles.caseText}>T Shape</AppText>
					{TShape.map((item) => (
						<AlgorithmItem
							key={item.id}
							name={item.name}
							algorithm={item.algs[0].algorithm}
							image={item.image}
							onPress={() =>
								navigation.navigate(
									router.ALGORITHM_DETAILS,
									item
								)
							}
							renderLeftActions={() => (
								<AlgorithmStarAction
									onPress={() => {
										navigation.navigate(
											router.TRAIN_TIMER,
											item
										);
									}}
								/>
							)}
						/>
					))}
				</View>
				<View style={styles.caseContainer}>
					<AppText style={styles.caseText}>W Shape</AppText>
					{WShape.map((item) => (
						<AlgorithmItem
							key={item.id}
							name={item.name}
							algorithm={item.algs[0].algorithm}
							image={item.image}
							onPress={() =>
								navigation.navigate(
									router.ALGORITHM_DETAILS,
									item
								)
							}
							renderLeftActions={() => (
								<AlgorithmStarAction
									onPress={() => {
										navigation.navigate(
											router.TRAIN_TIMER,
											item
										);
									}}
								/>
							)}
						/>
					))}
				</View>
				<View style={styles.caseContainer}>
					<AppText style={styles.caseText}>Z Shape</AppText>
					{ZShape.map((item) => (
						<AlgorithmItem
							key={item.id}
							name={item.name}
							algorithm={item.algs[0].algorithm}
							image={item.image}
							onPress={() =>
								navigation.navigate(
									router.ALGORITHM_DETAILS,
									item
								)
							}
							renderLeftActions={() => (
								<AlgorithmStarAction
									onPress={() => {
										navigation.navigate(
											router.TRAIN_TIMER,
											item
										);
									}}
								/>
							)}
						/>
					))}
				</View>

				<AdDisplay bannerSize="largeBanner" />
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
	title: {
		fontSize: 35,
		fontWeight: "700",
		flex: 1,
	},
	header: {
		flexDirection: "row",
		marginTop: 15,
		marginHorizontal: 15,
		alignItems: "center",
	},
	info: {
		// color: selectedTheme.color,
		fontSize: 18,
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
