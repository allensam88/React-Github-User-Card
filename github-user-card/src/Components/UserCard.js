import React from 'react';
import Followers from './Followers';

class UserCard extends React.Component {
    constructor () {
        super ();
        this.state = {}
    }

    render () {
        return (
            <div>
                <h2>{this.props.user.name}</h2>
                {this.props.followers.map(item => (
                    <Followers key={item.id} item={item}/>
                ))}
                
            </div>
        )
    }
}

export default UserCard;