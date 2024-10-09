import { HiDocumentText } from "react-icons/hi"; 
import { HiMail } from "react-icons/hi"; 
import { Container } from "../../utils"
import { AiOutlineArrowRight } from "react-icons/ai";

const Support = () => {
  return (
       <section className="bg-[#43b970] mt-20 py-[40px]">
              <Container>
                     <div className="flex items-center flex-col md:flex-row gap-10 md:gap-[100px] justify-center">
                            <div className="flex flex-col gap-5 w-full md:w-[70%]">
                                  <span className="flex items-center text-[20px] gap-2 md:text-[30px] text-white font-medium"><HiMail /><h1>Подпишитесь на рассылку</h1></span>
                                   <p className="w-full text-[14px] sm:text-[18px] md:text-[24px] text-white leading-[34px] max-w-[640px]">Мы будем сообщать вам только <br />
                                   о крутых акциях и присылать полезные статьи</p>
                            </div>
                            <div className="w-full flex items-center sm:items-start flex-col md:w-[30%]">
                                   <div className=" flex items-center  gap-2 border-b-2 w-full pb-2  border-white">
                                          <HiDocumentText className="text-gray-300 text-[20px]" />
                                          <input type="text" placeholder="ваш email" className="bg-transparent border-none outline-none text-gray-300 placeholder:text-gray-300" />
                                   </div>
                     <button className="bg-[#7cffac75] flex items-center gap-x-[12px] text-white w-full max-w-[150px] h-[42px] pl-2 mt-5">подписаться <span className="bg-[#FFFFFF] flex items-center justify-center w-full h-full"><AiOutlineArrowRight color="#55C380" size={20} /></span></button>
                            </div>
                     </div>
              </Container>
       </section>
  )
}

export default Support