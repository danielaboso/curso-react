import React from 'react';
import './App.css';
import Navbar from './Navbar';
import ItemListContainer from './ItemListContainer';
import { BiShoppingBag } from 'react-icons/bi';


function App() {
    return (
        <div className="App">
            <h1>React</h1>
        <Navbar />
        <ItemListContainer saludo='Hola, Bienvenidos'/> 
        <BiShoppingBag />
        </div>
    );
}

export default App;
