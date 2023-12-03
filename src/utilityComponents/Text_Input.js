import React from 'react'
import './utility.css'

function Text_Input({inputName='', type='text'}) {
  return (
    <div>
        <div className='inputText' >{inputName}</div>
        <input type={type} className='inputDesign' />
    </div>
  )
}

export default Text_Input