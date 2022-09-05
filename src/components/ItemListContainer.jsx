import React from 'react';
import { useEffect,useState } from "react"
import Itemlist from "./ItemList"

/*
    const ItemListContainer = () => {
    function onAdd(count){
        console.log(`Se han seleccionado ${count} productos`)
    }

    return (
    <div>
        <Counter stock={10} onAdd={onAdd}/>

    </div>
    )
}
*/

const productosIniciales = [
    {
        id :1,
        nombre: "Bloques Imantados",
        precio: 8000,
        imagen: "./public/../img/imanes.jpg"
    },
    {
        id :2,
        nombre: "Autito de madera",
        precio: 2500,
        imagen: "./public/../img/autito.jpg"
    },
    {
        id :3,
        nombre: "Juego de encastre",
        precio: 3000,
        imagen: "./public/../img/encastre.jpg"
    }
]
const ItemListContainer = () => {
const [cargando,setCargando]  = useState(true) 
    const [productos,setProductos]  = useState([]) 

    useEffect (()=>{
        const pedido = new Promise ((res)=>{
        setTimeout(()=>{
            res(productosIniciales)
        },2000)
        })
        pedido
        .then(()=>{
            console.log("Pedido Exitoso")
            setCargando(false)
            setProductos(productosIniciales)
            
        })
    },[])
    
    if(cargando){
        return(
            <p>Cargando...</p>
        )
    } else{
        return (
            <Itemlist productos={productos}/> 
        )
    }
}


export default ItemListContainer;
