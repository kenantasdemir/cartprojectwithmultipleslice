import React from 'react'
import { useSelector } from 'react-redux'

function CartValue() {

    const totalCost = useSelector(({form,cartItems:{data,searchTerm}})=> {
        const filteredItems = data.filter((item)=>
            item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
     
        let cost = 0;
        for(let item of filteredItems){
            cost += item.cost
        }

        return cost;
    });

  return (
    <div className='d-flex justify-content-end'>Toplam Tutar: {totalCost} </div>
  )
}

export default CartValue