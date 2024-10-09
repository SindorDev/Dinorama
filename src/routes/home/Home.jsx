import Header from "../../components/header/Header"
import Category from "../../components/category/Category"
import Banner from "../../components/banner/Banner"
import Services from "../../components/services/Services"
import SubCategory from "../../components/subCategory/SubCategory"
import Brands from "../../components/brands/Brands"
import Product from "../../components/product/Product"
import { Container } from "../../utils"
import Support from "../../components/support/Support"
import Footer from "../../components/footer/Footer"
import { useGetProductQuery } from "../../redux/api/productApi"
const Home = () => {

  const {data} = useGetProductQuery()
  return (
    <>
      <Header />
       <Category />
      <Banner/>
      <Services/>
      <SubCategory/>
      <Brands/>
     <Container>
        <div className="flex mb-20 items-center gap-10">
          <div className="w-full hidden md:block h-[2px] bg-gray-300"></div>
          <h1 className="text-2xl hidden md:block font-bold">Новинки</h1>
          <div className="w-[70%] hidden md:block h-[2px] bg-gray-300"></div>
          <span className="text-sm font-bold text-center w-full md:w-auto border-2 whitespace-nowrap uppercase text-[#0CA145]  p-[12px] border-[#B7DEBF]">все новинки</span>
        </div>
      </Container>
      <Product data={data} state={4}/>
      
      <Container>
        <div className="flex my-20 items-center gap-10">
          <div className="w-full hidden md:block h-[2px] bg-gray-300"></div>
          <h1 className="text-2xl hidden md:block font-bold">Популярное</h1>
          <div className="w-[70%] hidden md:block h-[2px] bg-gray-300"></div>
          <span className="text-sm font-bold border-2 w-full md:w-auto text-center whitespace-nowrap uppercase text-[#0CA145]  p-[12px] border-[#B7DEBF]">все популярное</span>
        </div>
      </Container>
       <Product data={data} state={4}/>
      <Support/>
      <Footer/> 
    </>
  )
}

export default Home