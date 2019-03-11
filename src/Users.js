import React, {Component} from 'react';

export default class Users extends Component{

    
    render(){
        const {users, things, favorites} = this.props

        return (
            <ul>
                {users.map( (user) => {
                    return (
                        <li key = {user.id}>
                            {user.name}
                            <ul>
                                {
                                    favorites.filter( (fav) => fav.userId === user.id).map( (fav) => {
                                    // return (<li key={fav.id}>{things[fav.thingId - 1].name} (Ranked: {fav.rank})</li>)
                                    return (
                                        things.filter( (thing) => thing.id === fav.thingId)
                                            .map( (thing2) => {
                                                return (
                                                    <li key={fav.id}> {thing2.name}(Ranked: {fav.rank})</li>
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
