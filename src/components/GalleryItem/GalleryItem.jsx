import { useState } from "react"
import Axios from "axios"



function HandleGalleryItem({galleryObject, getGalleryItems}) {
    const[imageDisplay, setImageDisplay] = useState(true);

    const changeDisplay = () => {
        setImageDisplay(!imageDisplay)
    };

    const likeImage = () => {
        // console.log("is buttoning", galleryObject.id)

        // console.log(imageID)

    //PUT route to update like count
        Axios.put(`/gallery/like/${galleryObject.id}`)
        .then(response => {
            getGalleryItems()
            // console.log("likes was updated", response)
        })
        .catch(error => {
            console.error("likes update error", error);
        })
        }

    


    return(
        <div  data-testid="galleryItem">
            <div  data-testid="toggle" onClick={changeDisplay} >
            {imageDisplay ? (
                <div>
                <img src={galleryObject.url}/>
                </div>
            ):(
                <div data-testid="description">
                {galleryObject.description}
                </div>
            )
            }
            <p>{galleryObject.title}</p>
            </div>
            <button data-testid="like" onClick={likeImage}>Like</button>{galleryObject.likes}
        </div>



        
    )
}


export default HandleGalleryItem