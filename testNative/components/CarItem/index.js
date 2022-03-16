import React from "react";
import {View, Text, ImageBackground} from "react-native";
import styles from "./styles";
import StyledButton from "../StyledButton";

const carItem = (props) =>{
    const {type,tagline, image} = props.car;
    return(
        <View style={styles.carContainer}>
            <ImageBackground
                source={image}
                style={styles.image}/>
            <View style={styles.titles}>
                <Text style={styles.title}>{type}</Text>
                <Text style={styles.subtitle}>{tagline}</Text>
            </View>

            <View style={styles.buttonsContainer}>
                <StyledButton type="primary" title="Custom Order" onPress={()=>console.log("Custom Order")}/>
                <StyledButton type="secondary" title="Exiting Inventory" onPress={()=>console.log("Current Inventory")}/>
            </View>

        </View>
    )
}

export default carItem;
