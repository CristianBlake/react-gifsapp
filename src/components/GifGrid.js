import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import GifGridItem from './GifGridItem';

const GifGrid = ( { category } ) => {

    const { data, loading } = useFetchGifs(category);

    return (
        <>
            <h2> {category} </h2>
            { loading && <p>Cargando</p> }
            
            <div className="card-grid d-flex justify-content-center">
                {
                    data.map( gif => (
                        <GifGridItem
                            key={ gif.id }
                            { ...gif }
                        />
                    ))
                    
                }
            </div>
        </>
    )
}

export default GifGrid
