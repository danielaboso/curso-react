import React from 'react';
import './App.css';
import Navbar from './NavBar.jsx';
import ItemListContainer from './ItemListContainer.jsx';
import Item from '../components/Item';


function App() {
    return (
        <div className="App">
        <Navbar />
        <main/>
        <ItemListContainer/>
        </div>
    );
}

export default App;


