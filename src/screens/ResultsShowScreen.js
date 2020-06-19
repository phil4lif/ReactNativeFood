import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const ResultsShowScreen = ({ navigation }) => {
    const id = navigation.getParam('id')
    console.log(id)
    return (
        <>
            <Text>results show screen</Text>
        </>
    )
};

const styles = StyleSheet.create({

});

export default ResultsShowScreen;