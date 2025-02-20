import React, { useEffect, useState } from 'react'
import { Header } from '../Components/header'


function Home() {

  let [products, showProducts] = useState([]);
  let [mapLimit, setMapLimit] = useState(3)
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => showProducts(json));
  }, []);
  return (
    <div>
      <Header/>
      <main className='w-full bg-black py-12 max600:py-6' id='menu'>
  <div className='top-[60px] max1020:top-[67px] sticky w-full z-10 bg-black'>
    <ul className='flex gap-10 max600:gap-5 max-abu max600:mb-2 max500:mb-1'>
      <li className='text-gray-400 max600:text-xs hover:text-yashil menu-li-active'><a href="#menu">Гамбургеры </a></li>
      <li className='text-gray-400 max600:text-xs hover:text-yashil'><a href="#menu">Хот доги</a></li>
      <li className='text-gray-400 max600:text-xs hover:text-yashil'><a href="#menu">Пицца</a></li>
      <li className='text-gray-400 max600:text-xs hover:text-yashil'><a href="#menu">Напитки</a></li>
      <li className='text-gray-400 max600:text-xs hover:text-yashil'><a href="#menu">Соки</a></li>
    </ul>
  </div>
  <div className='max-abu grid grid-cols-3 gap-24 max730:grid-cols-2 max1020:gap-10 max500:grid-cols-1'>
    
    {products.slice(0, mapLimit).map((product)=>{
      return (
        <div key={product.id} className=' max-w-[350px] card mt-9 max500:mt-4 cursor-pointer max500:flex max500:gap-4 max500:justify-between max500:items-center'>
      <div className='card-top relative min-w-32'>
        <div className="card-img"><img src={product.image} alt="img burger" /></div>
        <div className='card-overlay max1020:text-base max500:text-xs text-center w-full h-full flex justify-center items-center absolute bg-yashilhover top-0 opacity-1 text-2xl text-white opacity-0 transition-all duration-300'>Добавить в корзину</div>
        <button className='bg-yashil max500:text-sm max1020:text-lg text-white flex justify-center items-center w-[60%] py-2 text-2xl absolute bottom-0 transition-all duration-300'>{product.price}$</button>
      </div>
      <div className="card-detail mt-9 mb-2 max730:mt-4">
        <h3 className=' abu-card-title text-yashil text-2xl max500:text-base max800:text-lg'>{product.title}</h3>
        <p className=' abu-card-description text-white text-base max500:text-[10px] max1020:text-xs'>{product.description}</p>
      </div>
    </div>
          )
    })}
      
    
    
  </div>
    <button className='bg-yashil text-white rounded-sm px-12 py-3 m-auto block hover:bg-yashilhover mt-10 text-lg' onClick={() => {setMapLimit(mapLimit + 3)}}>See More 3</button>
</main>

    </div>
  )
}

export default Home