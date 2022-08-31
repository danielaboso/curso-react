import React from 'react';
import './App.css';
import Navbar from './NavBar.jsx';
import ItemListContainer from './ItemListContainer.jsx';
import Item from '../components/Item';


function App() {
    return (
        <div className="App">
            <Item />
            <ItemListContainer greeting="Hola, Bievenido"/>       
        <Navbar />
        </div>
    );
}

export default App;


