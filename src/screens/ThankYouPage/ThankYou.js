import React from 'react'
import '../../index.css'
import './thankYou.css'

function ThankYou() {
    return (
        <div className='web_background thankYoupageHeight' >

            <div className='allCenter paddingTopThankYou' style={{}} >

                <div style={{ paddingTop: 28 }} className='thankYouView' >
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent:'center' }} >
                        <div  style={{ textAlign: 'center',}}  className='thankYouColorText' >Thank you</div>
                        <div  style={{ textAlign: 'center' }}  className='thankYouNormalText' >wholeheartedly for joining us on this </div>
                    </div>
                    <div className='thankYouNormalText' style={{ textAlign: 'center' }} >meaningful </div>
                    <div className='thankYouNormalText' style={{ textAlign: 'center' }} >journey to create a positive impact on our planet! </div>

                    <div className='simpleText ' style={{marginTop:28}} >
                        <div>We’re excited to share that your exclusive download link for CODE2 will be arriving shortly.
                            This app is designed to help you assess your carbon footprint and provide tailored recommendations to offset your impact. Additionally, you’ll gain access to a green marketplace, empowering you to choose climate-first option for your everyday products & services.
                        </div>
                    </div>

                    <div className='stayTuneText' style={{marginTop:30, textAlign:'center'}} >Stay tuned for an enriching experience ahead!”</div>
                </div>

                <div>
                </div>
            </div>


        </div>
    )
}

export default ThankYou