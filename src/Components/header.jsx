import React from 'react';
import { useTranslation } from 'react-i18next';

export function Header() {
    const { t, i18n } = useTranslation();
    return (
        <header className="header w-full bg-slate-300 bg-heroBG bg-cover bg-center h-screen flex items-center">
            <div className="w-full max-abu mx-auto px-4 flex flex-col justify-center items-start">
                <h1 className="text-7xl max1020:text-5xl max600:text-4xl text-yashil font-extrabold uppercase leading-[84px]">{t('title')}</h1>
                <p className="text-yashil text-5xl max1020:text-4xl max600:text-3xl font-extralight ">{t('subtitle')}</p>
                <p className="text-white text-lg max1020:text-base max600:text-sm text-justify">{t('sub_title')}</p>
                <button className="bg-yashil text-6xl max1260:text-4xl max600:text-lg py-3 text-white px-[80px] mt-14 hover:bg-yashilhover hover:scale-105 font-thin transition duration-300">14 500</button>
            </div>
        </header>
    )
}