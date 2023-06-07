import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { removeItem } from '../store/slices/cartSlice'

function CartList() {

    const dispatch = useDispatch()

    const {cartItems} = useSelector(({form,cartItems:{data,searchTerm}}) => {
        // return state.cartItems.data
        const filteredItems = data.filter((item)=>item.name.toLowerCase().includes(searchTerm.toLowerCase()))

        return {
            cartItems:filteredItems
        }
   
    })

    


    const renderedItems = cartItems.map((item) => {
        return (
            <div key={item.id} className='card w-25'>

                <div className='card-header'>
                    <h1 className='text-center'> {item.name} </h1>

                </div>

                <div className='card-body'>
                    <p className='text-center'> {item.description} </p>
                    <p className='text-center'> {item.cost} </p>
                </div>

                <div className='card-footer'>
                    <button onClick={()=>dispatch(removeItem(item.id))} className='btn btn-danger w-100'>Sil</button>

                </div>


            </div>
        )
    })



    return (
        <div>
            {renderedItems}
        </div>
    )
}

export default CartList