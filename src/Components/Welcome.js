import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Welcome = ({user}) => (
	<View>
		<Text style={styles.welcome}>Welcome, {user}</Text>
	</View>
);

const styles = StyleSheet.create({
	welcome: {
		paddingTop: 20,
		textAlign: 'center',
		color: 'black',
		fontSize: 30,
		fontWeight: 'bold',
		fontFamily: 'Roboto'
	}
});

export default Welcome;
