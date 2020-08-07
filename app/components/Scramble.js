import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppText from "./AppText";
import IconButton from "./IconButton";

var rotations = [
	"U",
	"D",
	"R",
	"L",
	"F",
	"B",
	"U2",
	"D2",
	"R2",
	"L2",
	"F2",
	"B2",
	"U'",
	"D'",
	"R'",
	"L'",
	"F'",
	"B'",
];

function Scramble({ style, fontSize, scrambleLength = 20 }) {
	const [scramble, setScramble] = useState(createScramble);

	const createScramble = () => {
		var scramble = [scrambleLength];
		for (var i = 0; i < scrambleLength; i++) {
			scramble[i] =
				rotations[Math.floor(Math.random() * rotations.length)] + " ";
			if (
				(i > 0 && scramble[i].charAt(0) == scramble[i - 1].charAt(0)) ||
				(i > 1 && scramble[i].charAt(0) == scramble[i - 2].charAt(0))
			) {
				i--;
			}
		}
		return scramble;
	};

	return (
		<View style={[styles.container, style]}>
			<AppText style={{ fontSize }}>{scramble}</AppText>
			<IconButton
				name="reload"
				size={24}
				style={{ paddingHorizontal: 5 }}
				onPress={() => {
					setScramble(createScramble);
				}}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
	},
});

export default Scramble;
