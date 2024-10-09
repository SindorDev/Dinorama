import  Header from "../../components/header/Header"
import Banner from "../../components/banner/Banner"
import { useParams } from "react-router-dom"
import { useGetProductByIdQuery, useGetProductQuery } from "../../redux/api/productApi"
import Footer from "../../components/footer/Footer"
import { Container } from "../../utils"
import { Button } from "antd"
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai"
import Product from "../../components/product/Product"
import Category from "../../components/category/Category"
const Details = () => {

  const {id} = useParams()
  const {data} = useGetProductByIdQuery(id)
  
  const {data: allData} = useGetProductQuery()

  return (
       <>
       <Header/>
       <Category/>
       <Banner/>
       <Container>
       <div className="flex my-20 gap-20">
          {data && (
            <>
              <div className="w-full h-[500px]">
                <img src={data.image} className="w-full h-full object-contain" alt={data.title} />
              </div>
              <div className="w-full">
                <h1 className="text-[40px] font-bold">{data.title}</h1>
                <strong className="text-[24px] mt-5 inline-block font-medium">
                  Price: ${data.price}
                </strong>

                <p>{data.description}</p>

                <div className="flex my-10 gap-10 items-center">
                  <span className="bg-black py-1 px-8 font-bold rounded-full text-white">
                    OFFER
                  </span>
                  <p className="underline text-[20px] ">
                    Get 15% off when you spend £60 with code: YAY *Discount
                    applies to RRP
                  </p>
                </div>

                <div className="flex gap-10 items-center">
                  <span className="bg-black py-1 px-8 font-bold rounded-full text-white">
                    OFFER
                  </span>
                  <p className="underline text-[20px] ">
                    Get 15% off when you spend £60 with code: YAY *Discount
                    applies to RRP
                  </p>
                </div>
                  
              <div className="flex mt-10 gap-10 items-center">
                <Button type="primary" className="!bg-[#66FF96] text-black w-full !py-10 text-[30px]">Add To Bag</Button>
             
                      <button >
                     <AiOutlineHeart size={60} />
                     {/* <AiFillHeart size={60} color="red" /> */}
                      </button>
              </div>
              </div>
            </>
          )}
        </div>
        <div className="flex items-center my-32 gap-20">
        <div className="w-full h-[2px] bg-gray-300"></div>
          <h1 className="text-2xl font-bold">Новинки</h1>
          <div className="w-[70%] h-[2px] bg-gray-300"></div>
          <span className="text-sm font-bold border-2 whitespace-nowrap uppercase text-[#0CA145]  p-[12px] border-[#B7DEBF]">все новинки</span>
  
        </div>
        <Product data={allData} state={4}/>
        <div className="mb-[100px]"></div>
       </Container>
       <Footer/>
       </>
  )
}

export default Details