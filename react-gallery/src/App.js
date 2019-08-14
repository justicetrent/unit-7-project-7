import React from 'react';
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



class Travel extends Component {
    state = {
        locations: [
            {
                Topic1:'New York City',
                

            },
            {
                Topic2:'Shanghai',
            },
            {
                Topic3:'St. Tropez',
            }
        ]
    }

}


export default App
