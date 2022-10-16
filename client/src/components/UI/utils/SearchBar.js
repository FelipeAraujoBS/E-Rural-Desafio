import { IconButton, Paper } from '@mui/material' 
import { Search } from '@mui/icons-material'

import "./utils.css"
import { useState, useEffect } from 'react'

const SearchBar = (props) => {
    const [urlString, setUrlString] = useState('')
    const [videoUrl, setVideoUrl] = useState('')
    const [embededUrl, setEmbededUrl] = useState('')

    const handleChange = (e) => {
        setUrlString(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        setVideoUrl(urlString)
    }

    useEffect(() => {
        const watchToEmbedded = () => {
            let str = videoUrl;
            let res = str.split("=");
            let embeddedUrl = "https://www.youtube.com/embed/"+res[1];
           
            setEmbededUrl(embeddedUrl)
        }

        watchToEmbedded()
    }, [videoUrl])

    props.handleUrl(embededUrl)

    return(
        <Paper
        component='form'
        onSubmit={handleSubmit}
        sx={{
            borderRadius: 20, border: '1px solid #e3e3e3', pl: 2, boxShadow: 'none'
        }}
        >
            <input className='search-bar' 
            placeholder='url do video do Youtube'
            onChange={handleChange}
            type="url"
            />
            <IconButton 
            type='submit' 
            sx={{
                p: '10px',
                color: '#fd5'
            }}>
                <Search/>
            </IconButton>
        </Paper>
    )
}

export default SearchBar;