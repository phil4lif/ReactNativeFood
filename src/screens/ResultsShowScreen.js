import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
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
    return (
        <>
            <Text>results show screen</Text>
        </>
    )
};

const styles = StyleSheet.create({

});

export default ResultsShowScreen;