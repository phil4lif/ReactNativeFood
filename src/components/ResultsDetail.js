import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const ResultsDetail = ({ result }) => {
    return (
        <View style={styles.containerStyle}>
            <Image source={{ uri: result.image_url }}
            style={styles.imageStyle} />
            <Text style={styles.name}>{result.name}</Text>
            <Text>{result.rating} Stars, {result.review_count} Reviews</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    imageStyle: {
        width: 250,
        height: 120,
        borderRadius: 5,
        marginBottom: 5
    },
    name: {
        fontWeight: 'bold',
        fontSize: 14
    },
    containerStyle: {
        marginLeft: 15,

    }
});

export default ResultsDetail;