import React from 'react';
import './SearchBox.css';

const SearchBox = ({ searchfield, searchChange}) => {
    return (
        <div className='input_container'>
            <label htmlFor='search-input' className='serach-label'>Search Robots: </label>
            <input
                id='search-input'
                arial-label='Search Robots' 
                className='form-control' 
                type='search' 
                placeholder='search robots'
                onChange = {searchChange} 
            />
        
        </div>
        
    );
}

export default SearchBox;