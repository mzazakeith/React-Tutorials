import {Pressable, StyleSheet, Text, View} from 'react-native';

const Home = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>Home</Text>
            <Pressable><Text onPress={() => navigation.navigate('Profile')}>Go Profile</Text></Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Home;
