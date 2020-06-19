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
        <>
            <Text>{result.name}</Text>
            <FlatList 
            data={result.photos}
            keyExtractor={(photo) => photo}
            renderItem={({ item }) => {
                return <Image style={styles.imageStyle} source={{ uri: item }} />
            }}/>
        </>
    )
};

const styles = StyleSheet.create({
    imageStyle: {
        height: 200,
        width: 300
    }
});

export default ResultsShowScreen;