import './DefaultLayout.css';
import { Outlet } from 'react-router';
import Header from '../components/Header.jsx';

const DefaultLayout = () => (
    <>
        <Header />
        <Outlet />
    </>
);

export default DefaultLayout;