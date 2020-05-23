import React, { Fragment} from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function App() {
  return (
		<Fragment>
			<StatusBar style={styles.status} />
			<View style={styles.header}>
				<View ><MaterialIcons name="menu" size={30} color="white" /></View>
				<Text style={styles.headerText}>Todos</Text>
				<View>{//<MaterialIcons name="menu" size={30} color="white" />}
				}</View>
			</View>
		</Fragment>
  );
}

const styles = StyleSheet.create({
	header: {
		paddingLeft: 15,
		paddingRight: 15,
		height: 65,
		backgroundColor: '#6200EE',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	headerText: {
		color: '#fff',
		fontSize: 20,
		fontWeight: '900',
		fontFamily: 'Roboto',
	},
	status: {
		color: 'red',
		backgroundColor: '#3700B3',
	},
});
