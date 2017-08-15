import React, {Component} from 'react';
import ElementosTagChat from "../components/ElementosTagChat";
import ChatAlumnos from "../components/ChatAlumnos";
import '../ContenedorTabs.css';

export default class ContenedorChat extends Component{

     contar(e) {
       let contadorCaracteres = 0;
       const maximoCaracteres = 140;
       const mensajeTextArea = document.getElementById("txtArea");
       const cantidadCaracteres = document.getElementById("caracteres");


       contadorCaracteres = mensajeTextArea.value.length;
       const totalCaracteres = maximoCaracteres - contadorCaracteres;
       cantidadCaracteres.innerText = totalCaracteres;

    }
    
    
  render() {
  	const arregloTags = [
	  	{
	  		titulo: 'Notas'
	  	},
	  	{
	  		titulo:'Menciones'
	  	},
	  	{
	  		titulo:'Mis Notas'
	  	}
  	]
    return(
    	<div>
			<div className="row">
				<div className="panel with-nav-tabs panel-primary">
				    <div className="panel-heading">
				            <ul className="nav nav-tabs">
				                <li className="active"><a href="#tab1primary" data-toggle="tab">Notas</a></li>
				                <li><a href="#tab2primary" data-toggle="tab">Mejores</a></li>
				                <li><a href="#tab3primary" data-toggle="tab">Preguntas</a></li>
				                <li><a href="#tab3primary" data-toggle="tab">Enlaces</a></li>
				            </ul>
				    </div>
				    <div className="panel-body">
				        <div className="tab-content">
				            <textarea id="txtArea"  placeholder="Escribe una nota" maxLength="140" onKeyUp={this.contar}>
				            </textarea>
				            <div className="pull-right">
				            	<p id="caracteres">140</p>
				           </div>
				        </div>
						<div className="row">
							<div className="col-sm-12">
								<ul className="nav nav-tabs">
									{arregloTags.map((item,indice) =>
										<ElementosTagChat textoTagChat={item.titulo}
										key={indice}/>)};
								</ul>
							</div>
						</div>
						<div className="row">
							<ChatAlumnos />
						</div>
				    </div>
				</div>
			</div>
    	</div>
    	);
  }
}