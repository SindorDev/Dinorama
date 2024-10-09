import { Container } from "../../utils"
const Category = () => {
  return (
       <section className="hidden md:block">
              <Container>
                     <hr />
                <div className="flex items-center mt-3 justify-center gap-10">
                  <select className="border-none cursor-pointer text-[18px] font-medium outline-none">
                    <option value="Мальчики">Мальчики</option>
                    <option value="Девочки">Девочки</option>
                    <option value="Взрослые">Взрослые</option>
                  </select>
                     <select className="border-none cursor-pointer text-[18px] font-medium outline-none">
                        <option value="Девочки">Девочки</option>
                        <option value="Мальчики">Мальчики</option>
                        <option value="Взрослые">Взрослые</option>
                     </select>
                     <select className="border-none cursor-pointer text-[18px] font-medium outline-none">
                            <option value="Сезоны">Сезоны</option>
                            <option value="Весна">Весна</option>
                            <option value="Лето">Лето</option>
                            <option value="Осень">Осень</option>
                            <option value="Зима">Зима</option>
                     </select>
                     <select className="border-none cursor-pointer text-[18px] font-medium outline-none">
                            <option value="Бренды">Бренды</option>
                            <option value="Adidas">Adidas</option>
                            <option value="Nike">Nike</option>
                            <option value="Puma">Puma</option>
                            <option value="Reebok">Reebok</option>
                     </select>
                     <span className="text-[18px] cursor-pointer font-medium">Доставка</span>
                     <select className="border-none cursor-pointer text-[18px] font-medium outline-none">
                            <option value="Помощь">Помощь</option>
                            <option value="Оплата">Оплата</option>
                            <option value="Возврат">Возврат</option>
                            <option value="Контакты">Контакты</option>
                     </select>
                </div>
              </Container>
       </section>
  )
}

export default Category