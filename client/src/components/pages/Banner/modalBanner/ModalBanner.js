import { Link } from 'react-router-dom'
import React from 'react'
import "./ModalBanner.css"

function ModalBanner() {
  return (
    <div>
       <div className='modalCard'>
            <Link to='/youtube-room'>
              <button>
                  Video do Youtube
              </button>
            </Link>
           <Link to="own-room/">
            <button>
                  Videos propios
              </button>
           </Link>
       </div>
    </div>
  )
}

export default ModalBanner