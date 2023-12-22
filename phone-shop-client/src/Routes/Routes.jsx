
import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../Layout/MainLayout/MainLayout'
import Home from '../Pages/Home/Home'
import ProductDetails from '../Components/Shared/ProductDetails/ProductDetails';
import AllProducts from '../Pages/AllProducts/AllProducts';
const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/productDetails/:id',
                element: <ProductDetails/>
            },
            {
                path: '/allProducts',
                element: <AllProducts/>
            }
        ]
    }
])

export default router;