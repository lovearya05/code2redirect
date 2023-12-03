import React from 'react'
import './signup.css'
import '../../index.css'
import SignUpLoginNavbar from '../navbar/SignUpLoginNavbar'
import Text_Input from '../../utilityComponents/Text_Input'
import GreenBorderButton from '../../utilityComponents/GreenBorderButton'
import GreenButton from '../../utilityComponents/GreenButton'
import { useNavigate } from 'react-router-dom'
import MobileViewMobiles from '../../utilityComponents/MobileViewMobiles'


function Signup() {
    const navigate = useNavigate();
    const handleNavigate = (page)=>{
        navigate('/code2/'+page)
      }
  return (
    <div className='web_background' >
        <SignUpLoginNavbar  page='signup'/>
        <MobileViewMobiles page='signup' />


        <div style={{marginTop:'6%'}} className='allCenter' >

            <div style={{paddingTop:28}} className='formDiv' >
                <div style={{display:'flex', flexDirection:'row', justifyContent:'center'}} >
                    <div className='flexRowAlignCenter onMobileViewSignupText' >
                        <div className='readyDive' >Ready to dive in? </div>
                        <div className='signupText' >Signup with us</div>
                    </div>
                    
                </div>

                <Text_Input inputName='Name' />
                <Text_Input inputName='Contact number' />
                <Text_Input inputName='Email id' />
                <Text_Input inputName='Password' />


                <div className='allCenter' style={{marginTop:50}} >
                    <GreenButton text='Save & Submit' onPress={()=>handleNavigate('thankYou')} />
                </div>
            </div>

        </div>

    </div>
  )
}

export default Signup