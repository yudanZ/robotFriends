import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundry';
import './App.css';




class App extends Component {
    constructor(){
        super();
        this.state = {
            robots: [],
            searchfield: ''
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users').then( response => {
            return response.json();
        })
        .then( users => {
            this.setState({robots: users});
        })

        
        //console.log('check');
        //this.setState({robots: robots});
    }

    onSearchChange = (event) => {
        //console.log(event.target.value);
        this.setState({searchfield: event.target.value});
        
    }
    render (){
        const { robots, searchfield } = this.state;
        const filteredRobots = robots.filter( robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        });
        if( !robots.length ){
            return <h1>Loading</h1>
        }else {
            return (
                <div className="container">
                    <h1 className="text-center">RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots={filteredRobots}/>
                        </ErrorBoundary>
                        
                    </Scroll>
                    
                </div>
               
            
            );
        }
        //console.log(filteredRobots);
        

    }
    
}

export default App;