import React from 'react'
import "../search-box/search-box.css"

const Search = ({placeholder, handleChange}) => {
    return (
        <div className ="search">
            <input type="search" placeholder={placeholder} onChange = {handleChange}/>
        </div>
    )
}

export default Search;
