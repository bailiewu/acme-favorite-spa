import React, {Component} from 'react';

export default class Things extends Component{

    render(){
        const {users, things, favorites} = this.props
        return (
            <ul>
                {things.map( (thing) => {
                    return (
                        <li key = {thing.id}>
                            {thing.name}
                            <ul>
                                {
                                    favorites.filter( (fav) => fav.thingId === thing.id).map( (fav) => {
                                    // return (<li key={fav.id}>favorited by: {users[fav.userId - 1].name} </li>)
                                    return (
                                        users.filter( (user) => user.id === fav.userId)
                                            .map( (user2) => {
                                                return (
                                                    <li key={fav.id}> favorited by: {user2.name}</li>
                                                )
                                            })
                                        )
                                    })
                                }
                            </ul>
                        </li>
                        )
                })}
            </ul>
        )
    }
}

