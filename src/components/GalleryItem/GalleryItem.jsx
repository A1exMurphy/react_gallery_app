


function HandleGalleryItem({galleryObject}) {

    const fuckoff = () => {
        console.log("galleryObject.id", galleryObject.id)
    }

    return(
        <>
        
            <div onClick={fuckoff} >
            <img src={galleryObject.url}/>
            
            <p>{galleryObject.title}</p>
            </div>
        
        </>
        
    )
}


export default HandleGalleryItem