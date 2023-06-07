import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeName,changeDescription,changeCost } from '../store/slices/formSlice'
import { addItem } from '../store/slices/cartSlice'

function CartForm() {

  const dispatch = useDispatch()

  const {name,description,cost} = useSelector((state)=>{
    return {
      name:state.form.name,
      description:state.form.description,
      cost:state.form.cost
    }
  })


  console.log(name,description,cost)

  const handleSubmit =(event)=>{
      event.preventDefault()
      dispatch(addItem({name,description,cost}))
  }

  return (
/*
    <div className="container">


      <div className='row mt-3'>
            <h1>Sepete öğe ekle</h1>
      </div>

      <div className="row mt-2">


        <form action="" className='d-inline-block'>
          
        <div className="col">
          <label htmlFor="ad">Ad:</label>
          <input id="ad" type="text" onChange={(event)=>dispatch(changeName(event.target.value))} className="form-control" />
        </div>

        <div className="col">
          <label htmlFor="aciklama">Açıklama:</label>
          <input id="aciklama" onChange={(event)=>dispatch(changeDescription(event.target.value))} type="text" className="form-control" />
        </div>

        <div className="col">
          <label htmlFor="fiyat">Fiyat:</label>
          <input id="fiyat" type="text" onChange={(event)=>dispatch(changeCost(event.target.value))} className="form-control" />
        </div>



        <div className='col'>
              <button className='btn btn-success mt-4'>Kaydet</button>
        </div>
        </form>

    
      </div>
    </div>

    */
<div className="container">
      <div className='row mt-3'>
        <h1>Sepete öğe ekle</h1>
      </div>
      <div className="row mt-2">
        <form action="" onSubmit={handleSubmit} className="d-flex">
          <div className="form-group mr-2">
            <label htmlFor="ad">Ad:</label>
            <input id="ad" value={name} type="text" onChange={(event) => dispatch(changeName(event.target.value))} className="form-control" />
          </div>
          <div className="form-group" style={{marginLeft:20}}>
            <label htmlFor="aciklama">Açıklama:</label>
            <input id="aciklama" value={description} onChange={(event) => dispatch(changeDescription(event.target.value))} type="text" className="form-control" />
          </div>
          <div className="form-group" style={{marginLeft:20}}>
            <label htmlFor="fiyat">Fiyat:</label>
            <input id="fiyat" value={cost} type="number" onChange={(event) => dispatch(changeCost(event.target.value))} className="form-control" />
          </div>
          <div className='form-group' style={{marginLeft:20}}>
            <button className='btn btn-success mt-4'>Kaydet</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CartForm