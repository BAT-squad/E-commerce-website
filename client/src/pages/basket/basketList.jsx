import React from 'react'
import BasketDetails from "./BasketDets"
 const BasketList = (props) => { 
  console.log(props)
  return (
    <span>
        {
            props.data.map(e=>{
                
                return (   <span className='flex'>
                    <BasketDetails data = {e} getItems = {props.getItems}/>
                </span>)
                
            })
        }
      </span>
  )
}

export default BasketList