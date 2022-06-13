import React from 'react'
import { useDispatch } from 'react-redux'
import { Data } from '../../redux/Action'

const ComponentB = () => {

 const dispatch = useDispatch()

 const HandleChange = (e) => {

  dispatch(Data(e.target.value))

 }

  return (
    <>
    
    <input type="text"
     placeholder='Enter Data'
      className='compb' 
      onChange={(e) => HandleChange(e)} />

    </>
  )
}

export default ComponentB
