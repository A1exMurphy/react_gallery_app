


function HandleGalleryItem(galleryObject) {
    console.log(galleryObject, "galleryObject")
    return(
        <>
        {gallery.map(galleryObject => (
            // <img src={galleryObject.url}/>
            
            <p>{galleryObject.title}</p>
        ))}
        </>
    )
}


export default HandleGalleryItem