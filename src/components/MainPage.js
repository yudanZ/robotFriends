import React, { Component } from 'react';

import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundry';
import './MainPage.css';


class MainPage extends Component {
   constructor(props){
       super(props)
   }
    componentDidMount(){
        //console.log(this.props.store.getState());
        this.props.onRequestRobots();
        
        //console.log('check');
        //this.setState({robots: robots});
    }
    filteredRobots = () => {
        return this.props.robots.filter( robot => {
            return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase())
        })
    }
    
    render (){
      
        const {  onSearchChange, isPending} = this.props;
        
      
        if( isPending ){
            return <h1>Loading</h1>
        }else {
            return (
                <div className="container">
                    <h1 className="text-center">RoboFriends</h1>
                    <SearchBox searchChange={onSearchChange}/>
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots={this.filteredRobots()}/>
                        </ErrorBoundary>
                        
                    </Scroll>
                    
                </div>
               
            
            );
        }
        //console.log(filteredRobots);
        

    }
    
}

export default MainPage;