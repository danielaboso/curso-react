import React from 'react';
import Counter from './counter';

const ItemListContainer = () => {
    function onAdd(count){
        console.log(`Se han seleccionado ${count} productos`)
    }

    return (
    <div>
        <counter stock={5} onAdd={onAdd}/>

    </div>
    )
}
export default ItemListContainer;
