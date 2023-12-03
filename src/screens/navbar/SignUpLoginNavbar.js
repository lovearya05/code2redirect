import React from 'react'
import GreenBorderButton from '../../utilityComponents/GreenBorderButton'
import code2Circle from '../../assets/code2Circle.svg'
import code2text from '../../assets/code2text.svg'
import { useNavigate, } from 'react-router-dom'
import './signupLoginNavbar.css'


function SignUpLoginNavbar({page=''}) {
  // const navigation = useNavigation()
  const navigate = useNavigate();

  const handleNavigate = (page)=>{
    navigate('/code2/'+page)
  }

  return (
    <div>
      <div style={{ marginTop: 8, paddingBottom: 8, }} className='paddingHori50 backColorWhite showBorderBottom'>
        <div className='flexRowSpcBtn' >
          <div className='flexRowAlignCenter'>
            <img style={{ height: 32, width: 32 }} src={code2Circle} />
            <img style={{ marginLeft: 4 }} src={code2text} />
          </div>
          <div className='signupLoginButtons' >
            <div className='flexRowAlignCenter '>
              <GreenBorderButton text='Sign in' isSelected={page=='login'} onPress={()=>handleNavigate('login')} />
              <div className='marginRight8' ></div>
              <GreenBorderButton text='Signup' isSelected={page=='signup'}  onPress={()=>handleNavigate('signup')}  />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUpLoginNavbar