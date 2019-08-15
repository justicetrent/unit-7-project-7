import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import axios from 'axios'



import apiKey from './config.js'

import Nav from './Components./Nav.js';
import NotFound from './Components./NotFound.js';
import Photo from './Components./Photo.js';
import PhotoList from './Components./PhotoList.js';
import SearchForm from './Components./SearchForm.js';
import Header from './Components./Header.js';
import Index from './Components./Index.js';


// is the main container for my app 
class App extends Component {
    render() {
        return (
           <p>Hello!</p>
        )
   }

    
   

}


export default App
