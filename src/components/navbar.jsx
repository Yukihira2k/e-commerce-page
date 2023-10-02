import cart from "../assets/images/icon-cart.svg"
import avatar from "../assets/images/image-avatar.png"
import MenuIcon from '@mui/icons-material/Menu';
import "../css/navbar.css"
import {useState} from "react";
function Navbar(){

    const[burgerMenu, setBurgerMenu]= useState("hidden")
    const[menu,setMenu]= useState("Menu")
    const[click, isClicked] = useState(false);


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
                    <img src={cart}></img>
                    <img className="avatar" src={avatar}></img>

                </div>
                
            </div>
        </nav>



       
    )
}

export default Navbar;