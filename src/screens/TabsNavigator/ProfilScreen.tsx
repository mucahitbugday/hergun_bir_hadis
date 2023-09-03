import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const App = () => {


    return (
        <ScrollView contentContainerStyle={styles.container}>
            <TouchableOpacity>
                <View style={styles.box}>
                    <Text style={styles.title}>Kur'an-ı Kerim ve Kur'an İlimleri (42)</Text>
                    <TouchableOpacity>
                        <Text style={styles.button}>Detay</Text>
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>

        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        // backgroundColor: 'red',
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
    button: {
        fontSize: 15,
        color: 'black'
    }
});

export default App;
