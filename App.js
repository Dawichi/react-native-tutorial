import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, Alert, Button } from 'react-native';

const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#eee',
		alignItems: 'center',
		justifyContent: 'center',
		padding: 50,
	},
})

const createDialog = () => Alert.alert(
	'Title dialog',
	'body text of the dialog as second parameter',
	[
		{
			text: 'Cancel',
			onPress: () => {},
			style: 'cancel',
		},
		{
			text: 'Accept',
			onPress: () => console.log('button pressed'),
			style: 'accept',
		},
	],
	{ cancelable: false },
)

export default function App() {

	const [modal, setModal] = useState(false)

	return (
		<View style={styles.container}>
			<Button title='Open alert' onPress={createDialog} />
		</View>
	)
}

