import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const NoTodosInfo = () => (
	<View>
		<Text style={styles.text}>
			Well, it looks like you don't have any ToDo created yet. Click on the add button below to create your first ToDo.
		</Text>
	</View>
);

export default NoTodosInfo;

const styles = StyleSheet.create({
		text: {
			marginRight: 20,
			marginLeft: 20,
			textAlign: 'center',
			color: 'black',
			fontFamily: 'Roboto',
			fontWeight: '700',
			fontSize: 24,
		}
	}
);
