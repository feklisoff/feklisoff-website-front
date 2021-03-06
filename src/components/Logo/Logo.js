import React from 'react'
import Tilt from 'react-parallax-tilt';
import './Logo.css'
import logo from './logo.png'

const Logo = ({onRouteChange}) => {
    return (
        <div className='fl w-5 ma4 mt2 pa4'>
            <Tilt className="Tilt br1 logo-1 pointer" style={{width:150, height:150}}>
                <div> <img alt='logo' src={logo} /></div>
            </Tilt>
        </div>
    )
}

export default Logo