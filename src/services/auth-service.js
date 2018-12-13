import http from './http-service'

class AuthService {

    login(email,password){
        return http.post('/auth/login',{
            email,
            password
            //ovo je body,kao objekat prosledjujem
        });
    }
}

const authService = new AuthService();
export default authService;