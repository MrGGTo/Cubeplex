import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import AppText from "./AppText";
import IconButton from "./IconButton";
import scrambleRotations from "../data/scrambleRotations";

function Scramble({ style, fontSize, scrambleLength = 20 }) {
	const [scramble, setScramble] = useState(createScramble);

	const createScramble = () => {
		var scramble = [scrambleLength];
		for (var i = 0; i < scrambleLength; i++) {
			scramble[i] =
				scrambleRotations[
					Math.floor(Math.random() * scrambleRotations.length)
				] + " ";
			if (
				(i > 0 && scramble[i].charAt(0) == scramble[i - 1].charAt(0)) ||
				(i > 1 && scramble[i].charAt(0) == scramble[i - 2].charAt(0))
			) {
				i--;
			}
		}
		return scramble;
	};

	useEffect(() => {
		setScramble(createScramble);
	}, []);

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
