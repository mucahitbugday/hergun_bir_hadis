import { StyleSheet, Text, View, ScrollView, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getApiData } from '../../api/api'

const DetailScreen = (route: any) => {
    const [data, setData] = useState([])
    const [page, setPage] = useState(1)
    const perPage = 20

    useEffect(() => {
        const getData = async () => {
            const res = await getApiData(`hadeeths/list/?language=tr&category_id=${route.route.params.id}&page=${page}&per_page=${perPage}`)
            setData((prevData) => (prevData ? [...prevData, ...res.data] : res.data)); // Null kontrolü ekliyoruz
        }
        getData()
    }, [page]) // Sayfa değişiklikleri için useEffect'i izliyoruz

    // ScrollView'deki kaydırma olaylarını dinleyen bir fonksiyon ekleyin
    const handleScroll = (event: any) => {
        const { layoutMeasurement, contentOffset, contentSize } = event.nativeEvent
        const isCloseToBottom = layoutMeasurement.height + contentOffset.y >= contentSize.height - 50
        if (isCloseToBottom) {
            // Eğer sayfa en altındaysa, bir sonraki sayfayı almak için setPage'i güncelle
            setPage((prevPage) => prevPage + 1)
        }
    }

    return (

        <View style={styles.container}>
            <View style={{ alignItems: 'center', padding: 20 }}>
                <Text style={{ color: 'black', fontSize: 30 }}>Hadis Listesi</Text>
            </View>
            <ScrollView onScroll={handleScroll} scrollEventThrottle={16}>
                {data.map((item: any, index: any) => (
                    <ScrollView key={index} >
                        <View style={styles.box}>
                            <Text style={styles.title}>{item.title}</Text>
                            <Button title='Detay' onPress={() => route.navigation.navigate('HadeethDetail', { id: item.id })}></Button>
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
        backgroundColor: 'white',
        margin: 10,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black'
    },
})
