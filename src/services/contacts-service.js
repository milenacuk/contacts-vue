import http from './http-service'

class ContactsService {
    
    getContacts(page = 1){
        return axios.get('/contacts',{ params: { page }})
            .then(({data}) => data)
            //umesto response => response.data
    }

}
const contactsService = new ContactsService();
export default contactsService;