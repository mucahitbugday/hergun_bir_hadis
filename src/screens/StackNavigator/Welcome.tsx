import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useEffect } from 'react'
import { useDeviceContext } from '../../context/DeviceContext';
import { getLocales } from "react-native-localize";







const Welcome = ({ navigation }: any) => {

    const { setDevice, device } = useDeviceContext();

    useEffect(() => {
        setDevice({ Language: getLocales()[0].languageCode });
    }, []);



    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome</Text>
            <Text style={styles.title}>{device?.Language}</Text>

            <Button title='Go' onPress={() => navigation.navigate('Home')}></Button>
        </View>
    )
}

export default Welcome

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        color: 'black',
        fontSize: 50
    }
})