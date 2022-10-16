import SearchBar from "../../UI/utils/SearchBar";
import FormBar from "../../UI/utils/FormBar";
import Modal from "../../UI/utils/Modal"
import Backdrop from "../../UI/utils/Backdrop";
import Display from "./Display";
import "./NewRoom.css"
import { useState } from "react";

const Room = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [embededUrl, setEmbededUrl] = useState('')


    const openModal = () => {
        setModalIsOpen(true)
    }

    const closeModal = () => {
        setModalIsOpen(false)
    }
    
    const url = (url) => {
        setEmbededUrl(url)        
    }



    return(
        <div className="Room">
            <div className="search">
                <div className="searchContainer">
                    <SearchBar handleUrl={url}/>
                </div>
                <div className="formContainer"> 
                   <FormBar onClick={openModal}/>
                </div>
            </div>
            <div className="display">
                {modalIsOpen ? <Modal onClick={closeModal}/> : null}
                {modalIsOpen ? <Backdrop onClick={closeModal}/> : null}
                <Display sendUrl={embededUrl}/>
            </div>
        </div>  
    )
}

export default Room;