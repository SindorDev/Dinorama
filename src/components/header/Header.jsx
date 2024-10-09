import { AiOutlineMenu } from "react-icons/ai"; 
import { BiShoppingBag } from "react-icons/bi"; 
import { AiOutlineHeart } from "react-icons/ai"; 
import { AiOutlineSearch } from "react-icons/ai"; 
import { AiOutlineWhatsApp } from "react-icons/ai"; 
import { AiOutlineUser } from "react-icons/ai"; 
import { CiLocationOn } from "react-icons/ci"; 
import { AiOutlineClose } from "react-icons/ai"; 
import { Container } from "../../utils";
import { NavLink, useNavigate } from "react-router-dom";

import logo from "../../assets/icons/logo.svg"
import { Badge, Input } from "antd";
import { useSelector } from "react-redux";
import { useState } from "react";
import Menu from "../menu/Menu";
const Header = () => {
  const navigate = useNavigate()
  const {liks} = useSelector((state) => state.likes)
  const {cartProduct} = useSelector((state) => state.cart)
  const [openNav, setOpenNav] = useState(false)
  const [openMenu, setOpenMenu] = useState(false)
  const [openSearch, setOpenSearch] = useState(false)
  const token = localStorage.getItem("token")

  const handleSearch = (value) => {
    navigate(`/search?q=${value}`)
    setOpenSearch(false)
  }
  return (
    <section>
    <div className="bg-[#FEAAE1] hidden md:block py-2" style={{display: openNav === false ? "" : "none"}}>

      <Container>
        <div className="flex items-center justify-center">
          
      <span className="w-full text-center" >🍁 Осенние и зимние новинки одежды и обуви, которые мы уже получили. <span className="underline">Смотрите</span> </span>
        <button  onClick={() => setOpenNav(true)}>
      <AiOutlineClose className="cursor-pointer" />
        </button>
        </div>
      </Container>

    </div>

    <nav>
      <Container>
        <div className="my-5">

            <div className="flex items-center justify-between">
              <span className="flex items-center text-[18px] text-center w-full justify-center md:text-left font-normal leading-5 gap-2"><CiLocationOn size={28} />Шоурум: Москва, ул. Малая Филевская, д. 8, корп. 1
              <span className="text-gray-300 hidden md:block">Ежедневно c 10 до 20</span></span>  

            <NavLink  to={token ? "/profile" : "/auth"} className="flex hidden md:flex whitespace-nowrap items-center text-[18px] font-normal leading-5 gap-2">
              <AiOutlineUser />
              Личный кабинет
            </NavLink>

            </div> 
        </div>

        <div className="my-[30px] flex items-center flex-col md:flex-row justify-between">
            <div className="flex flex-col  gap-2">
               <span className="text-[28px] font-medium leading-6">+7 (495) 788-77-50</span>
               <span className="flex justify-center md:justify-start items-center gap-2">или напишите нам 
               whatsapp<AiOutlineWhatsApp color="#55C380" /></span>
            </div>

            <NavLink to="/">
              <img src={logo} width={200} alt="logo" />
            </NavLink>
            <data className="flex items-center justify-between mt-5 w-full md:w-auto">
                <button className="md:hidden" onClick={() => setOpenMenu(true)}><AiOutlineMenu size={28} /></button>
            <div className="flex items-center gap-4">
              <span><AiOutlineSearch className="cursor-pointer" onClick={() => setOpenSearch(true)} size={28} /></span>
              <NavLink to="/likes">
                  <Badge count={liks.length}>
                <AiOutlineHeart size={28} />
                  </Badge>
              </NavLink>
              
              <NavLink to="/cart">
                <Badge count={cartProduct.length}>
                <BiShoppingBag size={28} />
                  </Badge>
              </NavLink>
              
              <NavLink className="block md:hidden" to={token ? "/profile" : "/auth"}>
              <Badge>
              <AiOutlineUser size={30} />
              </Badge>
              </NavLink>
            </div>
            </data>
        </div>

      </Container>

    <div style={{transform: openSearch ? "translateY(0)" : "translateY(-100%)"}} className="fixed inset-0 z-10 bg-black bg-opacity-50 backdrop-blur-sm duration-300">
    <div className="w-full bg-white p-4" >
      <div className="flex items-center justify-between">
        <h2 className="text-[28px] font-medium">Поиск</h2>
        <AiOutlineClose className="cursor-pointer" size={30} onClick={() => setOpenSearch(false)} />
      </div>
      <div className="w-full flex items-center mt-[30px] mb-[20px] border-b-[3px] pb-3 border-black  justify-center">
        <Input id="search" type="text" placeholder="Поиск" onPressEnter={(e) => handleSearch(e.target.value)} className="w-full border-none text-black text-[28px]  capitalize" />
    <label htmlFor="search">
    <span><AiOutlineSearch className="cursor-pointer" size={28} /></span>
    </label>

      </div>
    </div>
    </div>


    </nav>
    <Menu openMenu={openMenu} setOpenMenu={setOpenMenu} />
    </section>
  )
}

export default Header