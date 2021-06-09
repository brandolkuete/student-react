import axios from 'axios'

const SCOLAR_API_URL= "http://localhost:8080/scolairerest/api";

const headers = { headers : { 'Authorization':'Bearer ' + localStorage.getItem('tokens')} };

class ScolaireService {

        getStudents(){
            return axios.get(SCOLAR_API_URL+ '/listeEleve');
        }
    
       createStudent(student){
           console.log(student);
            return axios.post(SCOLAR_API_URL+ '/enregistrerEleve',student, headers)
        }
    
        getStudent(id) {
            return axios.get(SCOLAR_API_URL+ '/findEleve/' + id, headers)
        }
    
        updateStudent (student, studentId) {
            return axios.put(SCOLAR_API_URL+'/modifierEleve/'+ studentId, student, headers)
        }
    
       deleteStudent(id) {
            return axios.delete(SCOLAR_API_URL+ '/supprimerEleve/' +id, headers)
        }
}

export default new ScolaireService()
