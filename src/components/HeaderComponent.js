import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import UserService from '../services/UserService'

class HeaderComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {}

        this.logout= this.logout.bind(this);
    }
    logout(){
        UserService.logOut();
    }
    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="/" className="navbar-brand">Students Management App</a></div>
                    <Link to="/"onClick={this.logout}>Se déconnecter</Link>
                    </nav>
                </header>
            </div>
        )
    }
}

export default HeaderComponent