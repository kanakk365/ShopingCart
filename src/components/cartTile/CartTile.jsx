import React from 'react'
import "./style.css"
import { useDispatch } from 'react-redux'
import { removeFromCart } from '../../store/slices/cartSlice'

function CardTile({item}) {

  const  dispatch= useDispatch()
    function handleRemove(){
      dispatch(removeFromCart(item))
    }
  return (
    <div className='card'>
        <img src={item?.image} alt={item?.title} className='iag' />
        <p>Price: {item.price}</p>
        <button onClick={handleRemove}>Remove</button>
    </div>
  )
}

export default CardTile