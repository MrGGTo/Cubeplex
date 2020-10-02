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
	ScrollView,
} from "react-native";

import AlgorithmStarAction from "../components/AlgorithmStarAction";
import Screen from "../components/Screen";

import plls from "../data/plls";
import IconButton from "../components/IconButton";
import AlgorithmItem from "../components/AlgorithmItem";
import AppText from "../components/AppText";
import { theme } from "../config/themes";
import router from "../navigation/router";
import { fontSize, spacing } from "../config/sizes";
import AdDisplay from "../components/AdDisplay";

function PllAlgorithmScreen({ navigation }) {
	return (
		<Screen>
			<ScrollView>
				<View style={styles.header}>
					<AppText style={styles.title}>PLL Algorithms</AppText>
				</View>
				{plls.map((item) => (
					<AlgorithmItem
						key={item.id}
						name={item.name}
						algorithm={item.algs[0].algorithm}
						image={item.image}
						onPress={() =>
							navigation.navigate(router.ALGORITHM_DETAILS, item)
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

export default PllAlgorithmScreen;
