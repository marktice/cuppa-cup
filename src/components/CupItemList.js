import React from 'react'
import CupItem from './CupItem'

function CupItemList(props) {
    const cups = props.cups.map(cup => {
      return <CupItem 
          key={cup._id}
          id={cup._id} 
          handleRemove={props.removeCup} 
          name={cup.name} 
          material={cup.material} 
          color={cup.color} 
      />
    })
    return <div className='card-group'>{cups}</div>
}

export default CupItemList