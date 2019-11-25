import React, {useState, useRef} from 'react';
import FontAwesome from 'react-fontawesome';
import PropTypes from 'prop-types';

import {StyledSearchBar, StyledSearchBarContent} from '../styles/StyledSearchBar';

const SearchBar = ({callback}) => {
    const [state, setState] = useState('');
    const timeOut = useRef(null); //You can useRef if you have a value that you want to be able to mutate and that you want to keep between your renders

    const doSearch = event => { //Controlled Component
        const {value} = event.target;

        clearTimeout(timeOut.current); //If you're going to grab the current value, there is a property called current
        setState(value);

        timeOut.current = setTimeout(() => { //setTimeout is built into JS
            callback(value);
        }, 500)
    }

    return(
        <StyledSearchBar>
            <StyledSearchBarContent>
                <FontAwesome className="fa-search" name="search" size="2x"/>
                <input type="text" placeholder="Movie" onChange={doSearch} value={state}/>
            </StyledSearchBarContent>
        </StyledSearchBar>
    )
};

SearchBar.propTypes = {
    callback: PropTypes.func,
}

export default SearchBar;