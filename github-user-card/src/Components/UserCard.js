import React from 'react';

class UserCard extends React.Component {
    constructor () {
        super ();
        this.state = {}
    }

    render () {
        return (
            <div>
                <h2>{this.props.user.name}</h2>
                {/* {this.props.followers.map(item => (
                    <p>{item}</p>)
                )} */}
                
            </div>
        )
    }
}

export default UserCard;