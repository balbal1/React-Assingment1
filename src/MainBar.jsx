import React from 'react'
import './MainBar.css'

function MainBar(props) {
	
	// error here
    let input = document.getElementById("input");
    let select = document.getElementById("select");
    function addCard() {
        props.cards.push({
            title: input.value,
            tag: select.value,
            id: props.counter
        })
        console.log(props.cards);
    }

    return (
        <>
            <div className="input-container">
                <input type="text" id="input"/>
                <select defaultValue="Select a tag" id="select">
                    <option disabled hidden>Select a tag</option>
                    <option value="Productivity">Productivity</option>
                    <option value="Learning">Learning</option>
                    <option value="Personal">Personal</option>
                    <option value="Work">Work</option>
                    <option value="Finance">Finance</option>
                </select>
                <button className="add-button" onClick={addCard()}>Add</button>
            </div>
        </>
    )
}

export default MainBar