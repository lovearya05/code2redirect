import React from 'react'
import GreenBorderButton from '../../utilityComponents/GreenBorderButton'
import { useNavigate } from 'react-router-dom';

function NavbarMobileView({page=''}) {
    const navigate = useNavigate();
    const handleNavigate = (page)=>{
      navigate('/code2/'+page)
    }
  return (
    <div style={{paddingLeft: '9%', marginTop:'12%'}} >
        <div className='flexRowAlignCenter'>
            <GreenBorderButton text='Sign in'isSelected={page=='login'} onPress={()=>handleNavigate('login')} />
            <div className='marginRight8' ></div>
            <GreenBorderButton text='Signup' isSelected={page=='signup'} onPress={()=>handleNavigate('signup')}  />
          </div>
    </div>
  )
}

export default NavbarMobileView