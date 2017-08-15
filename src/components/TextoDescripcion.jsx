import React, { Component } from 'react';
import '../ContenedorDescripcion.css';

export default class TextoDescripcion extends Component{
  render() {
    return(
      <div className="row">
        <div className="col-xs-12 col-md-7 col-md-7 col-lg-7">

      <div className="">

          <div className="panel with-nav-tabs panel-default">
            <div className="panel-heading">
              <ul className="nav nav-tabs">
                <li className="active"><a href="#tab1default" data-toggle="tab">Descripcion</a></li>
              </ul>
            </div>
        </div>
      </div>
      <div className="panel-body">
        <div className="tab-content">
          <div className="tab-pane fade in active padding-right" id="tab1default">
            <div className=" row">
              <h1 className="col-xs-12 col-md-12 col-md-8 col-lg-8">Temario de la clase</h1>
              <hr className="text-muted"/>
            </div>
            <div className="row">
              <h2 className="padding-right">Todos los jueves aquí transmitimos Platzi Live.</h2>
            </div>
            <div className="row">
              <p>
                <h4 className = "text-muted">¿Quieres saber que hay esta semana? Suscríbete a nuestra lista <a href="https://platzi.com/hola/">aquí</a></h4>
                <h4 className = "text-muted">¿Quieres proponer un tema? Usa el chat de la derecha o escríbenos a cursos@platzi.com</h4>
              </p>
            </div>
            <div className="row">
              <h2>Nuestros horarios</h2>
            </div>
            <div className="row">
              <p>
                <h4 className = "text-muted">Mex / Gua / Col / Per / Pan / Ecu: 3:00 p.m.</h4>
                <h4 className = "text-muted">España: 10:00 p.m.</h4>
                <h4 className = "text-muted">Chi / Arg / Uru: 5:00 p.m.</h4>
                <h4 className = "text-muted">Bolivia: 4:00 p.m.</h4>
                <h4 className = "text-muted">Venezuela: 3:30 p.m.</h4>
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
    );
  }
}
