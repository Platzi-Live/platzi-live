import React, {Component} from 'react';
import ElementosTagChat from "../components/ElementosTagChat";
import ChatAlumnos from "../components/ChatAlumnos";
import '../ContenedorTabs.css';
import Caracteres from '../components/Caracteres.jsx';

export default class ContenedorTabs extends Component{
    constructor(props) {
        super(props);
        
        
     
    this.state = {
        contador: 140
    }
    
    this.actualizarContador = this.actualizarContador.bind(this);
    
}
    
    actualizarContador(e){
        const valorInput = e.target.value.length; 
       
        
        let valorEstado = this.state.contador; 
        valorEstado = 140 - valorInput;
         this.setState({
            contador: valorEstado
        })
        console.log(valorEstado);
    }
    
    
    
    /* contar(e) {
       let contadorCaracteres = 0;
       const maximoCaracteres = 140;
       const mensajeTextArea = document.getElementById("txtArea");
       const cantidadCaracteres = document.getElementById("caracteres");


       contadorCaracteres = mensajeTextArea.value.length;
       const totalCaracteres = maximoCaracteres - contadorCaracteres;
       cantidadCaracteres.innerText = totalCaracteres;

    }*/

    openLeftMenu() {
      document.getElementById("leftMenu").style.display = "block";
    }

    closeLeftMenu() {
    document.getElementById("leftMenu").style.display = "none";
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
                        <li className="active  hidden-lg hidden-xl">
                          <a href="#tab1primary" data-toggle="tab" onClick={this.openLeftMenu}>
                            <i className="fa fa-bars " aria-hidden="true"></i>
                          </a>
                        </li>
				                <li className="active"><a href="#tab1primary" data-toggle="tab">Notas</a></li>
				                <li className="hidden-xs hidden-sm"><a href="#tab2primary" data-toggle="tab">Mejores</a></li>
				                <li className="hidden-xs hidden-sm"><a href="#tab3primary" data-toggle="tab">Preguntas</a></li>
				                <li className="hidden-xs hidden-sm"><a href="#tab3primary" data-toggle="tab">Enlaces</a></li>
				            </ul>
				    </div>
            <div className="w3-sidebar w3-bar-block w3-card-2 w3-animate-left" id="leftMenu">
              <button onClick={this.closeLeftMenu} className="w3-bar-item w3-button w3-large">Close &times;</button>
              <a href="#" className="w3-bar-item w3-button">Notas</a>
              <a href="#" className="w3-bar-item w3-button">Preguntas</a>
              <a href="#" className="w3-bar-item w3-button">Archivos</a>
              <a href="#" className="w3-bar-item w3-button">Enlaces</a>
            </div>
				    <div className="panel-body">
				        <div className="tab-content">
				            <textarea id="txtArea"  placeholder="Escribe una nota" maxLength="140" onKeyUp={this.actualizarContador}>
				            </textarea>
				            <div className="pull-right">
				            	<Caracteres pintar={this.state.contador}/>
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
