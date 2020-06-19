import axios from 'axios';
// import { API_KEY } from 'react-native-dotenv';
import API_KEY from '../../key'
export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer ' + API_KEY
    }
});

