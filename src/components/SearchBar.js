import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
const SearchBar = () => {
    return (
        <View style={styles.backgroundStyle}>
            <Feather name="search" style={styles.iconStyle} />
            <TextInput
            style={styles.inputStyle}
            placeholder="Search" />
        </View>
    )
};

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: '#F0EEEE',
        height: 50,
        marginTop: 10,
        borderRadius: 5,
        marginHorizontal:15,
        flexDirection: 'row',
    },
    inputStyle: {
        flex: 1,
        fontSize: 18,
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 10
    }
});

export default SearchBar;