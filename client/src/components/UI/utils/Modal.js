import foto from "./../imgs/addUser.svg"
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import "./utils.css"
import { useState, useRef, useEffect } from 'react';

const Modal = (props) => {
    const [value, setValue] = useState('')
    const [url, setUrl] = useState('')
    const inputRef = useRef(null)

    const handleCopy = () => {
        setValue(inputRef.current.value)
    }
   
    useEffect(() => {
        const copyFunction = () => {
            navigator.clipboard.writeText(value)
        }

        copyFunction()
    }, [value])

    useEffect(() => {
        const getUrl = () => {
            setUrl(window.location.href)
        }

        getUrl()
    }, [url])


    return(
        <div className="cardModal">
            <div className="titleModal">
                <h2>Chame os seus amigos para assistir!</h2>
            </div>
            <div className="middleModal">
                <div className="contentModal">
                    <div className="imgContainer">
                        <img className="img" src={foto} alt="user"/>
                    </div>
                    <div className="inputContainer">
                        <h3>Envie o seguinte link:</h3>
                        <input ref={inputRef} type="text" value={url} readOnly/>
                            <div className="buttons-Container">
                                <button className="copy-button" 
                                        type='submit' 
                                        title="Copiar url"
                                        onClick={handleCopy}
                                        >
                                        Copiar
                                </button>
                            </div>  
                    </div>  
                </div>
               <div className="inputIcons">
                    <a className="icon" href="https://www.facebook.com/messages/" rel="noreferrer" target="_blank"><FacebookIcon fontSize="large"/></a>
                    <a className="icon" href="https://web.whatsapp.com/" rel="noreferrer" target="_blank"><WhatsAppIcon fontSize="large"/></a>
               </div>
            </div>
            <div className='closeModal'>
                <button onClick={props.onClick} >Fechar</button>
            </div>
        </div>
    )
}

export default Modal;