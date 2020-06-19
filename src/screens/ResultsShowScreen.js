import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, FlatList, ScrollView } from 'react-native';
import yelp from '../api/yelp'
const ResultsShowScreen = ({ navigation }) => {
    const [result, setResult] = useState(null);
    const id = navigation.getParam('id')
    console.log(result);
    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        response.data;
        setResult(response.data);
    };
    useEffect(() => {
        getResult(id);
    }, []);
    if (!result) {
        return null;
    }
    return (
        <View style={styles.containerStyle}>
            <Text style={styles.textStyle}>{result.name}</Text>
            <FlatList 
            data={result.photos}
            keyExtractor={(photo) => photo}
            renderItem={({ item }) => {
                return <Image style={styles.imageStyle} source={{ uri: item }} />
            }}/>
        </View>
    )
};

const styles = StyleSheet.create({
    containerStyle: {
        alignItems: 'center'
    },
    imageStyle: {
        height: 200,
        width: 300,
        marginLeft: 15,
        marginBottom: 5,
        borderRadius: 5
    },
    textStyle : {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 10
    }
});

export default ResultsShowScreen;