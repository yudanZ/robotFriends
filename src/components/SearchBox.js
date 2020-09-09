import React from 'react';
import './SearchBox.css';

const SearchBox = ({ searchfield, searchChange}) => {
    return (
        <div className='input_container'>
            <input 
                className='form-control' 
                type='search' 
                placeholder='search robots'
                onChange = {searchChange} 
            />
        </div>
        
    );
}

export default SearchBox;