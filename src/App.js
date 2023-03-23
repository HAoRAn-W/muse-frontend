import './App.css';
import Header from "./component/Header";
import {useEffect, useState} from "react";
import api from './api/axios';
import Artwork from "./component/Artwork";
import Footer from "./component/Footer";
import Note from "./component/Note";

function App() {
    const [artwork, setArtwork] = useState({});
    useEffect(() => {
        api.get('met').then((response) => {
            setArtwork(response.data)
        })
    }, [])
    const handleClick = () => {
        api.get('met').then((response) => {
            setArtwork(response.data)
        })
    }
    return (
        <div className="App">
            <Header handleClick={handleClick}/>
            <Artwork artwork={artwork}/>
            <Note artwork={artwork}/>
            <Footer/>
        </div>
    );
}

export default App;
