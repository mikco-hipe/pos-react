import React, { useState } from 'react';
import { CartBtn, Menu, SearchIcon } from '@/utils/icons'
import { useLocation } from 'react-router-dom';
import Sidebar from '@/layouts/sidebar/Sidebar'
import Cart from '@/layouts/cart/Cart';
import { DUMMY_CART } from '@/layouts/cart/DummyCart';

const Header: React.FC = () => {
    const location = useLocation();
    const page = location.pathname.split('/').pop();

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const [isCartOpen, setIsCartOpen] = useState(false);

    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
    };

    return (
        <div className="header-container">
            <header className='menu'>
                <nav>
                    <ul>
                        <li className='menu_icon' onClick={toggleSidebar}>
                            <Menu />
                        </li>
                        <li className='menu_title'>
                            {page}
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <form className='form'>
                                <button><SearchIcon /></button>
                                <input className='input' type="text" placeholder="Search" />
                            </form>
                        </li>
                        <li className='cart-icon' onClick={toggleCart}>
                            <CartBtn />
                        </li>
                    </ul>
                </nav>
            </header>
            <div className={`sidebar-container ${isSidebarOpen ? 'open' : ''}`}>
                <Sidebar onClose={toggleSidebar} />
            </div>
            <div className={`cart-container ${isCartOpen ? 'open' : ''}`}>
                <Cart onClose={toggleCart} cartItems={DUMMY_CART} />
            </div>
        </div>
    )
}

export default Header
