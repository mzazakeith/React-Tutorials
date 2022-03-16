import {Pressable, StyleSheet, Text, View} from 'react-native';

const Profile = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>Profile</Text>
            <Pressable><Text onPress={() => navigation.navigate('Home')}>Go Home</Text></Pressable>
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

export default Profile;
