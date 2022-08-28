import React from 'react';
import './App.css';
import Navbar from './Navbar.jsx';
import ItemListContainer from './ItemListContainer.jsx';
import { BiShoppingBag } from 'react-icons/bi';



function App() {
    return (
        <div className="App">
        <ItemListContainer/>
        <Navbar />
        <BiShoppingBag />
        </div>
    );
}

export default App;
