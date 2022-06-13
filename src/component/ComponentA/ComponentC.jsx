import React from 'react'
import { useSelector } from 'react-redux'

const ComponentC = () => {

    const store =  useSelector((e)=> (e))
  return (
    <>
    
    <div>
        {store.product}
    </div>

    </>
  )
}

export default ComponentC
