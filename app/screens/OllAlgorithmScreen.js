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
import { fontSize, spacing } from "../config/sizes";

function OllAlgorithmScreen({ navigation }) {
	return (
		<Screen>
			<ScrollView>
				<View style={styles.header}>
					<AppText style={styles.title}>OLL Algorithms</AppText>
				</View>

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
	title: {
		fontSize: fontSize.header,
		fontWeight: "700",
		flex: 1,
	},
	header: {
		flexDirection: "row",
		marginTop: spacing.m,
		marginHorizontal: spacing.m,
		alignItems: "center",
	},
	caseContainer: {
		marginVertical: spacing.l,
	},
	caseText: {
		fontSize: fontSize.xl,
		marginLeft: spacing.m,
	},
});

export default OllAlgorithmScreen;
