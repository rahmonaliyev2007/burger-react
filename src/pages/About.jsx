import React from 'react'
import "../index.css"
import { useTranslation } from 'react-i18next';

function About() {
      const { t} = useTranslation();
  
  return (
    <section className=' about bg-aboutBG bg-cover bg-center w-full pt-10 pb-14' id='about'>
      <div className='max-abu'>
        <h2 className='text-yashil uppercase text-4xl max800:text-3xl max600:text-xl text-center'>{t('about_title')}</h2>
        <hr className='w-[20%] m-auto border-none bg-yashil h-[1px] mt-4 mb-11' />
        <p className='text-white max800:text-base max600:text-sm text-lg text-justify mb-6'>{t('about_des')}</p>
        <p className='text-white max800:text-base max600:text-sm text-lg text-justify'>{t('about_des2')}</p>
      </div>
    </section>
  )
}

export default About