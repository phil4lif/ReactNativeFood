import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const ResultsDetail = ({ result }) => {
    return (
        <View>
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
        borderRadius: 5
    },
    name: {
        fontWeight: 'bold',
        fontSize: 14
    }
});

export default ResultsDetail;