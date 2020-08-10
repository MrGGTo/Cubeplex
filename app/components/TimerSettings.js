import React from "react";
import { View, StyleSheet, Modal, Button } from "react-native";

function TimerSettings(props) {
	return (
		<Modal
			animationType="fade"
			transparent={true}
			visible={settingsVisible}
		>
			<View style={{ backgroundColor: "#000000aa", flex: 1 }}>
				<Modal
					animationType="slide"
					transparent={true}
					visible={settingsVisible}
				>
					<View
						style={{
							backgroundColor: "white",
							flex: 1,
							marginVertical: 75,
							marginHorizontal: 50,
							borderRadius: 15,
						}}
					>
						<Button
							title="Close Settings"
							onPress={() => setSettingsVisible(false)}
						/>
					</View>
				</Modal>
			</View>
		</Modal>
	);
}
export default TimerSettings;
