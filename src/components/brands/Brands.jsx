import { brands as brandsData } from "../../assets/data/index"
import { Container } from "../../utils/index"
const Brands = () => {
  return (
    <section>
      <Container>
        <div className="flex overflow-hidden whitespace-nowrap gap-4">
          {
            brandsData?.map((item, index) => (
              <div key={index} className="w-full animate-scroll min-h-[200px]">
                <img src={item.src} alt={item.title} className="w-full h-full object-contain" />
              </div>
              
            ))
          }
        </div>
      </Container>
    </section>
  )
}

export default Brands