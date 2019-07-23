import React from 'react';

export default function MaterialCard(props) {
    console.log({props})
        return(
            <div>
                <ul>
                 <li> {props.material.brand} {props.material.color} {props.material.name} - {props.material.quantity} skeins</li>
                 {/* {props.material.name} === "yarn" ? return "skeins" : null} */}
                </ul>
            </div>
        )
    
}
