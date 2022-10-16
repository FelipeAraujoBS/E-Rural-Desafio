import { useState } from 'react'
import "./Banner.css"
import ModalBanner from "./modalBanner/ModalBanner"
import Backdrop from '../../UI/utils/Backdrop'

const Banner = () => {
    const [bannerModalIsOpen, setBannerModalIsOpen] = useState(false)

    const openModal = () => {
        setBannerModalIsOpen(true)
    }
    const closeModal = () => {
        setBannerModalIsOpen(false)
    }

    return(
        <div className="bannerCard">
            <h2>Bem-vindo a esse App</h2>
            <div className="buttonContainer">
                <button onClick={openModal}>
                    Criar sua sala
                </button>
            </div>
            {bannerModalIsOpen ? <ModalBanner/> : null}
            {bannerModalIsOpen ? <Backdrop onClick={closeModal}/> : null}
        </div>
    )
}

export default Banner;