import { Outlet } from 'react-router';
import Navbar from '../pages/shared/Navbar/Navbar';
import Footer from '../pages/shared/Footer/Footer';

const RootLayout = () => {
    return (
        <div className='bg-orange-50 py-5'>
            <div className='max-w-7xl mx-auto space-y-28 '>
           <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            </div>
            
        </div>
    );
};

export default RootLayout;