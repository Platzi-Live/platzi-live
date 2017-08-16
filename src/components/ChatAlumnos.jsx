import React,{Component} from 'react';
import FotoUno from "../img/imagen2.png";
import ElementoEstrella from "./ElementoEstrella";
import '../ChatAlumnos.css';
import '../App.css';

export default class ChatAlumnos extends Component{
	constructor(props){
		super(props);
		this.state = {
			colorPregunta:"text-muted"
		}
	}
	render(){
		return(
				<div className="col-sm-12 scroll" styles={this.state.colorPregunta}>
					{this.props.comentarios.map((item,indice)=>{
						return(
							<div className="row">
								<div className="col-xs-2 col-md-2">
									<a href="https://platzi.com/@yakujjina/" target="_blank"><img className="imagenesChat" src={FotoUno} alt="Usuario"/></a>
								</div>
								<div className="col-xs-8 col-md-8">
									   <a data-username="@PlatziAdmin" id="usuario"><p className="text-primary user-hover">@PlatziAdmin</p></a>
									<p>{item.comentario}</p>
								</div>
								<div id="iconoEstrella" className="col-xs-2 col-md-2 fila-icono" >
									<ElementoEstrella />
								</div>
							</div>
						);
					})};
				</div>
			);
		}
}