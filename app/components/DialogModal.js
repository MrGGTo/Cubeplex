import React from "react";
import { View, StyleSheet, Modal } from "react-native";
import IconButton from "./IconButton";
import AppText from "./AppText";
import { selectedTheme } from "../config/themes";

function DialogModal({ visible }) {
	return (
		<Modal animationType="fade" transparent={true} visible={visible}>
			<View style={{ backgroundColor: "#000000aa", flex: 1 }}>
				<Modal
					animationType="slide"
					transparent={true}
					visible={visible}
				>
					<View
						style={{
							backgroundColor: selectedTheme.backgroundSecondary,
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
								// onPress={() => false}
								style={{ padding: 15 }}
							/>
						</View>
					</View>
				</Modal>
			</View>
		</Modal>
	);
}

const styles = StyleSheet.create({
	container: {},
});

export default DialogModal;
