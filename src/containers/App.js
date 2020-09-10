import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundry';
import './App.css';

import { setSearchField, requestRobots } from '../actions';

const mapStateToProps = state => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => requestRobots(dispatch)
    }
}


class App extends Component {
   
    componentDidMount(){
        //console.log(this.props.store.getState());
        this.props.onRequestRobots();
        
        //console.log('check');
        //this.setState({robots: robots});
    }

    
    render (){
      
        const { searchField , onSearchChange, robots, isPending, error} = this.props;
        const filteredRobots = robots.filter( robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        });
        if( isPending ){
            return <h1>Loading</h1>
        }else {
            return (
                <div className="container">
                    <h1 className="text-center">RoboFriends</h1>
                    <SearchBox searchChange={onSearchChange}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(App);