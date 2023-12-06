import { useState } from "react"
import Axios from "axios"


function HandleGalleryItem({galleryObject}) {

//function to update like count in database:
//create state in order to render uptodate like count

    const [likeCount, setLikeCount] = useState(galleryObject.likes)

    const likeImage = () => {
        // console.log("is buttoning", galleryObject.id)
        setLikeCount(likeCount)
        // console.log(imageID)

    //PUT route to update like count
        Axios.put(`/gallery/like/${galleryObject.id}`)
        .then(response => {
            // console.log("likes was updated", response)
        })
        .catch(error => {
            console.error("likes update error", error);
        })
        }

    

//function to toggle on click between image and description:
//creates a piece of state to toggle between two renders
    const ToggleImage = () => {
        const[imageDisplay, setImageDisplay] = useState(true);

        const changeDisplay = () => {
            setImageDisplay(!imageDisplay)
        };
//onClick runs function to change state to not its current boleen value
            return(
                   <div  data-testid="toggle" onClick={changeDisplay} >
                    {imageDisplay ? (
                        <div>
                         <img data-testid="galleryItem" src={galleryObject.url}/>
                         </div>
                    ):(
                        <div>
                          {galleryObject.description}
                        </div>
                    )
                    }
                   </div>

            )
        }

    return(
        <>
            <ToggleImage />    
            <p>{galleryObject.title}
            <button data-testid="like" onClick={likeImage}>Like</button>{galleryObject.likes}</p>
        </>
        
    )
}


export default HandleGalleryItem