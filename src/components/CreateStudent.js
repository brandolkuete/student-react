import React, { Component } from 'react'
import StudentService from '../services/ScolaireService'

export default class CreateStudent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            matricule: '',
            nom: '',
            prenom: '',
            date_nais: '',
            addresse: '',
            niveau: '',
            filiere: ''
        }
        this.changeMatriculeHandler = this.changeMatriculeHandler.bind(this);
        this.changeNomHandler = this.changeNomHandler.bind(this);
        this.changePrenomHandler = this.changePrenomHandler.bind(this);
        this.changeDateNaisHandler = this.changeDateNaisHandler.bind(this);
        this.changeAdresseHandler = this.changeAdresseHandler.bind(this);
        this.changeNiveauHandler = this.changeNiveauHandler.bind(this);
        this.changeFiliereHandler = this.changeFiliereHandler.bind(this);
    }

    changeMatriculeHandler= (event)=>{
        this.setState({matricule: event.target.value})
    }
    changeNomHandler= (event)=>{
        this.setState({nom: event.target.value})
    }
    changePrenomHandler= (event)=>{
        this.setState({prenom: event.target.value})
    }
    changeDateNaisHandler= (event)=>{
        this.setState({date_nais: event.target.value})
    }
    changeAdresseHandler= (event)=>{
        this.setState({addresse: event.target.value})
    }
    changeNiveauHandler= (event)=>{
        this.setState({niveau: event.target.value})
    }
    changeFiliereHandler= (event)=>{
        this.setState({filiere: event.target.value})
    }

    cancel(){
        this.props.history.push('/');
    }

    saveStudent= (e)=>{
        e.preventDefault();
        let eleve= {
            matricule: this.state.matricule,
            nom: this.state.nom,
            prenom: this.state.prenom,
            date_nais: this.state.date_nais,
            addresse: this.state.addresse,
            niveau: this.state.niveau,
            filiere: this.state.filiere
        }
        StudentService.createStudent(eleve).then((res)=>{
            this.props.history.push('/all-student');
        })
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-7 offset-md-3 offset-md-3 mx-auto">
                                <h2>Enregistrer un élève</h2>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Matricule: </label>
                                            <input placeholder="Entrer le matricule..." name="matricule" className="form-control" 
                                                value={this.state.matricule} onChange={this.changeMatriculeHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Nom: </label>
                                            <input placeholder="Entrer le nom..." name="nom" className="form-control" 
                                                value={this.state.nom} onChange={this.changeNomHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Prénom: </label>
                                            <input placeholder="Entrer le prénom..." name="prenom" className="form-control" 
                                                value={this.state.prenom} onChange={this.changePrenomHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Date de Naissance: </label>
                                            <input name="date_nais" className="form-control" type="date" 
                                                value={this.state.date_nais} onChange={this.changeDateNaisHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Adresse: </label>
                                            <input placeholder="Entrer une adresse..." name="addresse" className="form-control"
                                                value={this.state.addresse} onChange={this.changeAdresseHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Niveau: </label>
                                            <input placeholder="Entrer le niveau..." name="niveau" className="form-control"
                                                value={this.state.niveau} onChange={this.changeNiveauHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Filière: </label>
                                            <input placeholder="Entrer la filière..." name="filiere" className="form-control"
                                                value={this.state.filiere} onChange={this.changeFiliereHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveStudent}>Enregistrer</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Annuler</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}
