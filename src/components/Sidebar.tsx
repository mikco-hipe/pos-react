import React from 'react'
import { NavLink } from 'react-router-dom'
import { paths } from '../utils/routes'
import './sidebar.scss'

const Sidebar: React.FC = () => {
  return (
    <header>
        <nav>
            <ul>
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
    </header>
  )
}

export default Sidebar
