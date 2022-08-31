import {React, useState, useEffect} from 'react';

const item = [
       {id: 1, nombre: "Rompecabezas", precio: 500, stock: 10},
        {id: 2, nombre: "Autito de madera", precio: 2500, stock: 10},
        {id: 3, nombre: "Juego de encastre", precio: 500, stock: 10},

]

function consultarPromesa(confirmacion) {
    return new Promise ((res,rej) => {
        if(confirmacion) {
            res(item)
        } else {
            rej("Acceso denegado")
        }
})

}

const Item = () => {
    const [item, setItem] = useState([]);
    useEffect(() => {
        consultarPromesa(true)
        .then(data => {
        const itemJSX = data.map((item, indice) => {
            <div className="card" style={{width: '18rem'}}>
                <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{item.nombre}</h5>
                <p className="card-text">Precio: ${item.precio}</p>
                <p className="card-text">Stock: {item.stock}</p>
                <a href="#" className="btn btn-primary">Comprar</a>
            </div>
        </div>
        })
        setItem(itemJSX);
    })
}, []);

    return (
        <div className='row'>
            {item}
        </div>
    );
}

/*
const [cargando,setCargando]  = useState(true) 
const [item,setItem]  = useState([]) 

    useEffect (()=>{
        const compra = new Promise ((resolve, reject) => {
         setTimeout(() => {
            resolve(item);
         },2000);
        });

        */


export default Item
