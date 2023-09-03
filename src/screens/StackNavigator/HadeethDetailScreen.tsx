import { StyleSheet, Text, View, ScrollView, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getApiData } from '../../api/api'

const DetailScreen = (route: any) => {

    const [data, setData] = useState({ id: '', title: '', attribution: '', categories: [], explanation: '', grade: '', hadeeth: '', hints: '' })

    useEffect(() => {
        const getData = async () => {
            const res: any = await getApiData(`hadeeths/one/?language=tr&id=${route.route.params.id}`)
            setData(res)
        }
        getData()
    }, [])


    return (
        <View style={styles.container}>
             <ScrollView>

                <View style={styles.box}>
                    <Text style={{ fontSize: 16, color: 'black', fontWeight: 'bold' }}>{data.title} - {data.grade} - {data.attribution}</Text>
                </View>
                <View style={styles.box}>
                    <Text style={styles.title}>{data.hadeeth}</Text>
                </View>
                <View style={styles.box}>
                    <Text style={styles.title}>{data.explanation}</Text>
                </View>

                {/* <Text style={styles.title}>{data.id}</Text> 
                <Text style={styles.title}>{data.attribution}</Text>
                <Text style={styles.title}>{data.categories}</Text>
                <Text style={styles.title}></Text>
                <Text style={styles.title}>{data.hints}</Text> */}

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
        backgroundColor: 'white',
        margin: 10,
        padding: 20
    },
    title: {
        fontSize: 16, color: 'black'
    },
    card: {


    }

})