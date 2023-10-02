import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {useState} from "react";
function Buttons(){
    const[count, setCount]= useState(0);
    

    function onAdd(){
        setCount(count + 1)
        
    }

    function onDelete(){
        if (count === 0){
            setCount(0)
        }else{
            setCount(count - 1)
        }
    }

    return(
        <div>
            <div className="buttons">
            <button onClick={onDelete}className="delete"><RemoveIcon style={{color: "orange"}}/></button>
            <input className="total"type="text"  value={count} readOnly />
            <button onClick={onAdd}className="add"><AddIcon style={{color: "orange"}}/></button>
            <button className="add-to-cart"><ShoppingCartOutlinedIcon style={{ fontSize: 20 }}/>  <span>Add to cart</span></button>
            </div>
        </div>
    )
}

export default Buttons;