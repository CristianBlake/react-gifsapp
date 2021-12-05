import React, { useState } from 'react'

const SearchGif = ( { setCategories } ) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if( inputValue.trim().length > 2 ){
            setCategories( cats => [ inputValue, ...cats] );
            setInputValue('');
        }
    }

    return (
        <form
            className="row"
            onSubmit={ handleSubmit }    
        >
            <h1 className="text-light fw-bold">GIFsApp</h1>

            <input
                type="text"
                value={ inputValue }
                onChange={ handleInputChange }
            />

        </form>
    )
}

export default SearchGif
