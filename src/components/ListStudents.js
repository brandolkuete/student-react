import React, { Component } from 'react'
import ScolaireService from '../services/ScolaireService'

export default class ListStudents extends Component {

    constructor(props) {
        super(props)

        this.state = {
                students: []
        }
        this.addStudent = this.addStudent.bind(this);
        this.editStudent = this.editStudent.bind(this);
        this.deleteStudent = this.deleteStudent.bind(this);
        this.viewStudent = this.viewStudent.bind(this);
    }

    componentDidMount(){
        ScolaireService.getStudents().then((res)=>{
            this.setState({students: res.data})
        })
    }

    addStudent(){
        this.props.history.push('/add-student');
    }

    editStudent(id){
        this.props.history.push(`/update-student/${id}`);
    }

    deleteStudent(id){
        ScolaireService.deleteStudent(id).then(res =>{
            this.setState({students: this.state.students.filter(student => student.id !== id)});
        });
    }

    viewStudent(id){
        this.props.history.push(`/view-student/${id}`);
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Liste des élèves</h2>
                <div className = "row ml-3">
                    <button className="btn btn-primary" onClick={this.addStudent}> Ajouter un élève</button>
                 </div>
                <br></br>
                 <div className = "row m-3">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Matricule</th>
                                    <th> Nom</th>
                                    <th> Prénom</th>
                                    <th> Filière</th>
                                    <th> Niveau</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.students.map(
                                        student => 
                                        <tr key = {student.id}> 
                                             <td> {student.matricule} </td>   
                                             <td> {student.nom} </td>   
                                             <td> {student.prenom}</td>
                                             <td> {student.filiere}</td>
                                             <td>{student.niveau}</td>
                                             <td>
                                                <button onClick={ () => this.editStudent(student.id)} className="btn btn-info">Modifier </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteStudent(student.id)} className="btn btn-danger">Supprimer </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewStudent(student.id)} className="btn btn-info">Détails </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>
            </div>
        )
    }
}
