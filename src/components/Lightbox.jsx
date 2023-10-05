import {useState} from "react";

function Lightbox(){

    const[img, setImg] =useState("/images/image-product-1.jpg")

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
    function handleClick(event){
        const newImg = productImages[event.currentTarget.id]
        setImg(newImg)
    }

    return(
        <>
        <img className="mainImg"src={img} />     
        <div className="light-box">
        {thumbnailImages.map((img,index)=> <img className="thumbnail" src={img} key={index} id={index} onClick={handleClick}></img>)}
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