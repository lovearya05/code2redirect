import React, { useEffect } from 'react'
import './splash.css'
import code2Circle from '../../assets/code2Circle.svg'
import code2text from '../../assets/code2text.svg'
import GreenBorderButton from '../../utilityComponents/GreenBorderButton'
import GreenButton from '../../utilityComponents/GreenButton'
import appStore from '../../assets/appStore.png'
import playStore from '../../assets/playStore.png'
import mobileCenter from '../../assets/mobileCenter.png'
import mobileLeft from '../../assets/mobileLeft.png'
import mobileRight from '../../assets/mobileRight.png'
import { useNavigate } from 'react-router-dom'

function Splash() {
  // useEffect(()=>{
    //   const inter = setTimeout(()=>{
      //   navigate('/code2redirect/signup')
      //   },2000)
      // },[])
      const navigate = useNavigate();
  const handleNavigate = (page)=>{
    navigate('/code2redirect/'+page)
  }

  return (
    <div className='green_web_background paddingVert8' >

      <div style={{ marginTop: 8, paddingBottom: 8, }} className='paddingHori50 borderBottom'>

        <div className='flexRowSpcBtn' >
          <div className='flexRowAlignCenter'>
            <img style={{ height: 32, width: 32 }} src={code2Circle} />
            <img style={{ marginLeft: 4 }} src={code2text} />
          </div>

          <div className='flexRowAlignCenter'>
            <GreenBorderButton text='Sign in' onPress={()=>handleNavigate('login')} />
            <div className='marginRight8' ></div>
            <GreenBorderButton text='Signup' onPress={()=>handleNavigate('signup')}  />
          </div>
        </div>
      </div>

      <div className='textsViewSplash' style={{display: 'flex', justifyContent: 'center', marginTop:'8%'}}>
        <div style={{}} >
          <div className='' style={{ textAlign: 'center'}}>
            <div className='largeText ' >Embrace an earth friendly</div>
          </div>
          <div className='centerContent ' style={{textAlign: 'center'}}>
            <div className='largeText ' >lifestyle: Be A</div>
            <div className='changemaker' >Changemaker! </div>
          </div>
        </div>
      </div>
      <div style={{display: 'flex', justifyContent: 'center', marginTop:'3%'}}>
        <div className='flexRowAlignCenter' >
          <img className='appStore' src={appStore} />
          <div style={{marginLeft:28}} ></div>
          <img className='appStore' src={playStore} />
        </div>
      </div>

      <div style={{position:'absolute', bottom:0,display:'flex',flexDirection:'row', justifyContent:'center', width:'100%'}} >
        <div>
          <img className='mobiles' style={{zIndex:1, marginRight:-65}} src={mobileLeft} />
          <img className='mobiles' style={{zIndex:2, position:'relative'}} src={mobileCenter} />
          <img className='mobiles' style={{zIndex:1, marginLeft:-65}} src={mobileRight} />
        </div>
      </div>


    </div>
  )
}

export default Splash