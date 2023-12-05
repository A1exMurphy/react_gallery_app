import HandleGalleryItem from "../GalleryItem/GalleryItem"

function CompileGalleryList({gallery}) {
    console.log(gallery, "gallery")
    return(
        <>
        {gallery.map(galleryObject => (
            // <img src={galleryObject.url}/>
            
            <p>{galleryObject.title}</p>
        ))}
        </>
    )
}
// <HandleGalleryItem gallery={gallery}/>

export default CompileGalleryList