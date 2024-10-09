import { BsPhone } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { SiMetrodeparis } from "react-icons/si";
import { SiVk } from "react-icons/si";
import { Container } from "../../utils";
import { Instagram, Youtube, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="py-[50px]">
      <Container>
        <div className="flex flex-col md:flex-row md:flex-wrap gap-10 justify-center  items-center md:items-start md:justify-between">

          <div className="hidden md:flex flex-col gap-2">
            <h2 className="text-[14px] leading-[20px] tracking-[6%] text-[#221A25]">
              одежда
            </h2>
            <span className="text-[14px] font-normal leading-[30px] text-[#221A2599]">
              Детские брюки
            </span>
            <span className="text-[14px] font-normal leading-[30px] text-[#221A2599]">
              Детские комбинезоны
            </span>
            <span className="text-[14px] font-normal leading-[30px] text-[#221A2599]">
              Детские комплекты
            </span>
            <span className="text-[14px] font-normal leading-[30px] text-[#221A2599]">
              Детские конверты
            </span>
            <span className="text-[14px] font-normal leading-[30px] text-[#221A2599]">
              Детские купальники, плавки
            </span>
            <span className="text-[14px] font-normal leading-[30px] text-[#221A2599]">
              Детские куртки
            </span>
            <span className="text-[14px] font-normal leading-[30px] text-[#221A2599]">
              Мамам и папам
            </span>
            <span className="text-[14px] font-normal leading-[30px] text-[#221A2599]">
              Детские дождевики
            </span>
            <span className="text-[14px] font-normal leading-[30px] text-[#221A2599]">
              Детские пальто
            </span>
            <span className="text-[14px] font-normal leading-[30px] text-[#221A2599]">
              Детские платья, юбки
            </span>
            <span className="text-[14px] font-normal leading-[30px] text-[#221A2599]">
              Детские полукомбинезоны
            </span>
            <span className="text-[14px] font-normal leading-[30px] text-[#221A2599]">
              Детский софтшелл
            </span>
            <span className="text-[14px] font-normal leading-[30px] text-[#221A2599]">
              Детский флис
            </span>
            <span className="text-[14px] font-normal leading-[30px] text-[#221A2599]">
              Детские футболки, толстовки
            </span>
            <span className="text-[14px] font-normal leading-[30px] text-[#221A2599]">
              Школьная форма
            </span>
            <span className="text-[14px] font-normal leading-[30px] text-[#221A2599]">
              Детские шорты, брюки
            </span>
          </div>
          <div className="hidden md:flex flex-col gap-2">
            <h2 className="text-[14px] leading-[20px] tracking-[6%] text-[#221A25]">
              обувь
            </h2>
            <span className="text-[14px] font-normal leading-[30px] text-[#221A2599]">
              Детские ботинки
            </span>
            <span className="text-[14px] font-normal leading-[30px] text-[#221A2599]">
              Детские кеды
            </span>
            <span className="text-[14px] font-normal leading-[30px] text-[#221A2599]">
              Детские кроссовки
            </span>
            <span className="text-[14px] font-normal leading-[30px] text-[#221A2599]">
              Детские мокасины
            </span>
            <span className="text-[14px] font-normal leading-[30px] text-[#221A2599]">
              Обувь для взрослых
            </span>
            <span className="text-[14px] font-normal leading-[30px] text-[#221A2599]">
              Детские резиновые сапоги
            </span>
            <span className="text-[14px] font-normal leading-[30px] text-[#221A2599]">
              Детские сабо
            </span>
            <span className="text-[14px] font-normal leading-[30px] text-[#221A2599]">
              Детские сандалии
            </span>
            <span className="text-[14px] font-normal leading-[30px] text-[#221A2599]">
              Детские сапоги
            </span>
            <span className="text-[14px] font-normal leading-[30px] text-[#221A2599]">
              Детские сноубутсы
            </span>
            <span className="text-[14px] font-normal leading-[30px] text-[#221A2599]">
              Детские тапочки
            </span>
            <span className="text-[14px] font-normal leading-[30px] text-[#221A2599]">
              Детские туфли
            </span>
            <span className="text-[14px] font-normal leading-[30px] text-[#221A2599]">
              Школьная обувь
            </span>
            <span className="text-[14px] font-normal leading-[30px] text-[#221A2599]">
              Детские шлепанцы
            </span>
          </div>
          <div className="hidden md:flex flex-col gap-2">
            <h2 className="text-[14px] leading-[20px] tracking-[6%] text-[#221A25]">
              аксессуары
            </h2>
            <span className="text-[14px] font-normal leading-[30px] text-[#221A2599]">
              Детские зонты
            </span>
            <span className="text-[14px] font-normal leading-[30px] text-[#221A2599]">
              Детские игрушки
            </span>
            <span className="text-[14px] font-normal leading-[30px] text-[#221A2599]">
              Маски и антисептики
            </span>
            <span className="text-[14px] font-normal leading-[30px] text-[#221A2599]">
              Детское нижнее белье
            </span>
            <span className="text-[14px] font-normal leading-[30px] text-[#221A2599]">
              Детские очки
            </span>
            <span className="text-[14px] font-normal leading-[30px] text-[#221A2599]">
              Детские панамы, кепки
            </span>
            <span className="text-[14px] font-normal leading-[30px] text-[#221A2599]">
              Детские пинетки
            </span>
            <span className="text-[14px] font-normal leading-[30px] text-[#221A2599]">
              Подарки
            </span>
            <span className="text-[14px] font-normal leading-[30px] text-[#221A2599]">
              Детские рукавицы
            </span>
            <span className="text-[14px] font-normal leading-[30px] text-[#221A2599]">
              Детские рюкзаки и сумки
            </span>
            <span className="text-[14px] font-normal leading-[30px] text-[#221A2599]">
              Детское термобелье
            </span>
            <span className="text-[14px] font-normal leading-[30px] text-[#221A2599]">
              Детские шапки
            </span>
            <span className="text-[14px] font-normal leading-[30px] text-[#221A2599]">
              Детские шарфы, манишки
            </span>
          </div>
          <div className="md:flex w-full md:w-auto md:flex-col gap-2">

            <h2 className="text-[14px] font-medium mb-5 leading-[20px] w-full tracking-[6%] text-[#221A25]">
              помощь
            </h2>
            <div className="grid grid-cols-2 md:flex md:flex-col gap-2">
            <span className="text-[12px] md:text-[14px] font-medium md:font-normal leading-[30px] text-black md:text-[#221A2599]">
              Личный кабинет
            </span>
            <span className="text-[12px] md:text-[14px] font-medium md:font-normal leading-[30px] text-black md:text-[#221A2599]">
              Доставка и оплата
            </span>
            <span className="text-[12px] md:text-[14px] font-medium md:font-normal leading-[30px] text-black md:text-[#221A2599]">
              Обмен и возврат
            </span>
            <span className="text-[12px] md:text-[14px] font-medium md:font-normal leading-[30px] text-black md:text-[#221A2599]">
              Скидки и бонусы
            </span>
            <span className="text-[12px] md:text-[14px] font-medium md:font-normal leading-[30px] text-black md:text-[#221A2599]">
              Наш блог
            </span>
            <span className="text-[12px] md:text-[14px] font-medium md:font-normal leading-[30px] text-black md:text-[#221A2599]">
              Наша энциклопедия
            </span>
            <span className="text-[12px] md:text-[14px] font-medium md:font-normal leading-[30px] text-black md:text-[#221A2599]">
              Частые вопросы
            </span>
            <span className="text-[12px] md:text-[14px] font-medium md:font-normal leading-[30px] text-black md:text-[#221A2599]">
              Таблица размеров
            </span>
            <span className="text-[12px] md:text-[14px] font-medium md:font-normal leading-[30px] text-black md:text-[#221A2599]">
              Состояние заказа
            </span>
            <span className="text-[12px] md:text-[14px] font-medium md:font-normal leading-[30px] text-black md:text-[#221A2599]">
              О компании
            </span>
            <span className="text-[12px] md:text-[14px] font-medium md:font-normal leading-[30px] text-black md:text-[#221A2599]">
              Контакты
            </span>
            </div>
          </div>

          <div>

            <h1 className="text-3xl hidden md:block font-bold mb-6">КОНТАКТЫ</h1>

            <div className="space-y-4">
              <div className="flex items-center">

                <div className="flex items-center gap-2">
                <BsPhone size={20} />
                <div className="flex flex-row-reverse md:flex-col gap-2">
                  
                <span className="text-green-500 md:text-black text-lg">+7 (495) 788-77-50</span>
                <div className="flex items-center gap-2">

                <span className="text-gray-600 hidden md:block">или напишите нам</span>
                <span className="text-green-500 hover:text-green-600">
                  <BsWhatsapp size={20} />
                </span>
                </div>
                </div>
                </div>
                
              </div>
              <div className="flex gap-3 md:items-center">

                <CiLocationOn size={20} color="#000" />
                <span>Москва, ул.Малая Филевская, д. 8, корп. 1</span>
              </div>

              <div className="flex items-center gap-2">
                <SiMetrodeparis size={20} color="#000" />
                <span>Филевский парк</span>
              </div>

              <div className="text-gray-600">Ежедневно с 10 до 20</div>

              <div className="hidden md:flex space-x-4 mt-4">
                <Link to="#" className="text-gray-600 hover:text-gray-800">
                  <Instagram size={24} />
                </Link>
                <Link to="#" className="text-gray-600 hover:text-gray-800">
                  <Youtube size={24} />
                </Link>
                <Link to="#" className="text-gray-600 hover:text-gray-800">
                  <SiVk size={24} />
                </Link>
                <Link to="#" className="text-gray-600 hover:text-gray-800">
                  <MessageCircle size={24} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
