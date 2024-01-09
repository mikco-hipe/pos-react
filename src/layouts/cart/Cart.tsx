import React from 'react';
import { Cross } from '@/utils/icons';

interface CartProps {
    onClose: () => void;
}

const Cart: React.FC<CartProps> = ({ onClose }) => {
    return (
        <div className="cart" onClick={onClose}>
            <ul className='cart_title'>
                <li className='cart_name'>
                    Cart
                </li >
                <li className="close_button">
                    <Cross />
                </li>
            </ul>
        </div>
    );
};

export default Cart;
