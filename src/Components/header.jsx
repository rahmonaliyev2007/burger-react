export function Header() {
    return (
        <header className="header w-full bg-slate-300 bg-heroBG bg-cover bg-center h-screen flex items-center">
            <div className="w-full max-abu mx-auto px-4 flex flex-col justify-center items-start">
                <h1 className="text-7xl max1020:text-5xl max600:text-4xl text-yashil font-extrabold uppercase leading-[84px]">Большой гамбургер</h1>
                <p className="text-yashil text-5xl max1020:text-4xl max600:text-3xl font-extralight ">говядина</p>
                <p className="text-white text-lg max1020:text-base max600:text-sm text-justify">Свежая хрустящая булочка, листики салата, маринованный огурец с луком и небольшая котлета, сдобренная майонезом и кетчупом, - таков классический портрет гамбургера, наиболее распространенной «быстрой» еды в США, от отравления которой ежедневно на больничных койках оказываются десятки тысяч американцев</p>
                <button className="bg-yashil text-6xl max1260:text-4xl max600:text-lg py-3 text-white px-[80px] mt-14 hover:bg-yashilhover hover:scale-105 font-thin transition duration-300">14 500</button>
            </div>
        </header>
    )
}