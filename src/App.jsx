import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card.jsx'
import MainBar from './MainBar.jsx'

function App() {
  
  let cards = [{
    title: "Do the first assignment of react",
    tag: "frontend",
    id: "1"
  }];
  
  function displayCards() {
    let c = []
    for (let i = 0; i < cards.length; i++) {
      c.push(<Card deleteCards={deleteCard} title={cards[i].title} tag={cards[i].tag} keys={cards[i].id} key={cards[i].id}/>)
    }
    return c;
  }

  function deleteCard(props) {
        cards[props-1] = null;
        console.log(cards);
  }

  return (
    <>
      <MainBar cards={cards} />
      <div className="cards-container">
        {displayCards()}
      </div>
    </>
  )
}

export default App
