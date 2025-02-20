import { NavLink } from "react-router-dom";

export function Footer() {
    return (
        <footer className="bg-black" id="contact">
            <h2 className="text-center text-yashil text-4xl max800:text-3xl max600:text-xl uppercase py-11 max800:py-5">Наши филиалы</h2>
            <iframe title="Map" className="w-full h-[50vh]"
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d24005.81444010603!2d69.32823293786622!3d41.227723631435886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1739454355041!5m2!1sru!2s"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="footer-bottom py-11">
                <nav className=" w-full ">
                    <div className='flex justify-between items-center max-abu px-4 m-auto'>
                        <NavLink href='/' className=" bg-yashil px-6 uppercase rounded-[3px] text-[20px] text-white ">Street88</NavLink>
                        <a href="tel:+998909807723" className="text-yashil text-2xl max800:text-xl max600:text-sm">+998 90 980 77 23</a>
                    </div>
                </nav>
                <ul className="flex items-center justify-center gap-12 max800:gap-5 max600:gap-3 max600:grid max600:grid-cols-3 pb-8 pt-14 text-white ">
                    <li className="max600:text-center"><a className="text-base hover:text-yashil font-medium max800:text-xs max600:text-center" href="./index.html">Меню</a></li>
                    <li className="max600:text-center"><a className="text-base hover:text-yashil font-medium max800:text-xs max600:text-center" href="./index.html">О нас</a></li>
                    <li className="max600:text-center"><a className="text-base hover:text-yashil font-medium max800:text-xs max600:text-center" href="./index.html">Контакты</a></li>
                    <li className="max600:text-center"><a className="text-base hover:text-yashil font-medium max800:text-xs max600:text-center" href="./index.html">Instagram</a></li>
                    <li className="max600:text-center"><a className="text-base hover:text-yashil font-medium max800:text-xs max600:text-center" href="./index.html">Facebook</a></li>
                    <li className="max600:text-center"><a className="text-base hover:text-yashil font-medium max800:text-xs max600:text-center" href="./index.html">Telegram Bot</a></li>
                </ul>
                <p className="text-base max800:text-xs text-gray-500 text-center font-thin">Сайт разработан в целях обучения © PROWEB 2019</p>
            </div>
        </footer>
    )
}