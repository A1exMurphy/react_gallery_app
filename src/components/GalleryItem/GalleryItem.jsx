import { useState } from "react"
import Axios from "axios"


function HandleGalleryItem({galleryObject}) {

//function to update like count in database:
    const likeImage = () => {
        console.log("is buttoning", galleryObject.id)
        let imageID = galleryObject.id;
        // console.log(imageID)
    //PUT route to update like count
        Axios.put(`/gallery/like/${galleryObject.id}`)
        .then(response => {
            console.log("likes was updated")
        })
        .catch(error => {
            console.error("likes update error", error);
        })
        }

    

//function to toggle on click between image and description:
    const toggleImage = () => {
        // console.log("galleryObject.id", galleryObject.id)
    }

    return(
        <>
        
            <div  data-testid="toggle" onClick={toggleImage} >
            <img data-testid="galleryItem" src={galleryObject.url}/>
            
            <p>{galleryObject.title}
            <button data-testid="like" onClick={likeImage}>Like</button></p>
            </div>
        
        </>
        
    )
}


export default HandleGalleryItem