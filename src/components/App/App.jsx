import React from 'react';
import { useState, useEffect } from 'react';
import Axios from 'axios';
import "./App.css"
import CompileGalleryList from '../GalleryList/GalleryList';


function App() {
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

      console.log(gallery, "gallery state")
    return (
      <div>
        <header>
          <h1>React Gallery</h1>
        </header>

        <p>The gallery goes here!</p>
        {gallery&&
        <CompileGalleryList data-testid="galleryList" gallery={gallery}/>
        // {/* <img src="images/goat_small.jpg"/> */}
        }
      </div>
    );
}

export default App;
