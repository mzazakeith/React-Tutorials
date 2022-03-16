import React from "react";
import {View, FlatList, Dimensions} from "react-native";
import styles from "./styles";
import cars from "./cars";
import CarItem from "../CarItem";

const carList = (props) =>{
    let x = 0;
    return(
        <View style={styles.carContainer}>
            <FlatList
                data={cars}
                renderItem={({item}) => {
                    x ++;
                    return(
                        <CarItem car={item} key={x}/>
                    )
                }}
                showsVerticalScrollIndicator={false}
                snapToAlignment={'start'}
                decelerationRate={'fast'}
                snapToInterval={Dimensions.get('window').height}
            />
        </View>
    )
}

export default carList;
