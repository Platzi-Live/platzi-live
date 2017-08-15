import React, { Component } from 'react';
import Iframe from 'react-iframe';

export default class ContenedorVideo extends Component{
  render() {
    return(
    <div className="row">
       <div className= "col-sm-8 col-md-8 col-lg-8 col-xl-8">
        <Iframe url="https://www.youtube.com/embed/yJSXmeBU8hs?list=PLa28R7QEiMblmIF4y_ydG4eRr5K4TcVyk" frameborder="0"
        height="450px"
        allowFullScreen/>
       </div>
    </div>
    );
  }
}
