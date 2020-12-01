import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Home extends Component {
    render() {
        
        const buttonStyle = {
            padding:6,
            width:300,
            size:2,
            marginTop:6,
            marginBottom:3
        };
        return (
            <div>
                <h2 className="mt-3">Bienvenue dans l'application de gestion des élèves</h2>
                <br></br>
                <div className="container">
                    <div className="row">
                        <div className="card text-center col-md-6 offset-md-3 offset-md-3 mx-auto mt-3 mb-10">
                            <div className="card-body">
                                <Link to="/all-student" className="btn btn-primary btn-lg" style={buttonStyle}>Elèves</Link>
                                <br></br>
                                <Link to="/signin" className="btn btn-primary btn-lg" style={buttonStyle}>Se connecter</Link>
                                <br></br>
                                <Link to="/signup" className="btn btn-primary btn-lg" style={buttonStyle}>S'inscrire</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
