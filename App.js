import React, { useEffect, useState } from 'react'
import { Dimensions, StyleSheet, View } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import * as Location from 'expo-location'

const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#eee',
		alignItems: 'center',
		justifyContent: 'center',
		padding: 50,
	},
	map: {
		width: width,
		height: height,
	},	
})

export default function App() {

	const [location, setLocation] = useState({})

	const searchLocation = async () => {
		const { status } = await Location.requestPermissionsAsync()
		if (status !== 'granted') {
			return Alert.alert('You do not have the required permissions')
		}
		const location = await Location.getCurrentPositionAsync({})
		setLocation(location)
	}

	useEffect(() => {
		searchLocation()
	})

	return (
		<View style={styles.container}>
			<MapView style={styles.map}>
				{ location.coords
					? <Marker
						coordinate={location.coords}
						title="Marker title"
						description="Marker description"
					/>
					: null
				}
			</MapView>
		</View>
	)
}

