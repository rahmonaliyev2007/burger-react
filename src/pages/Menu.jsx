import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom';

function Menu() {


    return (
        <section className='pt-16 bg-black'>
            <div id='goBro' className="max-abu">
                <div className='sticky top-[60px] bg-black mb-4 z-10'>
                    <h2  className="text-center text-yashil text-4xl max800:text-3xl max600:text-xl uppercase py-4 max800:py-5">
                        Меню <span className='text-base'>( Json Place Holder )</span>
                    </h2>
                    <ul className="flex gap-4">
                        <li><NavLink to="posts" className={({ isActive }) => isActive ? "text-yashil font-bold" : "text-white"}>Posts</NavLink></li>
                        <li><NavLink to="todos" className={({ isActive }) => isActive ? "text-yashil font-bold" : "text-white"}>Todos</NavLink></li>
                        <li><NavLink to="comments" className={({ isActive }) => isActive ? "text-yashil font-bold" : "text-white"}>Comments</NavLink></li>
                    </ul>
                </div>
                <Outlet />

                <a href="#goBro" className='text-blue-600 fixed right-10 bottom-10 text-[25px] underline '>Go to Top</a>
            </div>


        </section>
    );
}

export default Menu;