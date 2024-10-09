import { AiOutlineArrowRight } from "react-icons/ai"; 
import { Container } from "../../utils/index"
import { subCategory as categories } from "../../assets/data/index"
import { Link } from "react-router-dom";
const SubCategory = () => {

  return (
    <section className="mt-10">
      <Container>
        <div className="grid place-items-center grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {
            categories?.map((item, index) => (
              <div key={index} className="w-full bg-[#F7F8F7]  flex pb-3 flex-col items-center gap-5 max-w-[200px] min-h-[200px]">
                <img src={item.src} alt={item.title} className="w-full h-[200px] object-cover" />
                <h3 className="text-black text-center text-xl capitalize font-semibold">{item.title}</h3>
                <Link to={`/category/${item.title}`} className="flex items-center w-[42px] cursor-pointer h-[42px] bg-[#2CDF701A] justify-center gap-2">
                <AiOutlineArrowRight />
                </Link>
              </div>
            ))
          }
        </div>
      </Container>
    </section>
  )
}

export default SubCategory