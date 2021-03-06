import React,{Component} from 'react';
import Navbar from './component/layout/Navbar';
import Users from './component/users/Users';
import axios from 'axios';
import './App.css';

class App extends Component{
  state = {
    users: [],
    loading: false
  }
  async componentDidMount(){
    this.setState({loading: true});
    const res = await axios.get('https://api.github.com/users')
    this.setState({users: res.data, loading: false})
  }
    render(){
      return (
        <React.Fragment>
         <Navbar />
         <div className="container">
         <Users loading={this.state.loading} users={this.state.users} /> 
         </div>
      
        </React.Fragment>
      );
    }
}


export default App;
