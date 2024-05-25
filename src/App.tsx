import React from 'react';
import './styles/normalize.css';
import './styles/App.css';
import './styles/index.scss';
import NavBar from './components/NavBar'
import Gallery from './sections/Gallery'
import Offers from './sections/Offers'
import Addresses from "./sections/Addresses";
import Reviews from "./sections/Reviews";
import Videosection from './sections/Videosection';
import YandexMap from './components/addresses-section/YaMaps';
function App() {
  return (
    <div className="App">
        <NavBar/>
        <Gallery/>
        <Videosection/> 
        <Offers/>
        <Addresses/>
        <Reviews/>
        <YandexMap/>
    </div>
  );
}

export default App;
