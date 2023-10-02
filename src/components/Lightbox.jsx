import thumbnail1 from "../assets/images/image-product-1-thumbnail.jpg";
import thumbnail2 from "../assets/images/image-product-2-thumbnail.jpg";
import thumbnail3 from "../assets/images/image-product-3-thumbnail.jpg";
import thumbnail4 from "../assets/images/image-product-4-thumbnail.jpg";
import mainImage from "/images/image-product-1.jpg";


function Lightbox(){

    const thumbnailImages = 
    [
        "/images/image-product-1-thumbnail.jpg",
        "/images/image-product-2-thumbnail.jpg",
        "/images/image-product-3-thumbnail.jpg",
        "/images/image-product-4-thumbnail.jpg",
      
    ]
 
    const productImages=[
        "/images/image-product-1.jpg",
        "/images/image-product-2.jpg",
        "/images/image-product-3.jpg",
        "/images/image-product-4.jpg"
    ]
    function handleClick(){
        console.log("clicked")
    }

    return(
        <>
        <div className="light-box">
        {thumbnailImages.map((img,index)=> <img className="thumbnail" src={img} key={index} id={index}></img>)}
        </div>


        <div className="flex-light-box">
        <div className="container-light-box">
        <img className="mainImg hidden" src="/images/image-product-1.jpg"></img>
        <div className="light-box">
        {thumbnailImages.map((img,index)=> <img className="thumbnail hidden" src={img} onClick={handleClick} key={index} id={index}></img>)}
        </div>
        </div>
        </div>

   
        
        </>)
}
export default Lightbox;