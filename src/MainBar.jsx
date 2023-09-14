import React from 'react'
import './MainBar.css'

function MainBar(props) {

    let counter = 2;

    let inputValue;
    function getInputValue(e) {
        inputValue = e.target.value;
    }

    let selectValue;
    function getSelectValue(e) {
        selectValue = e.target.value;
    }

    function addCard() {
        props.cards.push({
            title: inputValue,
            tag: selectValue,
            id: counter++
        })
        console.log(props.cards);
    }

    return (
        <>
            <div className="input-container">
                <input onChange={getInputValue} type="text" id="input"/>
                <select onChange={getSelectValue} defaultValue="Select a tag" id="select">
                    <option disabled hidden>Select a tag</option>
                    <option value="Productivity">Productivity</option>
                    <option value="Learning">Learning</option>
                    <option value="Personal">Personal</option>
                    <option value="Work">Work</option>
                    <option value="Finance">Finance</option>
                </select>
                <button className="add-button" onClick={addCard}>Add</button>
            </div>
        </>
    )
}

export default MainBar