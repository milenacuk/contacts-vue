import contactsService from './../services/contacts-service';
export default {
    state: {
        data: [],
        //ovo je contacts-data
        errors: null,
        total: 0,
        per_page: 10,
        current_page: 1
    },
    mutations: {
        SET_ERRORS(state,payload){
            state.errors = payload;
        },
        SET_CONTACTS(state,{data,totoal,per_page,current_page}){
            state = {
                ...state,
                //sa ovim gazimo sve sto je bilo pre u state, sa ...state ga raspakujemo i gazimo
                data,
                total,
                per_page,
                current_page
            }
        }
        //ovo je drugi nAcin
        // SET_CONTACTS(state, payload) {
        //     state.data = payload.data;
        //     state.total = payload.total;
        //     state.per_page = payload.per_page;
        //     state.current_page = payload.current_page;
        //     }
    },
    actions: {
        async getContacts(context, payload){
            try{         
                const contactsData = await contactsService.getContacts(payload);
                context.commit('SET_CONTACTS', contactsData)
        }catch(errors){
            context.commit('SET_ERRORS', errors)
        }
        
        }
    },
    getters: {
        getContactsData(state){
            return state.data;
        },
        getCurrentPage(state){
            return state.current_page;
        },
        getTotalNumberOfContacts(state){
            return state.total;
        },
        getNumerOfContactsPerPage(state){
            return state.per_page;
        }
    }
}