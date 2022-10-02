// import { useEffect, useRef } from 'react'
// import gsap from 'gsap-trial'
// import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
// import LogoS from '../../../assets/images/logo-s.png'
import LogoS from './vikas.jpg'
import './index.scss'

const Logo = () => {
  
  return (
    <div className="logo-container" >
      <div className='my-pic'>
      <img
        className="solid-logo"
        src={LogoS}
        alt="JavaScript,  Developer"
      />
      </div>

      
    </div>
  )
}

export default Logo