import "../css/MainPage.css"
import Lightbox from "../components/Lightbox";
import Button from "../components/Buttons"
function MainPage(){

    function onChange(){
        return
    }


    return(
    <div className="container"> 
        <div className="flex-left-main-page">
        
               <Lightbox />
        </div>

        <div className="flex-right">
            <h3>SNEAKER COMPANY</h3>
            <h1>Fall Limited Sneakers</h1>
            <p className="description">these low-profile sneakers are your perfect casual wear
                companion. Featuring durable rubber outer sole, they'll
                withstand everything the weather can offer.
            </p>
            <div className="prices">
                <p className="original-price">$125.00</p>
                <p className="discount">50%</p>
            </div>
            <p className="old-price">250.00</p>
            <Button />
          


        </div>
    </div>)
}

export default MainPage;