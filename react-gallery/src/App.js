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
class Travel extends Component {
    //defines the initial state inside of the app class
    constructor() {
        super();
        this.state = {
            locations: [] //represents a collection of objects that will be changed and be updated by components 
            
            
        }
    }
    //component did mount gets called as soon as a external component gets mounted to the DOM
    componentDidMount() { 
        //inital promise made by fetch once data is completely loaded. 
        fetch('')
        //The .then() methods are callbacks that takes the promise made by fetch to return their own promises. 
        .then(response => response.json) // function that takes the response, and returns that same response in json format
        .then(responseData => {         // takes the response that is now in json format and returns 
            this.setState();
        })
    }

   

}


export default App
