import React, { Component } from 'react';
import CardList from './CardList';
import Searchbox from './Searchbox';
//! one below is destructured because it has multiple values
// import { robots } from './robots'; //using this when robots was a file
import Scroll from './Scroll';
import ErrorBoundry from './ErrorBoundry';
import './App.css';

//! to use state you have to changed the App from const to a class

class App extends Component{
    constructor() {
        super() //have to call super
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then (users => this.setState({robots: users}));
    }
    // onSearchChange is the function, searchchange is the prop
    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
        
      
    }

    render() {
         const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        //loading
        if (this.state.robots.length === 0) {
            return <h1>Loading</h1>
        } else {
        return (
            <div className='tc'>
                <h1 className='f1'> RoboFriends </h1>
                <Searchbox searchChange={this.onSearchChange}/> 
                <Scroll> 
                    <ErrorBoundry>
                        <CardList robots={filteredRobots} />
                    </ErrorBoundry>
                </Scroll>
            </div>
            );
        }
    }
}

export default App;