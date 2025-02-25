import React, { useState, useContext } from 'react';
import { Menu, Moon, ShoppingCart, Sun } from 'lucide-react';
import '../App.css';
import NavbarMobile from './navmobile';
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import { useTranslation } from 'react-i18next';

export default function Navbar() {
    const [show, setShow] = useState(false);
    const { theme, toggleTheme } = useContext(ThemeContext);
    const { t, i18n } = useTranslation();


    return (
        <nav className={`w-full fixed top-0 ${theme === 'dark' ? 'bg-black' : 'bg-gray-200'} z-20`}>
            <div className='flex justify-between items-center max-abu px-4 m-auto max1020:h-[67px]'>
                <NavLink to='/' className=" bg-yashil px-6 uppercase rounded-[3px] text-[20px] text-white ">Street88</NavLink>
                <ul className='flex justify-between items-center gap-2 max600:hidden'>
                    <li className='text-lg max1020:text-sm text-yashil font-medium hover:text-white flex justify-center items-center gap-2'>
                        <NavLink to="/" className="p-4 hover:bg-yashil transition !duration-100 flex justify-center items-center gap-2">
                            {t('nav1')}
                            <div className='bg-white rounded-[50%] w-5 h-5 text-md max1020:text-sm text-yashil flex justify-center items-center'>0</div>

                        </NavLink>
                    </li>
                    <li className='text-lg max1020:text-sm text-yashil font-medium  active:bg-yashil hover:text-white transition !duration-100'>
                        <NavLink to="/Menu/Posts" className="p-5 hover:bg-yashil">
                            {t('nav2')}
                        </NavLink>
                    </li>
                    <li className='text-lg max1020:text-sm text-yashil font-medium  active:bg-yashil hover:text-white transition !duration-100'>
                        <a href="#about" className="p-5 hover:bg-yashil transition-all !duration-100" >{t('nav3')}</a>
                    </li>
                    <li className='text-lg max1020:text-sm text-yashil font-medium  active:bg-yashil hover:text-white transition !duration-100'>
                        <a href="#contact" className="p-5 hover:bg-yashil">{t('nav4')}</a>
                    </li>
                    <li className='text-lg max1020:text-sm text-yashil font-medium  active:bg-yashil hover:text-white transition !duration-100'>
                        <button className={` transition-none p-4 pr-0 text-yashil ${theme === 'dark' ? 'hover:text-white' : 'hover:text-black'}`} onClick={toggleTheme}>{theme === 'dark' ? <Moon /> : <Sun />}</button>
                    </li>
                    <li className='text-lg max1020:text-sm text-yashil font-medium  active:bg-yashil hover:text-white transition !duration-100'>
                        <button className={` ${theme === 'dark' ? 'hover:text-white' : 'hover:text-black'} p-4 pr-0 text-yashil`} onClick={() => i18n.changeLanguage('uz')}>Uz</button>
                        <button className={` ${theme === 'dark' ? 'hover:text-white' : 'hover:text-black'} p-4 pr-0 text-yashil`} onClick={() => i18n.changeLanguage('en')}>En</button>
                        <button className={` ${theme === 'dark' ? 'hover:text-white' : 'hover:text-black'} p-4 pr-0 text-yashil`} onClick={() => i18n.changeLanguage('ru')}>Ru</button>
                    </li>

                </ul>
                <div className="navicons hidden max600:flex items-center gap-5">
                    <ShoppingCart className='text-yashil text-lg cursor-pointer' />
                    <Menu className='text-yashil text-lg cursor-pointer' onClick={() => setShow(true)} />
                </div>
            </div>
            {show && <NavbarMobile setShow={setShow} />}
        </nav>
    );
}