import {StyleSheet, Text, View,Platform, StatusBar} from 'react-native';
import CarItem from "./components/CarItem/";

export default function App() {
    return (
        <View style={styles.container}>
            <CarItem type="Model S" tagline='Order now for Touchless Delivery' image={require('./assets/images/ModelS.jpeg')}/>
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
