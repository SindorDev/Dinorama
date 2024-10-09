import { Container } from "../../utils/index"
import one from "../../assets/icons/1.svg"
import two from "../../assets/icons/2.svg"
import three from "../../assets/icons/3.svg"
import four from "../../assets/icons/4.svg"
import five from "../../assets/icons/5.svg"

const Services = () => {
  return (
    <section className="bg-[#F7F8F7] py-[34px]">
      <Container>
        <div className="flex flex-wrap md:justify-between justify-center md:items-center gap-10 md:gap-2">
          <div className="flex flex-col w-full max-w-[200px] text-center items-center gap-5">
            <img src={two} alt="two" />
            <p className="text-[20px] font-semibold">Шоу-рум с хитами продаж!</p>
          </div>
          
          <div className="flex flex-col w-full max-w-[200px] text-center items-center gap-5">
            <img src={three} alt="three" />
            <p className="text-[20px] font-semibold">Гарантия качества!</p>
          </div>
          
          <div className="flex flex-col w-full max-w-[200px] text-center items-center gap-5">
            <img src={four} alt="four" />
            <p className="text-[20px] font-semibold">Нам доверяют!</p>
          </div>
          
          <div className="flex flex-col w-full max-w-[200px] text-center items-center gap-5">
            <img src={five} alt="five" />
            <p className="text-[20px] font-semibold">Возврат и обмен без проблем!</p>
          </div>
          
          <div className="flex flex-col w-full max-w-[200px] text-center items-center gap-5">
            <img src={one} alt="one" />
            <p className="text-[20px] font-semibold">С нами выгодно!</p>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Services