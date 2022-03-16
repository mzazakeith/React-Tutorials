import React from "react";
import {View, FlatList, Dimensions} from "react-native";
import styles from "./styles";
import cars from "./cars";
import CarItem from "../CarItem";

const carList = () =>{
    return(
        <View style={styles.carContainer}>
            <FlatList
                data={cars}
                renderItem={({item}) => {
                    return(
                        <CarItem car={item}/>
                    )
                }}
                keyExtractor={(item, index) => index.toString()}
                showsVerticalScrollIndicator={false}
                snapToAlignment={'start'}
                decelerationRate={'fast'}
                snapToInterval={Dimensions.get('window').height}
            />
        </View>
    )
}

export default carList;
