import React from 'react'
import './utility.css'

function Text_Input({inputName=''}) {
  return (
    <div>
        <div className='inputText' >{inputName}</div>
        <input type='text' className='inputDesign' />
    </div>
  )
}

export default Text_Input