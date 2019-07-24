import React from 'react';

export default function MaterialCard(props) {
    console.log({props})
    var tableStyle = {
        // "border": "1px solid",
        margin: '40px',
        padding: '10px' ,
        width: '100%',
        // text-align:'center'
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
