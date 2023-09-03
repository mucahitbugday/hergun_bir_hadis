import { ScrollView, StyleSheet, View, Text, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getApiData } from '../../api/api'


const HomeScreen = ({ navigation }: any) => {

    const [data, setData] = useState([])

    useEffect(() => {
        const getData = async () => {
            const response = await getApiData('categories/roots/?language=tr')
            console.log("response", response)
            setData(response)
        }
        getData()
    }, [])



    return (
        <View style={styles.container}>
            <View style={{ alignItems: 'center', padding: 20 }}>
                <Text style={{ color: 'black', fontSize: 30 }}>Ana Kategoriler</Text>
            </View>
            <ScrollView>
                {data.map((item: any, index: any) => (

                    <ScrollView key={index} >
                        <View style={styles.box}>
                            <Text style={styles.title}>{item.title} ({item.hadeeths_count})</Text>
                            <Button title='Detay' onPress={() => navigation.navigate('CategoryDetail', { id: item.id })}></Button>
                        </View>
                    </ScrollView>

                ))}
            </ScrollView >
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    box: {
        width: 'auto',
        height: 100,
        backgroundColor: 'white',
        margin: 10,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black'
    },

})