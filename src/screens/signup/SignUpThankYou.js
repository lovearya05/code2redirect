import React from 'react'
import './signUpThankYou.css'
import greenCircleCheck from '../../assets/greenCircleCheck.svg'

function SignUpThankYou() {
  return (
    <div style={{}} className='shadow'  >
        <div className='thankYouBox' >
            <img src={greenCircleCheck} className='tsCircleCheck' />
            <div className='tsThankYou' >Thankyou!</div>
            <div className='notifyText' >We’ll notify you soon with new updates.</div>
        </div>
    </div>
  )
}

export default SignUpThankYou