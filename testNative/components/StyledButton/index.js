import React from "react";
import {View, Text, Pressable} from "react-native";
import styles from "./styles";


const styledButton = (props) => {
    const {type, title, onPress} = props;
    const backgroundColor = type === "primary" ? '#171A20CC' : '#FFFFFFA6';
    const textColor = type === "primary" ? '#FFFFFF' : '#171A20';
    return(
        <View style={styles.container}>
            <Pressable
                style={[styles.button, {backgroundColor:backgroundColor}]}
                onPress={onPress}>
                <Text style={[styles.text, {color:textColor}]}>{title}</Text>
            </Pressable>
        </View>
    )
}

export default styledButton;
