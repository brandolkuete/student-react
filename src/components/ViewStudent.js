import React, { Component } from 'react'
import ScolaireService from '../services/ScolaireService'

export default class ViewStudent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            student: {}
        }
        this.showList= this.showList.bind(this);
    }

    componentDidMount(){
        ScolaireService.getStudent(this.state.id).then( res => {
            this.setState({student: res.data});
        })
    }

    showList(){
        this.props.history.push('/all-student');
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-12 m-3 mx-auto">
                    <h3 className = "text-center"> Détails sur l'élève</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Matricule: </label>
                            <div className="ml-2 text-secondary"> { this.state.student.matricule }</div>
                        </div>
                        <div className = "row">
                            <label> Nom: </label>
                            <div className="ml-2 text-secondary"> { this.state.student.nom }</div>
                        </div>
                        <div className = "row">
                            <label> Prénom: </label>
                            <div className="ml-2 text-secondary"> { this.state.student.prenom }</div>
                        </div>
                        <div className = "row">
                            <label> Date de naissance: </label>
                            <div className="ml-2 text-secondary"> { this.state.student.date_nais }</div>
                        </div>
                        <div className = "row">
                            <label> Adresse: </label>
                            <div className="ml-2 text-secondary"> { this.state.student.addresse}</div>
                        </div>
                        <div className = "row">
                            <label> Niveau: </label>
                            <div className="ml-2 text-secondary"> { this.state.student.niveau }</div>
                        </div>
                        <div className = "row">
                            <label> Filière: </label>
                            <div className="ml-2 text-secondary"> { this.state.student.filiere }</div>
                        </div>
                    </div>
                </div>
                <div className = "row ml-3">
                    <button className="btn btn-primary" onClick={this.showList}> Retour à la liste</button>
                </div>
            </div>
        )
    }
}
