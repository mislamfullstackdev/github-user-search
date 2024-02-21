import React from 'react';
const Form = ({ onChange, onSubmit, value }) => {
    return(
        <form className="search-form" onSubmit={onSubmit}>
            <input id="search"
                type="text"
                placeholder="Enter username or Email" 
                onChange={onChange}
                value={value}
            />
            <button type="submit">Search</button>
        </form>
    )
}

export default Form;