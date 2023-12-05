

function CompileGalleryList({gallery}) {

    return(
        <>
        {gallery.map(image => (
            // <img src={image.url}/>
            <p>{image.title}</p>

        ))}
        </>
    )
}


export default CompileGalleryList