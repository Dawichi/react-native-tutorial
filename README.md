<h1 align='center'>react-native-tutorial</h>


## 1. Basic structure

On the top of the component, we define the dimensions and the styles of our app.

```jsx
// imports...

const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
    input: {
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        width: width,
    },
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
})

export default function App() {
    // code here
    return(
    	// code here
    )
}
```



The styles will be used by our component later.

```jsx
return(
	<View style={styles.container}>
		<Text>hello world</Text>
		<TextInput
			style={styles.input}
			placeholder='Type Here'
		/>
	</View>
)
```





## 2. Buttons

There are 4 buttons available, with these main properties:

1. **Button**/
   1. onPress={}
   2. title=""
2. **TouchableHighlight**
   1. onPress={}
   2. underlayColor={}
   3. activeOpacity={}
3. **TouchableNativeFeedback**  (NOTE: Only android!)
   1. onPress={}
   2. background
4. **TouchableOpacity**
   1. onPress={}
   2. style={}





**1. Button**: A basic android/iOS button

````jsx
const [submit, setSubmit] = useState('')

return(
	<View style={styles.container}>
		<Button
			onPress={() => {
				setSubmit('handlesubmit here')
				alert('Submitted successfully')
			}}
            title='Confirm'
		/>
	</View>
)
````



**2. TouchableHighlight**: Another button, who changes the style on press

````jsx
const [submit, setSubmit] = useState('')

return(
	<View style={styles.container}>
		<TouchableHighlight
			onPress={() => {
                underlayColor={'#ccc'}
                activeOpacity={0.2}
				setSubmit('handlesubmit here')
				alert('Submitted successfully')
			}}
		>
        	<Text>Confirm</Text>
        </TouchableHighlight>
	</View>
)
````



**3. TouchableNativeFeedback **: Another button, with an animation on press

````jsx
const [submit, setSubmit] = useState('')

return(
	<View style={styles.container}>
		<TouchableNativeFeedback
			onPress={() => {
				background={TouchableNativeFeedback.Ripple('#00f', true)}
				setSubmit('handlesubmit here')
				alert('Submitted successfully')
			}}
        >
            <View style={styles.view}>
                <Text>Confirm</Text>
            </View>
        </TouchableNativeFeedback>
	</View>
)
````



4. **TouchableOpacity**: Another button, with style prop. Low opacity on press.

````jsx
const [submit, setSubmit] = useState('')

return(
	<View style={styles.container}>
		<TouchableNativeFeedback
			onPress={() => {
				style={styles.TouchableOpacityBtn}
				setSubmit('handlesubmit here')
				alert('Submitted successfully')
			}}
        >
            <View style={styles.view}>
                <Text>Confirm</Text>
            </View>
        </TouchableNativeFeedback>
	</View>
)
````



5. **TouchableWithoutFeedback**: Same code as *TouchableOpacity* button without any animation or style, ready to customize it.



> **NOTE:** If we are not planing to customize our buttons, its better to use the basic **Button**.





## 3. ScrollView

View does not support scrolling overflow content. For that we need to use the component **ScrollView**.

````jsx
return(
	<View style={styles.container}>
		<ScrollView style={styles.scrollView}>
			// Code here
		<ScrollView>
	</View>
)
````



## 4. FlatList

ScrollView has a problem when managing big data (1000, 2000 items...). To fix that performance problem in that specific situation we have **FlatList**.

````jsx
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
````



## 5. SectionList

On our contacts on the mobile for example, the data is not usually displayed as a unordered list. Usually it's separated in sections like 'contacts with A', 'contacts with B', etc...

````jsx
import React from 'react'
import { StyleSheet, Text, View, Dimensions, SectionList } from 'react-native'

const data = [
	{ key: '6', name: 'Nico' },
	{ key: '7', name: 'Jhon' },
	{ key: '8', name: 'David' },
	{ key: '9', name: 'Cait' },
	{ key: '10', name: 'Joanne' },
	{ key: '11', name: 'Nico' },
	{ key: '12', name: 'Jhon' },
	{ key: '13', name: 'David' },
	{ key: '14', name: 'Cait' },
	{ key: '15', name: 'Joanne' },
	{ key: '16', name: 'Nico' },
	{ key: '17', name: 'Jhon' },
]

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#eee',
		alignItems: 'stretch',
		justifyContent: 'center',
		padding: 50,
	},
	item: {
		padding: 10,
		fontSize: 22,
		height: 50,
		borderBottomColor: '#323232',
		borderBottomWidth: 1,	
	},
	section: {
		fontSize: 16,
		fontWeight: 'bold',
		backgroundColor: '#ccc',
		padding: 10,
		marginTop: 30,
	}
})

export default function App() {
	return (
		<View style={styles.container}>
			<SectionList
				sections={[
					{
						title: 'Group 1',
						data: [
							{ key: '1', name: 'Nico' },
							{ key: '2', name: 'Jhon' },
							{ key: '3', name: 'David' },
							{ key: '4', name: 'Cait' },
							{ key: '5', name: 'Joanne' },
						]
					},
					{
						title: 'Group 2',
						data: [
							{ key: '6', name: 'Nico' },
							{ key: '7', name: 'Jhon' },
							{ key: '8', name: 'David' },
							{ key: '9', name: 'Cait' },
							{ key: '10', name: 'Joanne' },
						]
					},
					{
						title: 'Group 3',
						data: [
							{ key: '11', name: 'Nico' },
							{ key: '12', name: 'Jhon' },
							{ key: '13', name: 'David' },
							{ key: '14', name: 'Cait' },
							{ key: '15', name: 'Joanne' },
						]
					},
					{
						title: 'Group 4',
						data: [
							{ key: '16', name: 'Nico' },
							{ key: '17', name: 'Jhon' },
							{ key: '18', name: 'David' },
							{ key: '19', name: 'Cait' },
							{ key: '20', name: 'Joanne' },
						]
					}
				]}
				renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
				renderSectionHeader={({ section }) => <Text style={styles.section}>{section.title}</Text>}
			/>
		</View>
	)
}
````




## 6. Load content from an API and display it in a FlatList

A little component to fetch data from a API and process it into our app

````jsx
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions, FlatList } from 'react-native';

const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#eee',
		alignItems: 'stretch',
		justifyContent: 'center',
		padding: 50,
	},
	item: {
		padding: 10,
		fontSize: 22,
		height: 50,
		borderBottomColor: '#323232',
		borderBottomWidth: 1,	
	},
	center: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
})

export default function App() {

	const [users, setUsers] = useState([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(data => {
				setUsers(data)
				setLoading(false)
			})
	}, [])

	if (loading) {
		return <View style={styles.center}><Text>Cargando...</Text></View>
	}

	return (
		<View style={styles.container}>
			<FlatList
				data={users}
				renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
				keyExtractor={item => String(item.id)}
			/>
		</View>
	)
}
````




## 7. ActivityIndicator

A spinner to show the user that the app is loading. Recives 2 props: `size` (small or large) and `color`.

The large is used usually to show a load of the whole screen, while the small is used for small parts.

````jsx
return (
	<View style={styles.container}>
		<ActivityIndicator size='large' color='#ccc' />
	</View>
)
````




## 8. Image

To insert images on the app, you can do it from a relative route with `require()` or from Internet with an object `{uri: ''}`

````jsx
return (
	<View style={styles.container}>
		<Image
			style={styles.photo1}
			source={require('./assets/favicon.png')}
		/>
		<Image
			style={styles.photo2}
			source={{uri: 'https://placekitten.com/200/200'}}
		/>
	</View>
)
````



## 9. ImageBackground

To set a background image, passing the content over it as children

````jsx
return (
	<View style={styles.container}>
		<ImageBackground
			style={styles.photo}
			source={{uri: 'https://placekitten.com/200/200'}}
		>
			<Text>Text inside an image</Text>
		</ImageBackground>
	</View>
)
````




## 10. Modal

To display info or options in front of the user without lose the context of the app


````jsx
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#eee',
		alignItems: 'center',
		justifyContent: 'center',
		padding: 50,
	},
	content: {
		flex: 1,
		alignItems: 'stretch',
		justifyContent: 'center',
		backgroundColor: 'rgba(0,0,0,0.5)',
	},
	center: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#edffa9',
		margin: 50,
		borderRadius: 10,
	},
})

export default function App() {

	const [modal, setModal] = useState(false)

	return (
		<View style={styles.container}>
			<Modal
				animationType='slide'
				transparent={true}
				visible={modal}
				onRequestClose={() => {/* this code is executed on close */}}
			>
				<View style={styles.content}>
					<View style={styles.center}>
						<Text>Content of the modal</Text>
						<Button title='Close modal' onPress={() => setModal(!modal)} />
					</View>
				</View>
			</Modal>
			<Button title='Open modal' onPress={() => setModal(!modal)} />
		</View>
	)
}
````




## 11. Alert

Blocks all the interactions, forcing the user to pay attention to the alert

Recieves 4 parameters:

* Title
* Body
* Options (footer buttons)
* Is cancelable?


````jsx
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
````



## 12. Location

Is an Expo package to read geolocation from the device

```bash
$ expo install expo-location
```