import React, { useContext, useEffect, useState } from 'react';
import { Header } from '../Components/header';
import { ThemeContext } from "../context/ThemeContext";
import { NavLink, Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


function Home() {
  const { theme } = useContext(ThemeContext);
      const {t} = useTranslation();
  

  let [products, showProducts] = useState([]);

  console.log(products);
  

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => showProducts(json));
  }, []);

  return (
    <div>
      <Header />
      <div className={` border-b border-t border-y-yashil top-[60px] max1020:top-[67px] sticky w-full z-10 py-4 ${theme === 'dark' ? 'bg-black' : 'bg-gray-200'}`}>
        <ul className='flex gap-10 max600:gap-5 max-abu max600:mb-2 max500:mb-1'>
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? "text-yashil" : "text-gray-400"}>
              {t('b')}
            </NavLink>
          </li>
          <li>
            <NavLink to="/hotdog" className={({ isActive }) => isActive ? "text-yashil" : "text-gray-400"}>
            {t('h')}
            </NavLink>
          </li>
          <li>
            <NavLink to="/pizza" className={({ isActive }) => isActive ? "text-yashil" : "text-gray-400"}>
            {t('p')}
            </NavLink>
          </li>
          <li>
            <NavLink to="/soda" className={({ isActive }) => isActive ? "text-yashil" : "text-gray-400"}>
            {t('n')}
            </NavLink>
          </li>
          <li>
            <NavLink to="/juice" className={({ isActive }) => isActive ? "text-yashil" : "text-gray-400"}>
            {t('j')}
            </NavLink>
          </li>
        </ul>
      </div>
      <div className={`${theme === 'dark' ? 'bg-black' : 'bg-gray-200'}`}>
        <Outlet />
      </div>
    </div>
  );
}

export default Home;
