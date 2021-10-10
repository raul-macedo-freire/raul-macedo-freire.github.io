import React from 'react'

function TextBox(title,description,children){
    return(<div>
        <div> 
            {title}
        </div>
        <div>
            {description}
        </div>
    </div>
    );
}