import React, {Component} from 'react';
import axios from 'axios'
import { HashRouter, Route } from 'react-router-dom';
import Nav from './Nav'
import Things from './Things'
import Users from './Users'

export default class App extends Component{
    constructor(){
        super()
        this.state = {
            users: [],
            things: [],
            favorites: []
        }
    }

    async componentDidMount() {
        try {
          const usersResponse = await axios.get('/api/users');
          const thingsResponse = await axios.get('/api/things')
          const favoriteResponse = await axios.get('/api/favorites')
          this.setState({ users: usersResponse.data, things: thingsResponse.data, favorites: favoriteResponse.data });
        } catch (error) {
          console.error(error);
        }
    }

    render(){
        const {users, things, favorites} = this.state
        return (
            <HashRouter>
            <div>
                <h1>Acme Favorites</h1>
                <Route render={(props) => <Nav {...props} users={users} things={things} />} />
                <Route exact path="/" render={(props) => <Users {...props} users={users} things={things} favorites={favorites} />} />
                <Route exact path="/users" render={(props) => <Users {...props} users={users} things={things} favorites={favorites} />} />
                {/* <Route exact path="/things" component={Things} /> */}
                <Route exact path="/things" render={(props) => <Things {...props} users={users} things={things} favorites={favorites} />} />

            </div>
            </HashRouter>
        )
    }
}

