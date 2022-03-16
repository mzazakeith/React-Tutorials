import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Alert,
    Image,
    TouchableOpacity,
    TouchableHighlight,
    TouchableWithoutFeedback, Button,
    Platform,
    Dimensions,
    StatusBar
} from 'react-native';

import {useDimensions, useDeviceOrientation} from "@react-native-community/hooks";
import axios from "axios";
import {useState} from "react";


export default function App() {
    // console.log(Dimensions.get('screen'))
    // console.log(useDeviceOrientation());
    // const {landscape} = useDeviceOrientation();
    const callApi = () =>{
        axios.get(`https://jsonplaceholder.typicode.com/users`, )
            .then(res => {
                console.log(res.data);
            })
    }
    return (
        //safe are view is ios only

        // <SafeAreaView style={styles.container}>
        //     <Text>First App</Text>
        //     {/*<Image source={require('./assets/favicon.png')}/>*/}
        //     {/*<TouchableWithoutFeedback onPress={()=>{console.log("lol")}}>*/}
        //     {/*  <Image source={*/}
        //     {/*    {*/}
        //     {/*      width:200,*/}
        //     {/*      height:300,*/}
        //     {/*      uri:"https://picsum.photos/200/300"*/}
        //     {/*    }*/}
        //     {/*  } />*/}
        //     {/*</TouchableWithoutFeedback>*/}
        //     {/*<TouchableOpacity onPress={()=>{console.log("lol")}}>*/}
        //     {/*  <Image source={*/}
        //     {/*    {*/}
        //     {/*      width:200,*/}
        //     {/*      height:300,*/}
        //     {/*      uri:"https://picsum.photos/200/300"*/}
        //     {/*    }*/}
        //     {/*  } />*/}
        //     {/*</TouchableOpacity>*/}
        //     <TouchableHighlight onPress={()=>{console.log("lol")}}>
        //       <Image source={
        //         {
        //           width:200,
        //           height:300,
        //           uri:"https://picsum.photos/200/300"
        //         }
        //       } />
        //     </TouchableHighlight>
        //     {/*<Button title="Click me"*/}
        //     {/*        onPress={() => Alert.alert("Title", "Message to be displayed",*/}
        //     {/*            [*/}
        //     {/*                {text: "Yes", onPress:()=>console.log("Yes")},*/}
        //     {/*                {text: "No", onPress:()=>console.log("No")}*/}
        //     {/*            ])}/>*/}
        //
        //     <Button title="Click me"
        //             onPress={() => Alert.prompt("My title", "My message",text => console.log(text) )}/>
        // </SafeAreaView>
        // <SafeAreaView style={styles.container}>
        //     <View style={{
        //         backgroundColor: "dodgerblue",
        //         width:'100%',
        //         height:landscape ? '100%' : '30%'
        //     }}>
        //
        //     </View>
        // </SafeAreaView>
        // <SafeAreaView style={styles.container}>
        //     <View style={{
        //         backgroundColor: "dodgerblue",
        //         width:'100%',
        //         height:'30%'
        //     }}>
        //
        //     </View>
        // </SafeAreaView>

        // // flex example
        // <View style={{
        //     backgroundColor: '#fff',
        //     flex: 1
        // }}>
        //     <View style={{
        //         backgroundColor: 'dodgerblue',
        //         flex:2
        //     }}>
        //
        //     </View>
        //     <View style={{
        //         backgroundColor: 'tomato',
        //         flex:1
        //     }}>
        //
        //     </View>
        //     <View style={{
        //         backgroundColor: 'gold',
        //         flex:1
        //     }}>
        //
        //     </View>
        // </View>
        <SafeAreaView style={{
            backgroundColor: '#fff',
            flex: 1,
            flexDirection: 'row', // flex direction
            justifyContent:'center'
        }}>
            <View style={{
                backgroundColor: 'dodgerblue',
                width: 100,
                height: 100,
            }}>

            </View>
            <View style={{
                backgroundColor: 'tomato',
                width: 100,
                height: 100
            }}>

            </View>
            <View style={{
                backgroundColor: 'gold',
                width: 100,
                height: 100
            }}>
         <Button title="Click me"
              onPress={callApi}/>

            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        // justifyContent: "center",
        // alignItems: "center"
    },
});
