import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Template from '../config/Template';
import Register from './Register/Register';

const router = createBrowserRouter([
   {
    'path': '/',
    'element': <Template />
   }, 
   {
    'path': '/register',
    'element': <Register />
   }, 
])



const Routes = () => {
    return (
        <>
        <RouterProvider router={router} />
            
        </>
    );
};

export default Routes;