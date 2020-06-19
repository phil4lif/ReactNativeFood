import { useEffect, useState} from 'react';
import yelp from '../api/yelp';

export default () => {
const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async (searchTerm) => {
        console.log('hi there');
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'phoenix'
                }   
            });
            setResults(response.data.businesses);
        } catch (err) {
            setErrorMessage('soething went wrong')
        }
    };
    //call search api when component is first rendered
    useEffect(() => {
        searchApi('pasta');
    }, []);

    return [searchApi, results, errorMessage]
};