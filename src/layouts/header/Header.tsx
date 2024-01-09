import React, { useState } from 'react';
import { Cart, Menu, SearchIcon } from '@/utils/icons'
import { useLocation } from 'react-router-dom';
import Sidebar from '@/layouts/sidebar/Sidebar'

const Header: React.FC = () => {
    const location = useLocation();
    const page = location.pathname.split('/').pop();

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
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
                        <li className='cart-icon'>
                            <Cart />
                        </li>
                    </ul>
                </nav>
            </header>
            <div className={`sidebar-container ${isSidebarOpen ? 'open' : ''}`}>
                <Sidebar onClose={toggleSidebar} />
            </div>
        </div>
    )
}

export default Header
