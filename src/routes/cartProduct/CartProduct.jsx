import Footer from "../../components/footer/Footer"
import { Container } from "../../utils"
import Header from "../../components/header/Header"
import Category from "../../components/category/Category"
import Banner from "../../components/banner/Banner"
import { useDispatch, useSelector } from "react-redux"
import { removeproducts } from "../../redux/slice/Cart"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
const CartProduct = () => {

  const {cartProduct} = useSelector((state) => state.cart)
  const dispatch = useDispatch()
 
  const handleRemoveBag = (item) => {
    dispatch(removeproducts(item))
  }

  return (
       <>
       <Header/>
       <Category/>
       <Banner/>
       <Container>
       <div className="w-full max-w-[600px] flex flex-col gap-14 my-20 mx-auto">
          <h1 className="text-[30px] my-10 uppercase font-bold">Your Cart</h1>
          {cartProduct.map((item) => {
            return (
              <div
                key={item.id}
                className="flex gap-10 border-b border-gray-500 items-start"
              >
                <div className="w-[30%]">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="w-full">
                  <div className="flex items-center justify-between">
                    <h2 className="font-bold uppercase text-[24px]">
                      {item.title}
                    </h2>
                    <strong>
                     ${item.price}
                    </strong>
                  </div>
                  <div className="flex items-center justify-between my-5">
                    <span className="capitalize text-[20px] font-medium">
                      {item.category}
                    </span>

                    <div
                      className="w-[40px] h-[40px] rounded-full"
                      style={{ background: item.color }}
                    ></div>
                  </div>

                  <div className="flex items-center my-5 justify-between">
                    <button
                      className="outline-none border-none underline"
                      onClick={() => handleRemoveBag(item)}
                    >
                      Remove
                    </button>

                    <Select>
                      <SelectTrigger className="w-[100px]">
                        <SelectValue placeholder="Qty" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1</SelectItem>
                        <SelectItem value="2">2</SelectItem>
                        <SelectItem value="3">3</SelectItem>
                        <SelectItem value="4">4</SelectItem>
                        <SelectItem value="5">5</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
       </Container>
       <Footer/>
       </>
  )
}

export default CartProduct