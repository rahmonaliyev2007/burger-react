import React, { useState } from 'react';
import { Menu, ShoppingCart } from 'lucide-react';
import '../App.css';
import NavbarMobile from './navmobile';
import { NavLink } from "react-router-dom";

export default function Navbar() {
    const [show, setShow] = useState(false);

    return (
        <nav className="w-full fixed top-0 bg-black z-20">
            <div className='flex justify-between items-center max-abu px-4 m-auto max1020:h-[67px]'>
                {/* <a href='./index.html' className=" bg-yashil px-6 uppercase rounded-[3px] text-[20px] text-white ">Street88</a> */}
                <NavLink to='/' className=" bg-yashil px-6 uppercase rounded-[3px] text-[20px] text-white ">Street88</NavLink>
                <ul className='flex justify-between items-center gap-2 max600:hidden'>
                    <li className='text-lg max1020:text-sm text-yashil font-medium  active:bg-yashil hover:text-white flex justify-center items-center gap-2'>
                        <NavLink to="/" className="p-4 hover:bg-yashil transition !duration-100 flex justify-center items-center gap-2">
                            Korzina
                            <div className='bg-white rounded-[50%] w-5 h-5 text-md max1020:text-sm text-yashil flex justify-center items-center'>0</div>

                        </NavLink>
                    </li>
                    <li className='text-lg max1020:text-sm text-yashil font-medium  active:bg-yashil hover:text-white transition !duration-100'>
                        <NavLink to="/Menu" className="p-5 hover:bg-yashil">
                            Меню
                        </NavLink>
                    </li>
                    <li className='text-lg max1020:text-sm text-yashil font-medium  active:bg-yashil hover:text-white transition !duration-100'>
                        <a href="#about" className="p-5 hover:bg-yashil transition-all !duration-100" >O нас</a>
                    </li>
                    <li className='text-lg max1020:text-sm text-yashil font-medium  active:bg-yashil hover:text-white transition !duration-100'>
                        <a href="#contact" className="p-5 hover:bg-yashil">Контакты</a>
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