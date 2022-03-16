import {StyleSheet, View,Platform, StatusBar} from 'react-native';
import CarsList from "./components/CarsList";

export default function App() {
    return (
        <View style={styles.container}>
           <CarsList/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
});
