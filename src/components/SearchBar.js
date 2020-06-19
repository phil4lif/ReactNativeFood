import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
const SearchBar = () => {
    return (
        <View style={styles.background}>
            <Feather name="search" size={30}/>
            <TextInput
            placeholder="searchbar" />
        </View>
    )
};

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal:25
    }
});

export default SearchBar;