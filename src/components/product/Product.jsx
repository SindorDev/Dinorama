import { BiCartAlt } from "react-icons/bi"; 
import { Container } from "../../utils/index";
import { Link } from "react-router-dom";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { like, removeLikes } from "../../redux/slice/Likes";
import { product } from "../../redux/slice/Cart";
const Product = ({data, state}) => {
  const dispatch = useDispatch()
 const {liks} = useSelector((state) => state.likes)

 const handleLikes = (item) => {
  if (liks && liks.some((likedItem) => likedItem.id === item.id)) {
    dispatch(removeLikes(item));
  } else {
    dispatch(like(item));
  }
};

const handleCart = (item) => {
  dispatch(product(item));
};

  return (
    <section>
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {data?.slice(0, state).map((item) => (
            <div
              key={item.id}
              className="w-full rounded overflow-hidden shadow-lg bg-white"
            >
              <div className="relative">
                <Link className="w-full " to={`/details/${item.id}`}>
                <img
                  className="w-[150px] mx-auto h-[300px] object-contain"
                  src={item.image}
                  alt={item.title}
                />
                </Link>
                  <span style={{backgroundColor: item.rating.rate > 4 ? "orange" : item.rating.count > 80 ? "green" : "red"}} className="absolute capitalize top-2 left-2 text-white text-xs font-bold rounded-full px-2 py-1">
                    {item.rating.rate > 4 ? "хит" : item.rating.count > 80 ? "новинка" : "Популярное"}
                  </span>
                
                <button onClick={() => handleLikes(item)} className="absolute top-2 right-2 bg-white rounded-full p-1">
                {liks &&
                        liks.find((likesItem) => likesItem.id === item.id) ? (
                          <AiFillHeart size={40} color="red" />
                        ) : (
                          <AiOutlineHeart size={40} />
                        )}
                </button>
              </div>
              <div className="px-6 py-4">

                <div className="font-bold text-xl text-center min-h-[80px] mb-2">
                  {item.title}
                </div>
                <p className="text-gray-700 text-[18px] font-bold text-center mb-2">
                  {item.price} ₽  
                </p>
                <div className="flex justify-end">
                <button className="bg-[#0fa245d7] flex items-center gap-x-[12px] text-white p-2 rounded" onClick={() => handleCart(item)}>
                  <BiCartAlt size={30} />
                </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Product;
