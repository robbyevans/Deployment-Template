import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import MidSection from './MidSection'


function Home() {
  return (
    <> 
    <div className='home'>
      <div className="banner">
        <div className='banner-title'>
          <h1>Get a pickup <br/> <element className="orange">Fast.</element></h1>
          <div className='banner-p'>
            <p>Finding a pickup truck has never been faster.<br/> Wheater you are moving out or moving cargo <br/> we gat you</p>
          </div>
          <button className='banner-btn'>Get started  <FontAwesomeIcon className='icon' icon={faPaperPlane} /></button>
        </div>
        <div className='banner-img'>
          <img src="Wavybuddies.png" alt=''/>
          </div>
      </div>
    </div>
    <MidSection/>
    </>
  )
}

export default Home