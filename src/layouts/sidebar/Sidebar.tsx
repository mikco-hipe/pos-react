import React from 'react'
import { NavLink } from 'react-router-dom'
import { paths } from '@/utils/routes'
import { Cross } from '@/utils/icons'
import './sidebar.scss'

interface SidebarProps {
    onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onClose }) => {
    return (
        <div className="sidebar">
            <div className='button-div'>
                <button className="close-button" onClick={onClose}>
                    <Cross />
                </button>
            </div>
            <nav>
                <ul onClick={onClose}>
                    <li>
                        <NavLink to={paths.dashboard}>Dashboard</NavLink>
                    </li>
                    <li>
                        <NavLink to={paths.pos}>POS</NavLink>
                    </li>
                    <li>
                        <NavLink to={paths.invoice}>Invoice</NavLink>
                    </li>
                    <li>
                        <NavLink to={paths.sales}>Sales</NavLink>
                    </li>
                    <li>
                        <NavLink to={paths.inventory}>Inventory</NavLink>
                    </li>
                    <li>
                        <NavLink to={paths.settings}>Settings</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Sidebar
