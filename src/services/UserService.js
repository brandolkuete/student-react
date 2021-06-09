import axios from 'axios'

const USER_API_URL= "http://localhost:8080/scolairerest/users";

class UserService {
    signin(user){
        return axios.post(USER_API_URL+'/signin', user)
    }
    signup(user){
        return axios.post(USER_API_URL+'/signup', user)
    }
    logOut(){
        return localStorage.removeItem("tokens")
    }
}
export default new UserService()