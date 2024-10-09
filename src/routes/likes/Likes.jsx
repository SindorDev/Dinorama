import Footer from "../../components/footer/Footer"
import Header from "../../components/header/Header"
import Category from "../../components/category/Category"
import Banner from "../../components/banner/Banner"
import Product from "../../components/product/Product"
import { useSelector } from "react-redux"
import { Container } from "../../utils"
import { useGetProductQuery } from "../../redux/api/productApi"
const Likes = () => {

  const {liks} = useSelector((state) => state.likes)

  const {data} = useGetProductQuery()

  return (
       <>
       <Header/>
       <Category/>
       <Banner/>
       <Container>
        <div className="flex my-20 items-center gap-10">
          <div className="w-full hidden md:block h-[2px] bg-gray-300"></div>
          <h1 className="text-2xl hidden md:block font-bold">Likes</h1>
          <div className="w-[70%] hidden md:block h-[2px] bg-gray-300"></div>
          <span className="text-sm font-bold border-2 w-full md:w-auto text-center whitespace-nowrap uppercase text-[#0CA145]  p-[12px] border-[#B7DEBF]">все популярное</span>
        </div>
      </Container>
       <Product data={liks} state={liks.length}/>
    <Container>
    <div className="flex my-20 items-center gap-10">
          <div className="w-full hidden md:block h-[2px] bg-gray-300"></div>
          <h1 className="text-2xl hidden md:block font-bold">Популярное</h1>
          <div className="w-[70%] hidden md:block h-[2px] bg-gray-300"></div>
          <span className="text-sm font-bold border-2 w-full md:w-auto text-center whitespace-nowrap uppercase text-[#0CA145]  p-[12px] border-[#B7DEBF]">все популярное</span>
        </div>
    </Container>

       <Product data={data} state={4} />
       <div className="mb-20"></div>
       <Footer/>
       </>
  )
}

export default Likes