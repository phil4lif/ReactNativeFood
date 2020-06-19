import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp'
import useResults from '../hooks/useResults'
import ResultsList from '../components/ResultsList';


const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    const filterResultsByPrice = (price) => {
        //price === $ || $$ || $$$
        return results.filter(result => {
            return result.price === price
        });
    };

    return (
        <View>
            <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)} />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <Text>We have found {results.length} results</Text>
            <ScrollView>
            <ResultsList results={filterResultsByPrice('$')} title="$"/>
            <ResultsList results={filterResultsByPrice('$$')} title="$$"/>
            <ResultsList results={filterResultsByPrice('$$$')} title="$$$"/>
            </ScrollView>
        </View>
    )
};

const styles = StyleSheet.create({

});

export default SearchScreen;