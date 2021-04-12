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