import React from 'react'
import './utility.css'

function GreenBorderButton({text='', isSelected=false, onPress=()=>{} }) {
  return (
    <div onClick={(onPress)} className={isSelected ? 'greenButton' : 'greenBorderBtn'} >
        <div className={isSelected ? 'greenBtnText' : 'greenBorderBtnText'}>{text}</div>
    </div>
  )
}

export default GreenBorderButton