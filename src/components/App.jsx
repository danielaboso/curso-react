import React from 'react';
import './App.css';
import Navbar from './NavBar.jsx';
import ItemListContainer from './ItemListContainer.jsx';


function App() {
    return (
        <div className="App">
            <ItemListContainer greeting="Hola, Bievenido"/> 
        <Navbar />
        </div>
    );
}

export default App;


