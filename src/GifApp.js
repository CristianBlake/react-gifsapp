import React, { useState } from 'react'
import SearchGif from './components/SearchGif'
import GifGrid from './components/GifGrid';

const GifApp = () => {

    const [categories, setCategories] = useState( ['Cowboy Bebop'] );

    return (
        <div className="container">
            <SearchGif setCategories={setCategories}/>
            <ol>
                {
                    categories.map(category =>
                        <GifGrid
                            key={category}
                            category={category}
                        />)
                }
            </ol>
        </div>
    )
}

export default GifApp
