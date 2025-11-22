
import React from 'react';
import { Outlet, ScrollRestoration, useNavigation } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Loader from '../pages/Loader';

const MainLayout = () => {
    const navigation = useNavigation()
    return (
        <>
            <ScrollRestoration></ScrollRestoration>
            <header>
                <Navbar></Navbar>
            </header>
            <main>
                {navigation.state === 'loading' ? <Loader></Loader> : <Outlet></Outlet>}
            </main>
            <Footer></Footer>
        </>
    );
};

export default MainLayout;