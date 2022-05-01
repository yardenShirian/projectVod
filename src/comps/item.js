import React from 'react'
import { Link } from 'react-router-dom'

export default function Item({item}) {
    return (
        <div className='col-md-3 col-6 p-4 itemCss '>
            <div  className='vodApp_img'>
                <Link to={`/video/${item.imdbID}`}>
                <img style={{borderRadius:'12px',cursor:'pointer'}} className='w-100 h-100 overflow-hidden' src={item.Poster}></img>
                </Link> 
            </div>
        </div>
    )
}
