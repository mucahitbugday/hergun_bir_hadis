import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getApiData } from '../../api/api'

const HomeScreen = () => {

    const [data, setData] = useState()

    useEffect(() => {

        const getData = async () => {

            const response = await getApiData('categories/list/?language=tr')
            console.log("response", response[0])
            setData(response)
        }



        getData()
    }, [])



    return (
        <View style={styles.container}>

            <View style={styles.card_container}>

                <Text style={styles.card_title}>Şu Kur’an’ı hâfızanızda korumaya özen gösteriniz. Muhammed’in canını elinde tutan Allah’a yemin ederim ki, Kur’an’ın hâfızadan çıkıp kaçması daha hızlıdır.</Text>

                <TouchableOpacity style={styles.card_button}>
                    <Text style={styles.card_button_Text}>Detay</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,

    }
    ,
    card_container: {
        backgroundColor: 'white',
        height: 200,
        margin: 20,
        borderRadius: 5,

    },
    card_title: {
        textAlign: 'center',
        fontSize: 30,
        color: 'black'
    },
    card_button: {

        backgroundColor: 'blue',
        marginRight: 40,
        marginLeft: 40,

    },
    card_button_Text: {
        fontSize: 30,
        textAlign: 'center',
        color: 'white'
    }
})