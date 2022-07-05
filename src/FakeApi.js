import UNO from './images/items/UNO.jpg'
import DOS from './images/items/DOS.jpg'
import TRES from './images/items/TRES.jpg'
import CUATRO from './images/items/CUATRO.jpg'


const listaProductos=[
    {
        id:1,
        title: 'Producto uno',
        price:6800,
        pictureURL:UNO,
        description: 'lorem ipsum'
    },
    {
        id:2,
        title: 'Producto 2',
        price:6200,
        pictureURL:DOS,
        description: 'lorem ipsum'
    },
    {
        id:3,
        title: 'Producto 3',
        price:9000,
        pictureURL:TRES,
        description:'lorem ipsum'
    },
    {
        id:4,
        title: 'Producto 4',
        price:7000,
        pictureURL:CUATRO,
        description:'lorem ipsum.'
    }
    
]

export const getProductos = new Promise((resolve, reject)=>{
    setTimeout(() =>{
        resolve(listaProductos)
    },2000);
  });