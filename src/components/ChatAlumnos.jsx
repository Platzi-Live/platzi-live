import React,{Component} from 'react';
import FotoUno from "../img/imagen1.jpg";
import ElementoEstrella from "./ElementoEstrella";
import '../App.css';

export default class ChatAlumnos extends Component{
	render(){
		return(
				<div className="col-sm-12">
					<div className="row scroll">
						<div className="col-xs-2 col-md-2">
							<img className="imagenesChat" src={FotoUno} alt="imagen1"/>
						</div>
						<div className="col-xs-8 col-md-8">
							<p>Rsanchez17</p>
							<p>Hola @Cvander para ver en ka plataform de 
							PlatziLive me gustaria tema de Educación financiera, 
							Educación Legal...¿Cómo vez?</p>
						</div>
						<div id="iconoEstrella" className="col-xs-2 col-md-2 fila-icono" >
							<ElementoEstrella />
						</div>
					</div>
				</div>
			);
	}
}