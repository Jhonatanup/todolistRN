import React, { Fragment} from 'react';
import { StyleSheet, Image, Text, View, StatusBar } from 'react-native';
import img from '../assets/img.png';
import Welcome from './Welcome';
import NoTodosInfo from './NoTodosInfo';
import Button from './Button';

export default function App() {
  return (
		<Fragment>
			<Welcome user='Jhonatan' />
			<View style={styles.imgContainer}>
      <Image
        style={styles.tinyLogo}
        source={img}
      />
			</View>
			<NoTodosInfo />
			<Button />
		</Fragment>
  );
}

const styles = StyleSheet.create({
	imgContainer: {
		paddingBottom: 20,
		paddingTop: 20,
		justifyContent: 'center',
		alignItems: 'center',
	},
	tinyLogo: {
		height: 200,
		width: 200,
	},
});
