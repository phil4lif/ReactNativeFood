import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp'
import useResults from '../hooks/useResults'
import ResultsList from '../components/ResultsList';


const SearchScreen = ({ navigation }) => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    const filterResultsByPrice = (price) => {
        //price === $ || $$ || $$$
        return results.filter(result => {
            return result.price === price
        });
    };

    return (
        <>
            <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)} />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <ScrollView>
            <ResultsList navigation={navigation} results={filterResultsByPrice('$')} title="$"/>
            <ResultsList navigation={navigation} results={filterResultsByPrice('$$')} title="$$"/>
            <ResultsList navigation={navigation} results={filterResultsByPrice('$$$')} title="$$$"/>
            </ScrollView>
        </>
    )
};

const styles = StyleSheet.create({

});

export default SearchScreen;