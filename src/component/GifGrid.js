import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { GifGridItem } from './GifGridItem'
import '../index.css'
import { useFetchGifs } from '../hooks/useFetchGifs'

export const GifGrid = ({category}) => {


    const {data, loading} = useFetchGifs(category);

    return (
        <>
        <h3>{category}</h3>
        {loading && <p>loading</p>}

        <div className="card-grid">
            <ol>
                {
                    data.map((img) => (
                        <GifGridItem key={img.id} {...img} />
                    ))
                }
            </ol>
            
        </div>
        </>
    )
}
