import React, { Component } from 'react';
import '../EstudiantesDestacados.css';
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

export default class EstudiantesDestacados extends Component{
  render() {
    return(
        <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 estudiantesDestacados">
            <span className="col-xs-1 col-sm-1 col-md-1 col-lg-1 textoEstudiantes">Estudiantes<br/>Destacados</span>
            <ul className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                <li className="estudiante col-xs-1 col-sm-1 col-md-1 col-lg-1">
                    <div className="estudiante">
                        <img className="img-responsive estudiante" src={estudiante1} alt=""/>
                    </div>
                </li>
                <li className="estudiante col-xs-1 col-sm-1 col-md-1 col-lg-1">
                    <div className="estudiante">
                        <img className="img-responsive estudiante" src={estudiante2} alt=""/>
                        </div>
                </li>
                <li className="estudiante col-xs-1 col-sm-1 col-md-1 col-lg-1">
                    <div className="estudiante">
                        <img className="img-responsive estudiante" src={estudiante3} alt=""/>
                    </div>
                </li>
                <li className="estudiante col-xs-1 col-sm-1 col-md-1 col-lg-1">
                    <div className="estudiante">
                        <img className="img-responsive estudiante" src={estudiante4} alt=""/>
                    </div>
                </li>
                <li className="estudiante col-xs-1 col-sm-1 col-md-1 col-lg-1">
                    <div className="estudiante">
                        <img className="img-responsive estudiante" src={estudiante5} alt=""/>
                    </div>
                </li>
                <li className="estudiante col-xs-1 col-sm-1 col-md-1 col-lg-1">
                    <div className="estudiante">
                        <img className="img-responsive estudiante" src={estudiante6} alt=""/>
                    </div>
                </li>
                <li className="estudiante col-xs-1 col-sm-1 col-md-1 col-lg-1">
                    <div className="estudiante">
                        <img className="img-responsive estudiante" src={estudiante7} alt=""/>
                    </div>
                </li>
                <li className="right estudiante-usuario col-xs-1 col-sm-1 col-md-1 col-lg-1 col-xs-offset-1 col-sm-offset-1 col-md-offset-1 col-lg-offset-1">
                    <div className="estudiante">
                        <img className="img-responsive estudiante" src={estudiante11} alt=""/>
                    </div>
                </li> 
            </ul>
            <div className="btn-group show-on-hover pull-right boton col-xs-1 col-sm-1 col-md-1 col-lg-1" >
                <span type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown">
                    <span className="caret"></span>
                </span>
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