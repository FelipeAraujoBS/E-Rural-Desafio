import { useState, useRef, useEffect } from 'react';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import ReplyIcon from '@mui/icons-material/Reply';


import "../../pages/Room/NewRoom.css"

const FormBar = (props) => {
    const [value, setValue] = useState('')
    const [url, setUrl] = useState('')
    const inputRef = useRef(null)

    const handleCopy = () => {
        setValue(inputRef.current.value)
    }
  
    const handleSubmit = (e) => {
        e.preventDefault()


        console.log(value)
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
        <form className="form" onSubmit={handleSubmit}>
            <input ref={inputRef} className="urlInput" type="text" value={url} readOnly/>
            <div className="buttonsContainer">
                <button className="copyButton"  
                title="Copiar url"
                onClick={handleCopy}
                >
                    <ContentCopyIcon style={{marginTop: "-35%"}} fontSize="small"/>
                </button>
                <button onClick={props.onClick} className="sendButton" title="Compartilhar url">
                    <ReplyIcon style={{marginTop: "-35%", marginLeft: "15%"}} fontSize="small"/>
                </button>
            </div>
        </form>
    )
}

export default FormBar;