import React, { useState } from "react";

const Color = (props) => {
    const { inputs, setInputs } = props;
    const [ clicked, setClicked ] = useState( false)
    const changing = (e) => {
        // TODO:needs to make it an array list insted of one object now it's display one object
        setInputs({ color:e.target.value })
    }

    const addBox = e => {
        e.preventDefault();
        setClicked(true)
    }

    return (
        <>
        <form onSubmit={addBox}>
            <label htmlFor="Color">Color</label>
                <input onChange={changing} type="text" name="color" value={inputs.color }/>
            <button type="submit">Add</button>
            </form>
            {clicked ? <div style={{ backgroundColor: "red" }} >
                <p>{inputs.color}</p>
                </div> : null }
        </>
    );
};

export default Color;