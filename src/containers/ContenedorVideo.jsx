import React, { Component } from 'react';
import Iframe from 'react-iframe';
import Navbar from '../components/Navbar.jsx';
import ContenedorDescripcion from './ContenedorDescripcion.jsx';
import '../ContenedorVideo.css';


export default class ContenedorVideo extends Component{
  render() {
    return(
         <div className= "col-xs-12 col-md-7 col-lg-7 col-xl-7" id="iframe">
           <Navbar />
               <div className="embed-responsive embed-responsive-16by9">
                    <Iframe url="https://www.youtube.com/embed/yJSXmeBU8hs?list=PLa28R7QEiMblmIF4y_ydG4eRr5K4TcVyk"
                    className="embed-responsive-item"
                    allowFullScreen/>
               </div>
               <ContenedorDescripcion />
           </div>


    )
  }
}
