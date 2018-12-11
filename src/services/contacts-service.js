import axios from 'axios'

class ContactsService {
    constructor(){
        axios.defaults.baseURL = 'http://127.0.0.1:8000/api';
        axios.defaults.headers.common['Accept'] = 'application/json';
        //ocekujem da mi vrati json
    }
    //stavimo da nam,ako ne navedemo koliko stranica da nam dovuce sa backenda,da po defaultu bude 1
    getContacts(page = 1){
        return axios.get('/contacts',{ params: { page }})
            .then(({data}) => data)
            //umesto response => response.data
    }

}
const contactsService = new ContactsService();
export default contactsService;