import React from 'react'

const ItemDetail = ({productDetail}) => {
    const {id, title, price, pictureURL, description} = productDetail;

  return (
    <div style={{width: 18+'rem'}}>
        <h1 className="card-title">{title}</h1>
        <img src={pictureURL} className="card-img-top" alt="..."/>
        <div className="card-body">
            <p className="card-text" style={{backgroundColor:'#FF4343', color:'white', borderRadius:5+'px'}}>${price}</p>
            <p>Stock: 0</p>
            <p>{description}</p>
        </div>
    </div>
  )
}

export default ItemDetail