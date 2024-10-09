import Footer from "../../components/footer/Footer"
import Category from "../../components/category/Category"
import Banner from "../../components/banner/Banner"
import Header from "../../components/header/Header"
import { useParams } from "react-router-dom"
import { useGetProductByCategoryQuery } from "../../redux/api/productApi"
import Product from "../../components/product/Product"
import { Container } from "../../utils"
const CategoryData = () => {
  const {id} = useParams()
  const {data} = useGetProductByCategoryQuery(id)
  
  return (
    <>
    <Header/>
    <Category/>
    <Banner/>
    <Container>
      
    <div className="my-32">
    <div className="flex mb-20 items-center gap-10">
          <div className="w-[80%] hidden md:block h-[2px] bg-gray-300"></div>
          <h1 className="text-2xl hidden md:block whitespace-nowrap uppercase font-bold">{id}</h1>
          <div className="w-[70%] hidden md:block h-[2px] bg-gray-300"></div>
          <span className="text-sm font-bold text-center w-full md:w-auto border-2 whitespace-nowrap uppercase text-[#0CA145]  p-[12px] border-[#B7DEBF]">all {id}</span>
        </div>
      <Product data={data} state={data?.length}/>
    </div>
    </Container>

    <Footer/>
    </>
    )
}

export default CategoryData