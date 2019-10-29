import React from 'react';

class Followers extends React.Component {
    constructor () {
        super ();
        this.state = {}
    }

    render () {
        return (
            <div>
                <p>{this.props.item.login}</p>
            
            </div>
        )
    }
}

export default Followers;