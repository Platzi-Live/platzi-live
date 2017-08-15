import React, { Component } from 'react';
import Iframe from 'react-iframe';
import Navbar from '../components/Navbar.jsx';


export default class ContenedorVideo extends Component{
  render() {
    return(
  
        
        
        <div className="row ">
           <div className= "col-sm-12 col-md-8 col-lg-8 col-xl-8">
           <Navbar />
               <div className="embed-responsive embed-responsive-16by9">
                    <Iframe url="https://www.youtube.com/embed/yJSXmeBU8hs?list=PLa28R7QEiMblmIF4y_ydG4eRr5K4TcVyk"
                    className="embed-responsive-item"
                    allowFullScreen/>
               </div>
           </div>
        </div>
    );
  }
}
