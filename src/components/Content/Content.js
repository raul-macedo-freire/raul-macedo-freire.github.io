import React from 'react'
import reactDom from 'react-dom'

export function Title(title,icon){
    return(
        <div>
        <img src={icon}/>
        {title}
        </div>
    )
}

export function Description(description,image){
    return(
        <div class='description'>
            {description}
        </div>
    );
}