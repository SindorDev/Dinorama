import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import Category from "../../components/category/Category"
import Banner from "../../components/banner/Banner"
import Product from "../../components/product/Product"

import { Container } from "../../utils"
import { useSearchParams } from "react-router-dom"
import { useGetProductQuery } from "../../redux/api/productApi"

const Search = () => {

  const [searchParams] = useSearchParams()
  const search = searchParams.get("q")
  const {data} = useGetProductQuery(search)

  const filterData = data?.filter(item => item.title.toLowerCase().includes(search.toLowerCase()))

  console.log(filterData)

  return (
       <>
       <Header/>
       <Category/>
       <Banner/>
       <Container>
        <div className="w-full mb-10">
          <h2 className="text-[28px] font-medium">Поиск</h2>
        </div>
       </Container>
       <Product data={filterData} state={filterData?.length} />
       <div className="mb-[100px]"></div>
       <Footer/>
       </>
  )
}

export default Search