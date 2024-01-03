import React, { useEffect, useState } from 'react'
import './signup.css'
import '../../index.css'
import SignUpLoginNavbar from '../navbar/SignUpLoginNavbar'
import Text_Input from '../../utilityComponents/Text_Input'
import GreenBorderButton from '../../utilityComponents/GreenBorderButton'
import GreenButton from '../../utilityComponents/GreenButton'
import { useNavigate } from 'react-router-dom'
import MobileViewMobiles from '../../utilityComponents/MobileViewMobiles'
import SignUpThankYou from './SignUpThankYou'
import '../../index.css'


function Signup() {
    const navigate = useNavigate();
    // const handleNavigate = (page) => {
    //     navigate('/' + page)
    // }
    const [showThanks, setShowThanks] = useState(false)
    useEffect(() => {
        if (showThanks) {
            setTimeout(() => {
                navigate('/')
            }, 1500)
        }

    }, [showThanks])
    
    return (
        <div className='web_background' >
            {!showThanks && <SignUpLoginNavbar page='signup' />}
            {!showThanks && <MobileViewMobiles page='signup' />}


            {!showThanks && <div style={{ marginTop: '6%' }} className='allCenter' >

                <div style={{ paddingTop: 28 }} className='formDiv' >
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }} >
                        <div className='flexRowAlignCenter onMobileViewSignupText' >
                            <div className='readyDive' >Ready to dive in? </div>
                            <div className='signupText' >Signup with us</div>
                        </div>

                    </div>

                    <Text_Input inputName='Name' />
                    <Text_Input inputName='Contact number' />
                    <Text_Input inputName='Email id' />
                    <Text_Input inputName='Password' type='password' />


                    <div className='allCenter' style={{ marginTop: 50 }} >
                        <GreenButton text='Save & Submit' onPress={() => setShowThanks(true)} />
                    </div>
                </div>

            </div>}

            {showThanks && <div style={{ position: 'absolute', zIndex: 2, display: 'flex', justifyContent: 'center', width: '100vw', top: '40vh' }} >

                <SignUpThankYou />
            </div>}


        </div>
    )
}

export default Signup