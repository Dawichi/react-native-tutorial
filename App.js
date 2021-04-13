import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, FlatList } from 'react-native';

const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#ccc',
		alignItems: 'center',
		justifyContent: 'center',
		padding: 50,
	},
})

export default function App() {
	return (
		<View style={styles.container}>
		<Text>inisio</Text>
			<FlatList 
				data={[
					{ key: '1', name: 'Nico' },
					{ key: '2', name: 'Jhon' },
					{ key: '3', name: 'David' },
					{ key: '4', name: 'Cait' },
					{ key: '5', name: 'Joanne' },
				]}
				renderItem={({ item }) => {
					<Text>{ item.name }</Text>
				}}
			/>
			<Text>fin</Text>
		</View>
	)
}
