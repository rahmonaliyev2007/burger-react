import React from 'react';
import '../App.css';
import { X } from 'lucide-react';

export default function NavbarMobile({ setShow }) { 
    return (
        <ul className="fixed hidden top-0 right-0 w-[60%] h-screen bg-black z-30 max600:flex flex-col justify-start items-center gap-2 transition-transform duration-300">
            <li className='w-full flex justify-end text-[28px] text-white font-medium p-5 active:bg-yashil hover:text-yashil transition duration-300'>
                <X className='cursor-pointer' onClick={() => setShow(false)} />
            </li>
            <li className='w-full text-center text-[18px] text-yashil font-medium hover:bg-yashil p-5 active:bg-yashil hover:text-white transition duration-300'>
                <a href="./index.html">Меню</a>
            </li>
            <li className='w-full text-center text-[18px] text-yashil font-medium hover:bg-yashil p-5 active:bg-yashil hover:text-white transition duration-300'>
                <a href="./index.html">O нас</a>
            </li>
            <li className='w-full text-center text-[18px] text-yashil font-medium hover:bg-yashil p-5 active:bg-yashil hover:text-white transition duration-300'>
                <a href="./index.html">Контакты</a>
            </li>
        </ul>
    );
}