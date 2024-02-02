import React from 'react'
import './privacy.css'
import { policyData } from './policyData'
function PrivacyPolicy() {
    // console.log('policyData', policyData)
    return (
        <div className='' >
            <div className='allCenter' >
                <h2 className='headingCenter' >Privacy Policy for CarbonMint</h2>
            </div>

            <div style={{paddingLeft:'5vw', paddingRight:'5vw'}} >
                <p>Last Updated: [02.02.2024]</p>
                <p>Welcome to CarbonMint! This Privacy Policy outlines how we collect, use, and safeguard your personal information while using our app. We are committed to protecting your privacy and complying with data protection standards. By using our app, you agree to the terms outlined in this policy.</p>

                {
                    policyData.map((item, i) => {
                        return (
                            <div key={i} >
                                <h5>{item?.title}</h5>
                                <p>{item?.description}</p>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default PrivacyPolicy