import React from 'react';
import axios from 'axios';
import UserCard from './Components/UserCard'
import './App.css';

class App extends React.Component {
  state = {
    user: {},
    followers: []
  }

  componentDidMount () {
    axios
      .get('https://api.github.com/users/allensam88')
      .then(response => {
        console.log(response);
        this.setState({
          user: response.data
        });
      })
      .catch(err => console.log(err));
  }

  componentDidUpdate(prevProps, prevState) {
    // always write these inside conditionals
    if (prevState.user !== this.state.user) {
        axios
          .get('https://api.github.com/users/allensam88/followers')
          .then(response => {
            console.log(response.data);
            this.setState({
              followers: response.data
            });
          })
          .catch(err => console.log(err));
      }
    }

  render () {
    return (
      <div>
        <UserCard user={this.state.user} followers={this.state.followers}/>
      </div>
    );
  }
}

export default App;