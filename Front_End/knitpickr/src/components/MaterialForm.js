import React from 'react';

export default function MaterialForm(props) {

    const sendMaterial = (event) => {
        event.preventDefault()
        const newMaterial_name = document.getElementById("materialName")
        const newMaterial_brand = document.getElementById("brandName")
        const newMaterial_color = document.getElementById("materialColor")
        const newMaterial_quantity = document.getElementById("materialQuantity")
        props.addMaterial(newMaterial_name, newMaterial_brand, newMaterial_color, newMaterial_quantity, props.projectID)
        newMaterial_name.value = ""
        newMaterial_brand.value = ""
        newMaterial_color.value = ""
        newMaterial_quantity.value = ""
        console.log(props)
        // debugger
    }

    return(
        <div>
            <form onSubmit={sendMaterial}>
                <label>Material Name/Type: 
                <select id="materialName">
                    <option value="yarn">yarn</option>
                    <option value="hook">hook</option>
                </select>
                </label>

                <label>Brand
                <input type="text" id="brandName"/>
                </label>

                <label>Color
                <input type="text" id="materialColor"/>
                </label>

                <label>Quantity
                <input type="text" id="materialQuantity"/>
                </label>

                <input type="submit" value="Add Material"/>
            </form>
        </div>
    )
}