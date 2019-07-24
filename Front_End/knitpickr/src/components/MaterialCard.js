import React from 'react';

export default function MaterialCard(props) {
    console.log({props})
    var tableStyle = {
        // "border": "1px dashed green"
     };
        return(
            <div>
                
                 
                 {/* {props.material.name} === "yarn" ? return "skeins" : null} */}
                
                 <table style={tableStyle}>
                    {/* <tr><th>Things</th></tr> */}
                    <tr>
                    {props.index + 1}). {props.material.brand} {props.material.color} {props.material.name} - {props.material.quantity} skein(s)
                    </tr>
                    
                </table>
                
            </div>
        )
}
