import axios from 'axios'

const SCOLAR_API_URL= "http://localhost:8080/scolairerest/api";

class ScolaireService {

    getStudents() {
        return axios.get(SCOLAR_API_URL+ '/listeEleve');
    }

    createStudent(student){
        return axios.post(SCOLAR_API_URL+ '/enregistrerEleve',student)
    }

    getStudent(id){
        return axios.get(SCOLAR_API_URL+ '/findEleve/' + id)
    }

    updateStudent(student, studentId){
        return axios.put(SCOLAR_API_URL+'/modifierEleve/'+ studentId, student)
    }

    deleteStudent(id){
        return axios.delete(SCOLAR_API_URL+ '/supprimerEleve/' +id)
    }
    
}

export default new ScolaireService()
