import React from 'react'
import PropTypes from 'prop-types'
import '../index.css'


export const GifGridItem = (props) => {


    return (
        <div className="card  animate__animated animate__fadeIn">
            <img src={props.url} alt={props.title}></img>
            <p>{props.title}</p>
            
        </div>
    )
}

GifGridItem.propTypes = {

    img: PropTypes.object

}
