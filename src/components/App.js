import React from 'react';
import './App.scss';

function App(props) {
  const cups = props.cups.map((cup) => {
    return createCupCard(cup);
  });
  return cups;
}

function createCupCard(cup) {
  const accessories = [];
  for (const key in cup.accessories) {
    if (cup.accessories[key] === true) {accessories.push(key)}
  }
  return (
    <div style={{background: cup.color}} className='card border-secondary mb-3' key={cup._id}>
      <div className='card-header'>{cup.name}</div>
      <div className='card-body'>
        <p className='card-text'>Material: {cup.material}</p>
        <p className='card-text'>Color: {cup.color}</p>
        <p className='card-text'>Accessories: {accessories.join(', ')}</p>
      </div>
    </div>
  );
}

export default App;