import React from 'react';
import { StyleSheet, View, Dimensions, ActivityIndicator } from 'react-native';

const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#eee',
		alignItems: 'stretch',
		justifyContent: 'center',
		padding: 50,
	},
})

export default function App() {

	return (
		<View style={styles.container}>
			<ActivityIndicator size='large' color='#ccc' />
		</View>
	)
}

