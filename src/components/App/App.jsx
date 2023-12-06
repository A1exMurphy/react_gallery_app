import React from 'react';
import { useState, useEffect } from 'react';
import Axios from 'axios';
import "./App.css"
import CompileGalleryList from '../GalleryList/GalleryList';


function App() {


      // console.log(gallery, "gallery state")
    return (
      <div>
        <header>
          <h1>React Gallery</h1>
        </header>

        <p>The gallery goes here!</p>
        
        <CompileGalleryList data-testid="galleryList"/>
        
      </div>
    );
}

export default App;
