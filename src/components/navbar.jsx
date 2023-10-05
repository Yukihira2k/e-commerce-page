import cart from "../assets/images/icon-cart.svg"
import avatar from "../assets/images/image-avatar.png"
import MenuIcon from '@mui/icons-material/Menu';
import "../css/navbar.css"
import {useState} from "react";
function Navbar(props){

    const[burgerMenu, setBurgerMenu]= useState("hidden")
    const[menu,setMenu]= useState("Menu")
    const [toggle, setToggle] = useState(false)


    function handleClick(){
        setMenu("updateMenu")
    }

    return(
        <nav>
           
           <div className="flex-left">
                <li className="logo">sneakers</li>
                <li className="nav-hover">Collections</li>
                <li className="nav-hover">Men</li>
                <li className="nav-hover">Women</li>
                <li className="nav-hover">About</li>
                <li className="nav-hover">Contact</li>
            </div>


            <div className={burgerMenu}>
                <div>
                <li className={menu}>Collections</li>
                <li className={menu}>Men</li>
                <li className={menu}>Women</li>
                <li className={menu}>About</li>
                <li className={menu}>Contact</li>
                </div>  
            </div>
            <div className={burgerMenu}>     <MenuIcon onClick={handleClick}/></div>
       
            <div className="flex-right">
                <div className="flex">
                    <div className="cart">
                    <img src={cart} onClick={() => setToggle(!toggle)} ></img>
                   {toggle &&(<div className="shopping-cart">
                        <p className="shopping-cart-text">Cart</p>
                        <div className="flex">
                        <div className="flex-cart-left">
                        <img src= "/images/image-product-1-thumbnail.jpg" className="cart-img"/>
                        </div>
                        <div className="flex-cart-right">
                            <p className="cart-item">Fall Limited Edition Sneakers</p>
                            <div className="cart-flex-prices">
                                <p className="cart-price">$125.00</p>
                                <p className="cart-total">375</p>
                            </div>
                        </div>
                       
                        </div>
                        <button className="add-to-cart-cart">Checkout</button>
                    </div>)}
                    </div>
                    <img className="avatar" src={avatar}></img>

                </div>
                
            </div>
        </nav>



       
    )
}

export default Navbar;