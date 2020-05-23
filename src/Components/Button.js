import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { StyleSheet, View } from 'react-native';

const Button = () => (
	<View style={styles.button}>
		<MaterialIcons style={styles.item} name="add-circle" size={80} color="#3700B3" />
	</View>
);

export default Button;

const styles = StyleSheet.create({
	button: {
		position: "absolute",
		right: 20,
		bottom: 20,
	},
})
