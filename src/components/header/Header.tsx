import React from 'react'
import { Cart, Menu, SearchIcon } from '@/utils/icons'
import './header.scss'

const Header: React.FC = () => {
    return (
        <header className='menu'>
            <nav>
                <ul>
                    <li className='menu_icon'>
                        <Menu/>
                    </li>
                    <li className='menu_title'>
                        Dashboard
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
    )
}

export default Header
