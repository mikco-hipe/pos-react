import React from 'react';
import { Cross } from '@/utils/icons';

interface CartProps {
    onClose: () => void;
    cartItems: Array<{
        image: string;
        name: string;
        price: number;
        quantity: number;
    }>;
}

const Cart: React.FC<CartProps> = ({ onClose, cartItems }) => {
    return (
        <div className="cart" onClick={onClose}>
            <ul className='cart_title'>
                <li className='cart_name'>
                    Cart
                    <span className='cart_badge'>{cartItems.length}</span>
                </li>
                <li className="close_button">
                    <Cross />
                </li>
            </ul>
            <div className='cart_products'>
                {cartItems.map((item, index) => (
                    <div className='cart_list'>
                        <ul key={index}>
                            <li>
                                <img src={item.image} alt={item.name} />
                            </li>
                            <li>
                                <h3>{item.name}</h3>
                                <div className="number-control">
                                    <div className="number-left"></div>
                                    <p className='quantity'>{item.quantity}</p>
                                    <div className="number-right"></div>
                                </div>
                            </li>
                            <li>
                                <h5>Php {item.price.toFixed(2)}</h5>
                            </li>
                        </ul>
                    </div>
                ))}
            </div>
            <div className="bottom_bar">
                <div className='bottom_bar_container'>
                    <ul>
                        <li><p className='value_label'>Discount</p></li>
                        <li><button className="discount_btn">+ Add</button></li>
                    </ul>
                    <ul>
                        <li><p className='value_label'>Tax</p></li>
                        <li className='tax'><span>Php 4.75</span></li>
                    </ul>
                    <ul className='total_label_amount'>
                        <li><p className='value_label'> Total Amount</p></li>
                        <span className='total_amount'>Php 1,350</span>
                    </ul>
                </div>
                <div className='cart_total_btn'>
                    <button className='basket_btn'>Clear Basket</button>
                    <button className='pay_btn'>Pay</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;
