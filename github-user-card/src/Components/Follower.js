import React from 'react';

class Follower extends React.Component {
    constructor () {
        super ();
        this.state = {}
    }

    render () {
        return (
            <div className='follower'>
                <img src={this.props.item.avatar_url} alt='profile avatar' className='followerImg' />
                <p>{this.props.item.login}</p>
            </div>
        )
    }
}

export default Follower;