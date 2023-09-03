import { StyleSheet, Text, View, ScrollView, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getApiData } from '../../api/api'

const DetailScreen = (route: any) => {

    const [data, setData] = useState([])

    useEffect(() => {
        const getData = async () => {
            const res = await getApiData(`hadeeths/list/?language=tr&category_id=${route.route.params.id}&page=1&per_page=10`)
            setData(res.data)
        }
        getData()
    }, [])

    return (
        <View style={styles.container}>
            <Text style={{ color: 'black' }}>Ana Sayfa (Ana Kategoriler)  / Hadislerin Listesi </Text>
            <ScrollView>
                {data.map((item: any, index: any) => (
                    <ScrollView key={index} >
                        <View style={styles.box}>
                            <Text style={styles.title}>{item.title}</Text>
                            <Button title='Detay' onPress={() => route.navigation.navigate('Detail', { id: item.id })}></Button>
                        </View>
                    </ScrollView>
                ))}
            </ScrollView >
        </View>
    )
}

export default DetailScreen

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