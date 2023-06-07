import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { changeSearchTerm } from '../store/slices/cartSlice'

function CartSearch() {

    const dispatch = useDispatch()
    const searchTerm = useSelector((state)=>{
        return state.cartItems.searchTerm
    })

  return (
    <div className='d-flex my-3 justify-content-between align-items-end'>
            <h2>Sepetim</h2>
            <div className='d-flex justify-content-around'>
                <p className='mx-3 mt-3'>Ara</p>
            <input  onChange={(event)=>dispatch(changeSearchTerm(event.target.value))} type="text" value={searchTerm} className='form-control w-100' />
            </div>
   
    </div>
  )
}

export default CartSearch