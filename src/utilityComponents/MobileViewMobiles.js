import React from 'react'
import appStore from '../assets/appStore.png'
import playStore from '../assets/playStore.png'
import mobile1 from '../assets/mobile1.png'
import mobile2 from '../assets/mobile2.png'
import mobile3 from '../assets/mobile3.png'
import './mobileViewMobiles.css'
import NavbarMobileView from '../screens/navbar/NavbarMobileView'

function MobileViewMobiles({page=''}) {
  return (
    <div className='showMobiles' >
        <div className='textsViewMob' style={{display: 'flex', justifyContent: 'center', marginTop:'4%'}}>
        <div style={{}} >
          <div className='' style={{ textAlign: 'center'}}>
            <div className='largeTextMob ' >Embrace an earth friendly</div>
          </div>
          <div className='centerContentMob ' style={{textAlign: 'center'}}>
            <div className='largeTextMob' >lifestyle: Be A</div>
            <div className='changemakerMob' >Changemaker! </div>
          </div>
        </div>
      </div>
      <div style={{display: 'flex', justifyContent: 'center', marginTop:'3%'}}>
        <div className='flexRowAlignCenter' >
          <img className='appStoreMob' src={appStore} />
          <div style={{marginLeft:28}} ></div>
          <img className='appStoreMob' src={playStore} />
        </div>
      </div>

      <div className='phonesMob' style={{display:'flex',flexDirection:'row', justifyContent:'center', width:'100%'}} >
        <div>
        <img className='mobilesMob' style={{zIndex:1, marginRight:-65}} src={mobile1} />
          <img className='mobilesMob largeMob' style={{zIndex:2, position:'relative'}} src={mobile2} />
          <img className='mobilesMob' style={{zIndex:1, marginLeft:-65}} src={mobile3} />
        </div>
      </div>
      <NavbarMobileView page={page}/>
    </div>
  )
}

export default MobileViewMobiles