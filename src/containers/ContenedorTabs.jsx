import React, {Component} from 'react';
import ElementosTagChat from "../components/ElementosTagChat";
import ChatAlumnos from "../components/ChatAlumnos";
import '../ContenedorTabs.css';
import Caracteres from '../components/Caracteres.jsx';
import estudiante1 from "../img/alumnoDestacado1.jpg";
import estudiante2 from "../img/alumnoDestacado2.jpeg";
import '../App.css';


export default class ContenedorTabs extends Component{
    constructor(props) {
        super(props);


    this.state = {
        contador: 140,
         usuarios: [
            {
                foto: 'https://storage.googleapis.com/gweb-uniblog-publish-prod/static/blog/images/google-200x200.7714256da16f.png',
                nombre: '@zitle',
                comentario: 'Hola, probando',
                pregunta: true,
                mencion: true,
                likes:0
           }
        ]
    }

    this.actualizarContador = this.actualizarContador.bind(this);
    this.agregarComentario = this.agregarComentario.bind(this);
    this.imprimir = this.imprimir.bind(this);



}

    actualizarContador(e){
        const valorInput = e.target.value.length;
        let valorEstado = this.state.contador;
        valorEstado = 140 - valorInput;
         this.setState({
            contador: valorEstado
        })
        console.log(valorEstado);
        this.obtenerValorTexto(e);
    }


    obtenerValorTexto(e){
      let valorTexto = e.target.value;
      let booleanos = true;
         console.log("This is the val " +valorTexto);
        this.setState({
            mensaje:valorTexto,
            pregunta: booleanos,
            mencion: booleanos
        })

        console.log(this.state) //Aquí se actualiza el estado.
     }




    agregarComentario (e) {
        let comentariosGuardados = this.state.usuarios;
        //console.log(comentariosGuardados);

        // console.log("This is the message: " + this.state.mensaje);
        let mensajePregunta = this.state.mensaje;
        let validarMensajePregunta = (mensajePregunta.charAt(mensajePregunta.length-1) == "?") ? comentariosGuardados.pregunta = true : false
        let validarMensajeMencion = (mensajePregunta.charAt(mensajePregunta.length[0]) == "@") ? comentariosGuardados.mencion = true : false
        colorPregunta:validarMensajePregunta = true ? "text-primary" : 'no'
        console.log(validarMensajePregunta);
        console.log(validarMensajeMencion);

        comentariosGuardados.unshift(
          {foto: 'https://storage.googleapis.com/gweb-uniblog-publish-prod/static/blog/images/google-200x200.7714256da16f.png',
           nombre:'Zitle',
          comentario: this.state.mensaje,
          pregunta: this.state.pregunta,
          mencion: this.state.mencion});
         console.log(comentariosGuardados);
         this.setState ({
           usuarios: comentariosGuardados
        })
         console.log(this.state.usuarios);
         localStorage.setItem('usuarios', JSON.stringify(comentariosGuardados));
         
    }
    
    
     componentDidMount() {
        let obteniendoUsuarios = localStorage.getItem("usuarios");
        const convertirUsuariosAObjeto = JSON.parse(obteniendoUsuarios);
        this.setState({
            usuarios: convertirUsuariosAObjeto || [] //cuando no tenga nada en mi localstorage, que mande un arreglo vacio por defecto.  
        });
    }
    
    
    imprimir(e){
      let tecla = e.keyCode;
      tecla != 13 ? this.obtenerValorTexto(e):this.agregarComentario();
        
      console.log(tecla);
      this.actualizarContador(e);   
    }
    


    openLeftMenu() {
      document.getElementById("leftMenu").style.display = "block";
    }

    closeLeftMenu() {
    document.getElementById("leftMenu").style.display = "none";
    }


    // filtrarPreguntas(e){
    //   let texto = this.state.usuarios[i].comentario;
    //   console.log(texto);
    //
    //   for (i=0; i < texto.lenght ; i++) {
    //
    //   }
    //
    //   let textoSeparado = texto.substr(0, 2);
    //  alert(textoSeparado);
    //
    // }


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
				        </div>
						<div className="row">
                                <ul>
                                    <li className="checkbox col-xs-3 col-sm-3 col-md-3 col-lg-3 listaCheckbox">
                                        <input type="checkbox" id="test8" disabled="" />
                                        <label className="listaCheckbox" for="test8">Enviar</label>
                                    </li>
                                    <li className="checkbox col-xs-3 col-sm-3 col-md-3 col-lg-3 listaCheckbox">
                                        <input type="checkbox" id="test8" disabled="" />
                                        <label className="listaCheckbox" for="test8">Badge</label>
                                    </li>
                                    <li className="checkbox col-xs-3 col-sm-3 col-md-3 col-lg-3 listaCheckbox">
                                        <input type="checkbox" id="test8" disabled="" />
                                        <label className="listaCheckbox" for="test8">Encuesta</label>
                                    </li>
                            </ul>
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
