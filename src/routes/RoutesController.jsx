import { useLocation, useRoutes } from "react-router-dom"
import { SuspenseElement as Suspense } from "../utils"
import { lazy, useEffect } from "react"

const Home = lazy(() => import("./home/Home"))
const Details = lazy(() => import("./details/Details"))
const CategoryData = lazy(() => import("./categoryData/CategoryData"))
const Likes = lazy(() => import("./likes/Likes"))
const CartProduct = lazy(() => import("./cartProduct/CartProduct"))
const Authorization = lazy(() => import("./auth/Authorization"))
const Login = lazy(() => import("./auth/login/Login"))
const Register = lazy(() => import("./auth/register/Register"))
const Profile = lazy(() => import("./profile/Profile"))
const Search = lazy(() => import("./search/Search"))
const RoutesController = () => {

  const {pathname} = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return useRoutes([
    {
      path: "/",
      element: <Suspense> <Home /> </Suspense>
    },
    {
      path: "/details/:id",
      element: <Suspense> <Details /> </Suspense>
    },
    {
      path: "/category/:id",
      element: <Suspense> <CategoryData /> </Suspense>
    },
    {
      path: "/likes",
      element: <Suspense> <Likes /> </Suspense>
    },
    {
      path: "/cart",
      element: <Suspense> <CartProduct /> </Suspense>
    },
    {
      path: "/auth",
      element: <Suspense> <Authorization /> </Suspense>,
      children: [
        {
          path: "",
          element: <Suspense> <Login/> </Suspense>
        },
        {
          path: "register",
          element: <Suspense> <Register/> </Suspense>
        }
      ]
    },
    {
      path: "/profile",
      element: <Suspense> <Profile/> </Suspense>
    },
    {
      path: "/search",
      element: <Suspense> <Search/> </Suspense>
    }
  ])
}

export default RoutesController