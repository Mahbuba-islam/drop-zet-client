import { Outlet } from 'react-router';
import Navbar from '../pages/shared/Navbar/Navbar';
import Footer from '../pages/shared/Footer/Footer';

const RootLayout = () => {
    return (
        <div className='bg-orange-50'>
            <div className='container mx-auto'>
           <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            </div>
            
        </div>
    );
};

export default RootLayout;