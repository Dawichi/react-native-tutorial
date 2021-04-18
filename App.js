import React, { useEffect, useState } from 'react'
import { Dimensions, StyleSheet, View, Text, Button } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import { Camera } from 'expo-camera'

const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#eee',
		alignItems: 'center',
		justifyContent: 'center',
		padding: 50,
	},
	camera: {
		flex: 1,
		width: width,
		height: height,
	},
})

export default function App() {

	const [permissions, setPermissions] = useState(null)

	const [cameraType, setCameraType] = useState(Camera.Constants.Type.back)

	const getPermissions = async () => {
		const { status } = await Camera.requestPermissionsAsync()
		setPermissions(status == 'granted')
		console.log(status)
	}

	useEffect(() => {
		getPermissions()
	})

	if (permissions === null) {
		return <View><Text>Waiting for the user to accept the permissions required</Text></View>
	}

	if (permissions === false) {
		return <View><Text>The app has no access to the camera :(</Text></View>
	}

	return (
		<View style={styles.container}>
			<Text>Camera</Text>
			<Camera style={styles.camera} type={cameraType} >
				<Button
					title="<->"
					onPress={() => {
						setCameraType(() => {
							const { front, back } = Camera.Constants.Type
							const newType = cameraType === back ? front : back
							setCameraType(newType)
						})
					}}
				/>
			</Camera>
		</View>
	)
}

