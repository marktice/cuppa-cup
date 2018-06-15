import React from 'react'

function CupItem(props) {

  return (
    <div key={props.key} style={{background: props.color}} className='card border-secondary mb-3' key={props.id}>
      <div className='card-header'>{props.name}</div>
      <div className='card-body'>
        <p className='card-text'>Material: {props.material}</p>
        <p className='card-text'>Color: {props.color}</p>
        {/* <p className='card-text'>Accessories: {accessories.join(', ')}</p> */}
        <button onClick={() => {props.handleRemove(props.id)}}>X</button>
      </div>
    </div>
  )
  
  // <li key={props.key}>{props.name} <button onClick={() => {
  //   props.handleRemove(props.id)
  // }}>X</button></li>
}

export default CupItem