import React, { useEffect , useState} from "react";
import ItemCount from "./ItemCount";
import ItemList from './ItemList'
import { getProductos } from '../FakeApi.js'

let catalogoStyle={
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
}




function ItemListContainer ({MENSAJE}){
    const [productos, setProductos] = useState([])

    useEffect(() => {
      getProductos
        .then(datos => Promise.resolve(datos))  
        .then(datos => {setProductos(datos)})


    }, [])
    

    return (<div style={catalogoStyle}>
            <h1 style={{marginBottom: 50+"px"}}>{MENSAJE}</h1>
            <ItemList Items={productos}/>
        </div>
    )
}


export default ItemListContainer;