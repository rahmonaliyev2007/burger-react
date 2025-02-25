import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import burgerImg from '../Components/Images/hotdog.png'
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from "../context/ThemeContext";
import { Edit, Trash2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';


function Hot_dog() {
  let [burgers, setBurgers] = useState([])
  const navigate = useNavigate();
  const { setCurrectCategory, theme } = useContext(ThemeContext);
  const { t } = useTranslation();




  useEffect(() => {
    axios.get('http://localhost:5200/hotdogs').then(res => setBurgers(res.data))
  }, [])

  const handleAddBurger = (id) => {
    navigate(`/add/${id}`);
  };

  const handleEditBurger = (id) => {
    navigate(`/edit/${id}`);
    setCurrectCategory('hotdogs');
  };


  const handleDeleteBurger = (id) => {
    axios.delete(`http://localhost:5200/hotdogs/${id}`)
      .then(() => {
        setBurgers((prevBurgers) => prevBurgers.filter(burger => burger.id !== id));
      })
      .catch(err => alert('siz hozircha faqat yangi qo\'shgan mahsulotlaringizni o\'chira olasiz'));
  };
  return (
    <>
      <div className='flex justify-between max-abu items-end'>
        <h2 className={`text-4xl ${theme === 'dark' ? 'text-white' : "text-black"}`}>{t('h')}</h2>
        <button className='p-4 bg-yashil text-white hover:bg-yashilhover' onClick={() => handleAddBurger('hotdogs')} >{t('add_h')} </button>
      </div>

      <div className='max-abu grid grid-cols-3 gap-x-24 max730:grid-cols-2 max1020:gap-10 max500:grid-cols-1 !pb-20'>
        {burgers.map((product) => {
          return (
            <div key={product.id} className=' max-w-[350px] card mt-9 max500:mt-4 cursor-pointer max500:flex max500:gap-4 max500:justify-between max500:items-center'>
              <div className='card-top relative min-w-32 rounded-2xl overflow-hidden'>
                <div className="card-img"><img src={burgerImg} alt="img burger" /></div>
                <div className='card-overlay max1020:text-base max500:text-xs text-center w-full h-full flex justify-center items-center absolute bg-yashilhover top-0 opacity-1 text-2xl text-white opacity-0 transition-all duration-300'>Добавить в корзину</div>
                <button className='bg-yashil max500:text-sm max1020:text-lg text-white flex justify-center items-center w-[60%] py-2 text-2xl absolute bottom-0 transition-all duration-300'>{product.price}$</button>
              </div>
              <div className="card-detail mt-4 mb-2 max730:mt-4">
                <h3 className=' abu-card-title text-yashil text-2xl max500:text-base max800:text-lg'>{product.name}</h3>
                <p className={`abu-card-description ${theme === 'dark' ? 'text-white' : 'text-black'} text-base max500:text-[10px] max1020:text-xs`}>{product.description}</p>
                <div className='flex justify-end gap-5'>
                  <i onClick={() => { handleEditBurger(product.id) }} className='text-yashil hover:scale-125'><Edit /></i>
                  <i onClick={() => { handleDeleteBurger(product.id) }} className='text-yashil hover:scale-125'><Trash2 /></i>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Hot_dog