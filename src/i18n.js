import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    resources: {
      en: {
        translation: {
          title: "Big Hamburger",
          subtitle: "beef",
          sub_title: `A fresh crispy bun, lettuce, pickled cucumber with onions and a small cutlet flavored with mayonnaise and ketchup - this is the classic portrait of a hamburger, the most common “fast” food in the United States, the poisoning of which puts tens of thousands of Americans in hospital beds every day.`,
          b: `Hamburgers`,
          h: `HotDogs`,
          p: `Pizzas`,
          n: 'Soda',
          j: `Juice`,
          about_title: `Unique recipe`,
          about_des: `A hamburger is a type of sandwich consisting of a fried minced patty served inside a cut round bun. It is usually supplemented with a variety of seasonings, for example, lettuce, ketchup and mayonnaise, slices of pickled cucumber, tomato or zucchini, raw or fried onions.`,
          about_des2: `As the most common fast food in the United States, the hamburger is far from American in origin. Scientists attribute its authorship to the Scythian nomads, who placed fried meat between two slices of bread. And the “king” of fast food came to the New World together with German immigrants: he was named, by the way, in honor of Hamburg, the second largest city in Germany. The official date of sale of the first hamburger in the United States is considered to be July 27, 1900 - on this day, a grocery store from New Haven offered city residents to buy a patty seasoned with ketchup, “sandwiched” between two pieces of bun. Initially, such food was the prerogative of the poor, but soon “fast food” establishments began to open throughout the country, in which, Not only the food was fast, but also the service and change of clients. These catering establishments set a course for prompt children's nutrition - and for the always busy working class at that time, they became the best solution to the problem of where and what to quickly feed children.`,
          footer_title: `Our branches`,
          nav1: `Basket`,
          nav2: `Menu`,
          nav3: `About Us`,
          nav4: `Contact`,
          add_b: `Add New Burger`,
          add_h: `Add New HotDog`,
          add_p: `Add New Pizza`,
          add_n: `Add New Soda`,
          add_j: `Add New Juice`,
          add: `Add New Product`,
          edit: `Edit Exist Product`,
          add_cart : `Add to Cart`,
        },
      },
      uz: {
        translation: {
          title: "Katta Burger",
          subtitle: "mol go\'shtli",
          sub_title: `Yangi pishirilgan bulochka, marul, piyoz bilan tuzlangan bodring va mayonez va ketchup bilan ta'mlangan mayda kotlet - bu gamburgerning klassik portreti, Qo'shma Shtatlardagi eng keng tarqalgan "tezkor" taom, uning zaharlanishi har kuni o'n minglab amerikaliklarni kasalxonaga yotqizadi.`,
          b: `Burgerlar`,
          h: `HotDoglar`,
          p: `Pitsalar`,
          n: 'Gazli ichimliklar',
          j: `Soklar`,
          about_title: `Yagona retsept`,
          about_des: `Gamburger - bu kesilgan dumaloq bulochka ichida pishirilgan qovurilgan qiyma pattidan tashkil topgan sendvich turi. Odatda turli xil ziravorlar, masalan, marul, ketchup va mayonez, tuzlangan bodring, pomidor yoki qovoq, xom yoki qovurilgan piyoz bilan to'ldiriladi.`,
          about_des2: `Qo'shma Shtatlardagi eng keng tarqalgan tez ovqat sifatida, gamburger kelib chiqishi Amerikadan uzoqdir. Olimlar uning muallifligini ikki bo'lak non orasiga qovurilgan go'sht qo'ygan skif ko'chmanchilariga bog'lashadi. Va tez ovqatlanishning "qiroli" nemis muhojirlari bilan birga Yangi Dunyoga keldi: u, aytmoqchi, Germaniyaning ikkinchi yirik shahri Gamburg sharafiga nomlangan. Amerika Qo'shma Shtatlarida birinchi gamburgerning rasmiy sotilish sanasi 1900 yil 27 iyul deb hisoblanadi - shu kuni Nyu-Xeyven shahridagi oziq-ovqat do'koni shahar aholisiga ketchup bilan pishirilgan, ikki bo'lak bulochka orasida "sendvichlangan" patti sotib olishni taklif qildi. Dastlab, bunday oziq-ovqat kambag'allarning huquqi edi, ammo tez orada butun mamlakat bo'ylab "tez ovqatlanish" korxonalari ochila boshladi. Nafaqat oziq-ovqat tez, balki mijozlarga xizmat ko'rsatish va o'zgarish ham edi. Ushbu umumiy ovqatlanish korxonalari bolalarning tez ovqatlanishini yo'lga qo'ydi - va o'sha paytda doimo band bo'lgan ishchilar sinfi uchun ular bolalarni qayerda va nima bilan tez ovqatlantirish muammosining eng yaxshi yechimiga aylandi. `,
          footer_title: `Bizning filiallarimiz`,
          nav1: `Savat`,
          nav2: `Menyu`,
          nav3: `Biz haqimizda`,
          nav4: `Kontaktlar`,
          add_b: `Yangi Burger qo'shish`,
          add_h: `Yangi HotDog qo'shish`,
          add_p: `Yangi Pizza qo'shish`,
          add_n: `Yangi Gazli ichimlik qo'shish`,
          add_j: `Yangi Sok qo'shish`,
          add: `Yangi Mahsulot qo'shish`,
          edit: `Eski Mahsulotni Tahrirlash`,
          add_cart : `Savatga Qo'shish`

        },
      },
      ru: {
        translation: { 
          title: 'Большой гамбургер',
          subtitle: 'говядина',
          sub_title: 'Свежая хрустящая булочка, листики салата, маринованный огурец с луком и небольшая котлета, сдобренная майонезом и кетчупом, - таков классический портрет гамбургера, наиболее распространенной «быстрой» еды в США, от отравления которой ежедневно на больничных койках оказываются десятки тысяч американцев',
          b: `Гамбургеры`,
          h: `Хот-Доги`,
          p: `Пиццы`,
          n: 'Газировка',
          j: `Сок`,
          about_title: `Уникальный рецепт`,
          about_des: `Гамбургер – это разновидность бутерброда, состоящего из жареной рубленой котлеты, подаваемой внутри разрезанной круглой булочки. Обычно он дополняется различными приправами, например, салатом, кетчупом и майонезом, ломтиками маринованного огурца, помидора или кабачка, сырого или жареного лука.`,
          footer_title: `Наши филиалы`,
          nav1: `Корзина`,
          nav2: `Меню`,
          nav3: `О нас`,
          nav4: `Контакты`,
          add_b: `Добавить новый бургер`,
          add_h: `Добавить новый хот-дог`,
          add_p: `Добавить новую пиццу`,
          add_n: `Добавить новую газировку`,
          add_j: `Добавить новый сок`,
          add: `Добавить новый продукт`,
          edit: `Редактировать существующий продукт`,
          add_cart: `Добавить в корзину`,
        }
      }
    },
  });

export default i18n;