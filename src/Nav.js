import React, {Component} from 'react';
import {Link} from 'react-router-dom'

export default class Nav extends Component{

    render(){
        const {users, things} = this.props
        return (
            <ul className="nav nav-pills">
                <li className="nav-item">
                    <Link to="/users" className={`nav-link ${this.props.location.pathname === '/users' ? 'active' : ''}`}>users {users.length}</Link>
                </li>
                <li className="nav-item">
                    <Link to="/things" className={`nav-link ${this.props.location.pathname === '/things' ? 'active' : ''}`}>things {things.length}</Link>
                </li>
            </ul>
        )
    }
}
