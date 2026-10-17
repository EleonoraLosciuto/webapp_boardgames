import './DefaultLayout.css';
import { Outlet } from 'react-router';
import Header from '../components/Header'

const DefaultLayout = () => (
    <div className='layout'>
        <Header />
        <main>
            <Outlet />
        </main>
    </div>
);

export default DefaultLayout;