import { AiOutlineClose } from "react-icons/ai";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
const Menu = ({ openMenu, setOpenMenu }) => {
  return (
    <div
      className="fixed inset-0 z-10 bg-black bg-opacity-50 backdrop-blur-sm duration-300"
      style={{ transform: openMenu ? "translateX(0)" : "translateX(-100%)" }}
    >
      <section className="fixed top-0 left-0 z-20 w-[80%] min-h-screen bg-white shadow-2xl">
        <div className="w-full h-full p-4">
          <AiOutlineClose size={30} onClick={() => setOpenMenu(false)} />

          <div className="w-full mt-10">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>Мальчики</AccordionTrigger>
                <AccordionContent>
                  <span className="text-[18px] font-medium">Одежда</span>
                </AccordionContent>

                <AccordionContent>
                  <span className="text-[18px] font-medium">Обувь</span>
                </AccordionContent>

                <AccordionContent>
                  <span className="text-[18px] font-medium">Аксессуары</span>
                </AccordionContent>

                <AccordionContent>
                  <span className="text-[18px] font-medium">Актуальное</span>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>Девочки</AccordionTrigger>
                <AccordionContent>
                  <span className="text-[18px] font-medium">Одежда</span>
                </AccordionContent>

                <AccordionContent>
                  <span className="text-[18px] font-medium">Обувь</span>
                </AccordionContent>

                <AccordionContent>
                  <span className="text-[18px] font-medium">Аксессуары</span>
                </AccordionContent>

                <AccordionContent>
                  <span className="text-[18px] font-medium">Актуальное</span>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>Сезоны</AccordionTrigger>
                <AccordionContent>
                  <span className="text-[18px] font-medium">Осень</span>
                </AccordionContent>

                <AccordionContent>
                  <span className="text-[18px] font-medium">Зима</span>
                </AccordionContent>

                <AccordionContent>
                  <span className="text-[18px] font-medium">Весна</span>
                </AccordionContent>

                <AccordionContent>
                  <span className="text-[18px] font-medium">Лето</span>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>Бренды</AccordionTrigger>
                <AccordionContent>
                  <span className="text-[18px] font-medium">Adidas</span>
                </AccordionContent>

                <AccordionContent>
                  <span className="text-[18px] font-medium">Nike</span>
                </AccordionContent>

                <AccordionContent>
                  <span className="text-[18px] font-medium">Puma</span>
                </AccordionContent>

                <AccordionContent>
                  <span className="text-[18px] font-medium">Converse</span>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>Доставка</AccordionTrigger>
                <AccordionContent>
                  <span className="text-[18px] font-medium"></span>
                </AccordionContent>

                <AccordionContent>
                  <span className="text-[18px] font-medium">Обувь</span>
                </AccordionContent>

                <AccordionContent>
                  <span className="text-[18px] font-medium">Аксессуары</span>
                </AccordionContent>

                <AccordionContent>
                  <span className="text-[18px] font-medium">Актуальное</span>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>Помощь</AccordionTrigger>
                <AccordionContent>
                  <span className="text-[18px] font-medium">
                    Личный кабинет  
                  </span>
                </AccordionContent>

                <AccordionContent>
                  <span className="text-[18px] font-medium">
                    Доставка и оплата
                  </span>
                </AccordionContent>

                <AccordionContent>
                  <span className="text-[18px] font-medium">
                    Обмен и возврат
                  </span>
                </AccordionContent>

                <AccordionContent>
                  <span className="text-[18px] font-medium">
                    Скидки и бонусы
                  </span>
                </AccordionContent>
                
                <AccordionContent>
                  <span className="text-[18px] font-medium">
                  Наш блог
                  </span>
                </AccordionContent>
                
                <AccordionContent>
                  <span className="text-[18px] font-medium">
                  Наша энциклопедия
                  </span>
                </AccordionContent>
                
                <AccordionContent>
                  <span className="text-[18px] font-medium">
                  Частые вопросы
                  </span>
                </AccordionContent>
                
                <AccordionContent>
                  <span className="text-[18px] font-medium">
                  Таблица размеров
                  </span>
                </AccordionContent>
                
                <AccordionContent>
                  <span className="text-[18px] font-medium">
                  Состояние заказа 
                  </span>
                </AccordionContent>
                
                <AccordionContent>
                  <span className="text-[18px] font-medium">
                  О компании
                  </span>
                </AccordionContent>
                
                <AccordionContent>
                  <span className="text-[18px] font-medium">
                  Контакты
                  </span>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;
