import React, {useState,useEffect} from 'react' 
import ItemDetail from './ItemDetail'
import { getProductos } from '../FakeApi.js'

const ItemDetailContainer = () => {
    const [productDetail, setProductDetail] = useState([])

    useEffect(() => {
      getProductos
        .then(datos => Promise.resolve(datos))  
        .then(datos => {setProductDetail(datos.find(prod => prod.id === 2))})
    }, [])

  return (
    <div className= 'd-flex justify-content-center'>
      <ItemDetail productDetail = {productDetail}/>
    </div>
  )
}

export default ItemDetailContainer

