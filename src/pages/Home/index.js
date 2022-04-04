import React, { useState, useEffect } from 'react'
import Card from '../../components/Lagu/Card';
import SearchBar from '../../components/Search/Search';
import banner from '../../banner.png'
import { getData } from '../../utils'
import './style.css'

const Home = () => {
    const [token, setToken] = useState("")
    const [results, setResults] = useState([])
    const [error, setError] = useState("")

    const validate = (query) => {
        if (token === "") {
            alert("Please login first!");
            return false
        }

        if (query === "") {
            setResults([])
            setError("")
            return false
        }

        return true
    }

    const search = async (query) => {
        if (!validate(query)) return
        try {
            const url = `https://api.spotify.com/v1/search?q=${query}&type=track`
            const response = await getData(url, token)
            
            if (response.tracks.items.length === 0) throw Error("Result not found")

            setError("")
            setResults(response.tracks.items)
        } catch (error) {
            setError(error.message);
        }
    }

    const login = () => {
        const callbackUrl = "http://localhost:3000/"
        const clientId = "088d0c7e4aa0454292b279ac6c7fb4d2"
        const scope = ["playlist-modify-private", "user-read-currently-playing"]
        const url = `https://accounts.spotify.com/en/authorize?response_type=token&client_id=${clientId}&scope=${encodeURIComponent(scope)}&redirect_uri=${encodeURIComponent(callbackUrl)}`

        window.location.replace(url);
    }

    const logout = () => {
        setToken("")
        window.location.replace("http://localhost:3000/");
    }

    useEffect(() => {
        const access_token = new URLSearchParams(window.location.hash).get('#access_token');
        setToken(access_token ?? "");
    }, [])

    return (
        <>
            <div className="navbar">
                <SearchBar onSearch={search}/>
                <div className='nav'>
                <button>
                    <p>Home</p>
                </button>
                <button>
                    <p>Your Library</p>
                </button>
                <button>
                    <p>Create Playlist</p>
                </button>
                <button>
                    <p>Liked Songs</p>
                </button>
                </div>
                { token === "" ? <button onClick={login}>Login</button> : <button onClick={logout}>Logout</button>}
            </div>
            <div className="container">
                { (results && error === "") && results.map((a) => 
                <Card 
                    key={a.id}
                    image={a.album.images[1].url} 
                    title={a.name} 
                    singer={a.artists[0].name}
                />) 
                }
                { (results.length === 0 && error === "") && 
                    <img src={banner} width="100%" height="100%" alt="" />
                }
            </div>
        </>
    )
}

export default Home