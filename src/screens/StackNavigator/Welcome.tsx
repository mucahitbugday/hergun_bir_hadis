import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const Welcome = ({ navigation }: any) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome</Text>
            <Button title='Go' onPress={() => navigation.navigate('MainApp')}></Button>
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