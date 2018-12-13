import axios from 'axios'


        axios.defaults.baseURL = 'http://127.0.0.1:8000/api';
        axios.defaults.headers.common['Accept'] = 'application/json';
        //ocekujem da mi vrati json
 

export default new axios;