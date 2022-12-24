// import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
// import MidSection from './MidSection'
// import Lowermid from './Lowermid'


// function Home() {
//   return (
//     <> 
//     <div className='home'>
//       <div className="banner">
//         <div className="banner-split">
//           <div className='banner-title'>
//             <h1>Get a pickup <br/> <element className="orange">Fast.</element></h1>
//             <div className='banner-p'>
//               <p>Finding a pickup truck has never been faster.<br/> Wheater you are moving out or moving cargo <br/> we gat you</p>
//             </div>
//             <div className="btn-wrap"><button className='banner-btn'>Get started  <FontAwesomeIcon className='icon' icon={faPaperPlane} /></button></div>
//           </div>
//         </div>
//         <div className='banner-img'>
//           <img  src="pickup02.jpg" alt=''/>
//           </div>
//       </div>
//     </div>
//     <MidSection/>
//     {/* <Lowermid/> */}
//     </>
//   )
// }

// export default Home


import React from 'react'
import "./Banner.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

function Banner() {
  return (
    <div className='banner'>
      <div className='banner-header'>
        <div className='banner-title'>
          <div className="main-title">
            <h1>Get a pickup <span>Fast,Easy & Affordable</span></h1>
          </div>
        </div>
        <div className='banner-image'>
          <img src='./pickup02.jpg'></img>
        </div>
      </div>
    </div>
  )
}

export default Banner