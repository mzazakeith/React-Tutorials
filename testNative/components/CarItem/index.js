import React from "react";
import {View, Text, ImageBackground} from "react-native";
import styles from "./styles";
import StyledButton from "../StyledButton";

const carItem = () =>{
    return(
        <View style={styles.carContainer}>
            <ImageBackground
                source={require('../../assets/images/ModelS.jpeg')}
                style={styles.image}/>
            <View style={styles.titles}>
                <Text style={styles.title}>Model S</Text>
                <Text style={styles.subtitle}>Starting at $ 69,420</Text>
            </View>

            <StyledButton type="primary" title="Custom Order" onPress={()=>console.log("Custom Order")}/>
            <StyledButton type="secondary" title="Exiting Inventory" onPress={()=>console.log("Current Inventory")}/>
        </View>
    )
}

export default carItem;
