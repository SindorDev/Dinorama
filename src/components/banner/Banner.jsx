import { AiOutlineArrowRight } from "react-icons/ai"; 
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

import fast from "../../assets/icons/fast.svg"
import banner from "../../assets/images/bannerBG.png"
import miniBanner from "../../assets/images/miniBanner.png"
import { Container } from "../../utils/index";
const Banner = () => {
  return (
    <section className="mt-[30px]">
       
      <Swiper
        className="w-[100%] min-h-[500px]"
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
       loop={true}
       autoplay={true}
      >
       <Container>
        <SwiperSlide className="lg:bg-[#B7DEBF] py-20 ">

              <div className="flex flex-col lg:flex-row items-center  justify-between h-full w-full max-w-[1440px] mx-auto">
                     
              <div className="hidden lg:flex flex-col border-2 items-center bg-white w-full max-w-[188px] min-h-[188px] p-5 rounded-full ">
                     <img src={fast} width={60} alt="Fast" />
                     <span className="text-center">бесплатная
                     доставка</span>
                     <strong className="text-[14px] font-bold text-[#0FA245]">от 7000 руб.</strong>
              </div>
                     <div className="w-full hidden md:flex h-full bg-[#B7DEBF] md:bg-transparent">
              <img src={ banner} className="w-full -z-10 h-full lg:absolute right-0 top-0 object-contain lg:left-[200px] md:object-cover" alt="banner" />
                     </div>
                     <div className="bg-[#B7DEBF] w-full h-full md:hidden">
              <img src={ miniBanner} className="w-full -z-10 h-full lg:absolute right-0 top-0 object-contain lg:left-[200px] md:object-cover" alt="banner" />
                     </div>
              <div className="flex w-full px-5 flex-col md:flex-row mt-5 md:mt-0 lg:flex-col">
                     <h1 className="text-[40px] font-bold">Новая коллекция <span className="bg-[#0FA245] text-white px-4 py-2">Molo</span></h1>
                     <p className="text-[20px] leading-[32px] mt-5 w-full max-w-[430px] font-normal text-[#221A25]">Комбинезоны и куртки с реалистичными фотопринтами</p>
                     <button className="bg-[#0fa245d7] flex items-center gap-x-[12px] text-white w-full max-w-[140px] h-[42px] pl-2 mt-5">Смотреть <span className="bg-[#0CA145] flex items-center justify-center w-full h-full"><AiOutlineArrowRight size={20} /></span></button>
              </div>
              </div>
        </SwiperSlide>
        
        <SwiperSlide className="lg:bg-[#B7DEBF] py-20 ">
              <div className="flex flex-col lg:flex-row items-center  justify-between h-full w-full max-w-[1440px] mx-auto">
                     
              <div className="hidden lg:flex flex-col border-2 items-center bg-white w-full max-w-[188px] min-h-[188px] p-5 rounded-full ">
                     <img src={fast} width={60} alt="Fast" />
                     <span className="text-center">бесплатная
                     доставка</span>
                     <strong className="text-[14px] font-bold text-[#0FA245]">от 7000 руб.</strong>
              </div>
                     <div className="w-full hidden md:flex h-full bg-[#B7DEBF] md:bg-transparent">
              <img src={ banner} className="w-full -z-10 h-full lg:absolute right-0 top-0 object-contain lg:left-[200px] md:object-cover" alt="banner" />
                     </div>
                     <div className="bg-[#B7DEBF] w-full h-full md:hidden">
              <img src={ miniBanner} className="w-full -z-10 h-full lg:absolute right-0 top-0 object-contain lg:left-[200px] md:object-cover" alt="banner" />
                     </div>
              <div className="flex w-full px-5 flex-col md:flex-row mt-5 md:mt-0 lg:flex-col">
                     <h1 className="text-[14px] md:text-[20px] lg:text-[40px] font-bold">Новая коллекция <span className="bg-[#0FA245] text-white px-4 py-2">Molo</span></h1>
                     <p className="text-[14px] md:text-[20px] lg:text-[20px] leading-[32px] mt-5 w-full max-w-[430px] font-normal text-[#221A25]">Комбинезоны и куртки с реалистичными фотопринтами</p>
                     <button className="bg-[#0fa245d7] flex items-center gap-x-[12px] text-white w-full max-w-[140px] h-[42px] pl-2 mt-5">Смотреть <span className="bg-[#0CA145] flex items-center justify-center w-full h-full"><AiOutlineArrowRight size={20} /></span></button>
              </div>
              </div>
        </SwiperSlide>
        
        <SwiperSlide className="lg:bg-[#B7DEBF] py-20 ">
              <div className="flex flex-col lg:flex-row items-center  justify-between h-full w-full max-w-[1440px] mx-auto">
                     
              <div className="hidden lg:flex flex-col border-2 items-center bg-white w-full max-w-[188px] min-h-[188px] p-5 rounded-full ">
                     <img src={fast} width={60} alt="Fast" />
                     <span className="text-center">бесплатная
                     доставка</span>
                     <strong className="text-[14px] font-bold text-[#0FA245]">от 7000 руб.</strong>
              </div>
                     <div className="w-full hidden md:flex h-full bg-[#B7DEBF] md:bg-transparent">
              <img src={ banner} className="w-full -z-10 h-full lg:absolute right-0 top-0 object-contain lg:left-[200px] md:object-cover" alt="banner" />
                     </div>
                     <div className="bg-[#B7DEBF] w-full h-full md:hidden">
              <img src={ miniBanner} className="w-full -z-10 h-full lg:absolute right-0 top-0 object-contain lg:left-[200px] md:object-cover" alt="banner" />
                     </div>
              <div className="flex w-full px-5 flex-col md:flex-row mt-5 md:mt-0 lg:flex-col">
                     <h1 className="text-[40px] font-bold">Новая коллекция <span className="bg-[#0FA245] text-white px-4 py-2">Molo</span></h1>
                     <p className="text-[20px] leading-[32px] mt-5 w-full max-w-[430px] font-normal text-[#221A25]">Комбинезоны и куртки с реалистичными фотопринтами</p>
                     <button className="bg-[#0fa245d7] flex items-center gap-x-[12px] text-white w-full max-w-[140px] h-[42px] pl-2 mt-5">Смотреть <span className="bg-[#0CA145] flex items-center justify-center w-full h-full"><AiOutlineArrowRight size={20} /></span></button>
              </div>
              </div>
        </SwiperSlide>
       </Container>
      </Swiper>
    </section>
  );
};

export default Banner;
