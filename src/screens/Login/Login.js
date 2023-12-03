import React from 'react'
import '../signup/signup.css'
import '../../index.css'
import SignUpLoginNavbar from '../navbar/SignUpLoginNavbar'
import Text_Input from '../../utilityComponents/Text_Input'
import GreenBorderButton from '../../utilityComponents/GreenBorderButton'
import GreenButton from '../../utilityComponents/GreenButton'
import { useNavigate } from 'react-router-dom'
import MobileViewMobiles from '../../utilityComponents/MobileViewMobiles'

function Login() {

  const navigate = useNavigate();
    const handleNavigate = (page)=>{
        navigate('/code2/'+page)
      }
  return (
    <div className='web_background' >
        <SignUpLoginNavbar page='login' />
        <MobileViewMobiles page='login' />

        <div style={{marginTop:'6%'}} className='allCenter' >

            <div style={{paddingTop:28}} className='formDiv' >
                <div style={{display:'flex', flexDirection:'row', justifyContent:'center'}} >
                    <div className='flexRowAlignCenter onMobileViewSignupText' >
                        <div className='readyDive' >Welcome back!</div>
                        <div className='signupText' >Sign In with us</div>
                    </div>
                    
                </div>
                <div style={{paddingTop:'12%'}} >
                <Text_Input inputName='Email id' />
                <Text_Input inputName='Password' />

                </div>


                <div className='forgotPasswordText'>I forgot my password.</div>

                <div className='allCenter' style={{marginTop:50}} >
                    <GreenButton text='Login' onPress={()=>handleNavigate('thankYou')} />
                </div>
            </div>

        </div>

    </div>
  )
}

export default Login