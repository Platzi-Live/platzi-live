import React, {Component} from 'react';
import ElementosTagChat from "../components/ElementosTagChat";
import ChatAlumnos from "../components/ChatAlumnos";
import '../ContenedorTabs.css';
import Caracteres from '../components/Caracteres.jsx';

export default class ContenedorTabs extends Component{
    constructor(props) {
        super(props);


    this.state = {
        contador: 140,
         usuarios: [
            {
                foto: 'https://storage.googleapis.com/gweb-uniblog-publish-prod/static/blog/images/google-200x200.7714256da16f.png',
                nombre: '@zitle',
                comentario: 'Hola, probando'
           },
            {
                foto: 'https://storage.googleapis.com/gweb-uniblog-publish-prod/static/blog/images/google-200x200.7714256da16f.png',
                nombre: '@adri',
                comentario: 'Ya me quiero dormir :('
           }
        ]
    }

    // this.actualizarContador = this.actualizarContador.bind(this);
    this.agregarComentario = this.agregarComentario.bind(this);
    this.imprimir = this.imprimir.bind(this);


}

    // actualizarContador(e){
    //     const valorInput = e.target.value.length;
    //
    //
    //     let valorEstado = this.state.contador;
    //     valorEstado = 140 - valorInput;
    //      this.setState({
    //         contador: valorEstado
    //     })
    //     console.log(valorEstado);
    //     this.obtenerValorTexto(e);
    // }


     obtenerValorTexto(e){
      let valorTexto = e.target.value;
         console.log("This is the val " +valorTexto);
        this.setState({
            usuario:valorTexto
        })
        console.log(this.state) //Aquí se actualiza el estado.
     }


    agregarComentario () {
        let comentariosGuardados = this.state.usuarios;
        //console.log(comentariosGuardados);
        console.log("This is the user: " +this.state.usuario);

        comentariosGuardados.unshift({foto:'https://storage.googleapis.com/gweb-uniblog-publish-prod/static/blog/images/google-200x200.7714256da16f.png', nombre:'Zitle', comentario: this.state.usuario});
         console.log(comentariosGuardados);
         this.setState ({
           usuarios: comentariosGuardados
        })
         console.log(this.state.usuarios);
        //  imprimir(e);
    }



    openLeftMenu() {
      document.getElementById("leftMenu").style.display = "block";
    }

    closeLeftMenu() {
    document.getElementById("leftMenu").style.display = "none";
    }

    imprimir(e){
      let tecla = e.keyCode;
      tecla != 13 ? this.obtenerValorTexto(e):this.agregarComentario();

      console.log(tecla);
    }

  render() {
  	
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
				            <textarea id="txtArea"  placeholder="Escribe una nota" maxLength="140" onKeyUp={this.imprimir}>
				            </textarea>
				            <div className="pull-right">
				            	<Caracteres pintar={this.state.contador}/>
				           </div>
				           <a href="#" className="w3-bar-item w3-button" onClick={this.agregarComentario}>Enlace2</a>
				        </div>
						<div className="row">
							<div className="col-sm-12">
								
							</div>
						</div>
						<div className="row">
							<ChatAlumnos comentarios = {this.state.usuarios}/>
						</div>
				    </div>
				</div>
			</div>
    	</div>
    	);
  }
}
