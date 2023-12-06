import HandleGalleryItem from "../GalleryItem/GalleryItem"

function CompileGalleryList({gallery}) {
    // console.log(gallery, "gallery")
    return(
        <>
        {gallery.map(galleryObject => (
            
         <HandleGalleryItem key={galleryObject.id} galleryObject={galleryObject}/>))}
         
        </>
    )
}


export default CompileGalleryList