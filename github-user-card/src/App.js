import React from 'react';
import axios from 'axios';
import Search from './Components/Search';
import UserCard from './Components/UserCard';
import Follower from './Components/Follower';
import './App.css';

class App extends React.Component {
  state = {
    user: 'allensam88',
    followers: []
  }

  componentDidMount () {
    axios
      .get(`https://api.github.com/users/${this.state.user}`)
      .then(response => {
        this.setState({
          user: response.data
        });
        return axios.get(response.data.followers_url);
      })
      .then(response => {
        this.setState({
          followers: response.data
        });
      })
      .catch(err => console.log(err));
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.user !== this.state.user) {
        axios
          .get(`https://api.github.com/users/${this.state.user}`)
          .then(response => {
            this.setState({
              user: response.data
            });
            return axios.get(response.data.followers_url);
          })
          .then(response => {
            this.setState({
              followers: response.data
            });
          })
          .catch(err => console.log(err));
      }
    }

  searchUser = (query) => {
    this.setState({
      user: query
    })
  }

  render () {
    return (
      <div className='App'>
        <h1>GitHub User Card</h1>
        <Search searchUser={this.searchUser} />
        <div className='container'>
          <UserCard user={this.state.user} followers={this.state.followers}/>
          <div className='followersContainer'>
            {this.state.followers.map(item => (
                <Follower key={item.id} item={item}/>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;