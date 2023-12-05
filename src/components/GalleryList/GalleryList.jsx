import HandleGalleryItem from "../GalleryItem/GalleryItem"

function CompileGalleryList({gallery}) {
    console.log(gallery, "gallery")
    return(
        <>
        {gallery.map(galleryObject => (
            // <img src={galleryObject.url}/>
            
         <HandleGalleryItem key={galleryObject.id} galleryObject={galleryObject}/>))}
            {/* // <p>{galleryObject.title}</p>  */}
         
        </>
    )
}


export default CompileGalleryList