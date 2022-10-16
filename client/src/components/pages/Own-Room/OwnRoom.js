import Modal from '../../UI/utils/Modal'
import Backdrop from '../../UI/utils/Backdrop'
import FormBar from '../../UI/utils/FormBar'
import React from 'react'
// import video from "../../UI/imgs/video.mp4"
import "./OwnRoom.css"
import { useState } from 'react'
import Pills from '../../UI/utils/Pills'


function OwnRoom() {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true)
    }
    const closeModal = () => {
        setModalIsOpen(false)
    }

  return (
    <div>
        <div className="OwRoom">
            <div className='search upload'>
                <div className="urlContainer"> 
                   <FormBar onClick={openModal}/>
                </div>
                <div>
                    {modalIsOpen ? <Modal onClick={closeModal}/> : null}
                    {modalIsOpen ? <Backdrop onClick={closeModal}/> : null}
                    <Pills/>
                </div>
            </div>
        </div>  
    </div>
  )
}

export default OwnRoom