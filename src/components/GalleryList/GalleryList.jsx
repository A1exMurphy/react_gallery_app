import HandleGalleryItem from "../GalleryItem/GalleryItem"
import { useState, useEffect } from 'react';
import Axios from "axios";


function CompileGalleryList() {
    // console.log(gallery, "gallery")

    let [gallery, setGallery] = useState([]);

    useEffect(() => {
      getGalleryItems()
    }, [])

    const getGalleryItems = () => {
      Axios.get('/gallery')
      .then(response => {
        console.log(response.data, "App recieved GET")
        setGallery(response.data)
      })
      .catch(err => {
        alert('error in GET gallery')
        console.log(err);
      })
    }
    return(
        <div  data-testid="galleryList">

        {gallery.map(galleryObject => (
            
         <HandleGalleryItem key={galleryObject.id} galleryObject={galleryObject} getGalleryItems={getGalleryItems}/>))}
         
        </div>
    )
}


export default CompileGalleryList