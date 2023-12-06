import { useState } from "react"
import Axios from "axios"


function HandleGalleryItem({galleryObject}) {

//function to update like count in database:
    const likeImage = () => {
        // console.log("is buttoning")
    //PUT route to update like count
        Axios()

    }

//function to toggle on click between image and description:
    const toggleImage = () => {
        // console.log("galleryObject.id", galleryObject.id)
    }

    return(
        <>
        
            <div onClick={toggleImage} >
            <img src={galleryObject.url}/>
            
            <p>{galleryObject.title}
            <button onClick={likeImage}>Like</button></p>
            </div>
        
        </>
        
    )
}


export default HandleGalleryItem