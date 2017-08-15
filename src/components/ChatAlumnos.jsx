import React,{Component} from 'react';
import FotoUno from "../img/imagen1.jpg";

export default class ChatAlumnos extends Component{
	render(){
		return(
				<div className="col-sm-12">
								<div className="row">
									<div className="col-xs-2 col-md-2">
										<img className="imagenesChat" src={FotoUno} alt="imagen1"/>
									</div>
									<div className="col-xs-9 col-md-9">
										<p>Rsanchez17</p>
										<p>Hola @Cvander para ver en ka plataform de 
										PlatziLive me gustaria tema de Educación financiera, 
										Educación Legal...¿Cómo vez?</p>
									</div>
									<div className="col-xs-1 col-md-1 fila-icono">
										<i className="fa fa-star" aria-hidden="true"></i>
									</div>
								</div>
				</div>
			);
	}
}