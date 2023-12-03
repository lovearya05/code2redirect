import React from 'react'
import './utility.css'

function GreenButton({text='', onPress=()=>{}}) {

  return (
    <div onClick={onPress} className='greenButton'>
        <div className='greenBtnText'>{text}</div>
    </div>
  )
}

export default GreenButton