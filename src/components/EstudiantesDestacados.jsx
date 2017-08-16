import React, { Component } from 'react';
import '../EstudiantesDestacados.css';
import Estudiante from '../components/Estudiante';

import estudiante1 from '../img/alumnoDestacado1.jpg';
import estudiante2 from '../img/alumnoDestacado2.jpeg';
import estudiante3 from '../img/alumnoDestacado3.jpg';
import estudiante4 from '../img/alumnoDestacado4.jpg';
import estudiante5 from '../img/alumnoDestacado5.jpg';
import estudiante6 from '../img/alumnoDestacado6.jpg';
import estudiante7 from '../img/alumnoDestacado7.jpg';
import estudiante8 from '../img/imagen1.jpg';
import estudiante9 from '../img/imagen3.jpg';
import estudiante10 from '../img/imagen5.jpg';
import estudiante11 from '../img/imagen2.png';

const avatar = [
    {
        imgUrl: estudiante1
    },
    {
        imgUrl: estudiante2
    },
    {
        imgUrl: estudiante3
    },
    {
        imgUrl: estudiante4
    },
    {
        imgUrl: estudiante5
    },
    {
        imgUrl: estudiante6
    },
    {
        imgUrl: estudiante7
    },
    {
        imgUrl: estudiante8
    },
    {
        imgUrl: estudiante9
    },
    {
        imgUrl: estudiante10
    },  
]

export default class EstudiantesDestacados extends Component{
    constructor(props){
        super(props);
    }
    render() {
    return(
        <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 estudiantesDestacados hidden-xs hidden-sm">
            <span className="col-xs-1 col-sm-1 col-md-1 col-lg-1 textoEstudiantes">Estudiantes<br/>Destacados</span>
            <ul className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                {avatar.map((img, i) =>{
                    return <Estudiante key={i} img={img.imgUrl} />
                    
                })}
            </ul>
            <div className="btn-group show-on-hover pull-right boton col-xs-1 col-sm-1 col-md-1 col-lg-1" >
                <div className="estudiante">
                    <span type="" className=" btn-default dropdown-toggle" data-toggle="dropdown">
                        <img className="img-responsive estudiante" src={estudiante11} alt=""/>
                        <span className="caret"></span>
                    </span>
                </div> 
                
                <ul className="dropdown-menu" role="menu">
                    <li><a href="#"><span className="glyphicon glyphicon-user"></span> Mi perfil(Freddy Vega)</a></li>
                    <li><a href="#"><span className="glyphicon glyphicon-comment"></span> Mensajes Directos</a></li>
                    <li><a href="#"><span className="glyphicon glyphicon-edit"></span> Mi suscripción</a></li>
                    <li><a href="#"><span className="glyphicon glyphicon-new-window"></span> Salir</a></li>
                </ul>
            </div>
        </div>
    );
  }
}
