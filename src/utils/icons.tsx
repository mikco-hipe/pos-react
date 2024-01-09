import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";
import * as FiIcons from "react-icons/fi";
import * as BiIcons from "react-icons/bi";
import * as RxIcons from "react-icons/rx";
import * as Fa6Icons from "react-icons/fa6";

import Main from "@/assets/images/dashboard-icons/fire-logo.svg";
import Soup from "@/assets/images/dashboard-icons/soup-logo.svg";
import Dessert from "@/assets/images/dashboard-icons/cupcake-logo.svg";
import Bread from "@/assets/images/dashboard-icons/bread-logo.svg";
import Beverages from "@/assets/images/dashboard-icons/wine-logo.svg";
import Breakfast from "@/assets/images/dashboard-icons/breakfast-logo.svg";
import Snack from "@/assets/images/dashboard-icons/snack-logo.svg";

export const Minus: React.FC = () => <FaIcons.FaMinus />;
export const Add: React.FC = () => <FaIcons.FaPlus />;
export const Check: React.FC = () => <FaIcons.FaCheck />;
export const CheckBox: React.FC = () => <FaIcons.FaCheckSquare />;

export const Cart: React.FC = () => <Fa6Icons.FaCartShopping />;

export const SearchIcon: React.FC = () => <IoIcons.IoIosSearch />;
export const ArrowDown: React.FC = () => <IoIcons.IoIosArrowDown />;

export const Menu: React.FC = () => <FiIcons.FiMenu />;

export const Barcode: React.FC = () => <BiIcons.BiBarcodeReader />;

export const Cross: React.FC = () => <RxIcons.RxCross1 />;

export { Main, Soup, Dessert, Bread, Beverages, Breakfast, Snack };
