import React, { Component } from 'react';
import '../ContenedorDescripcion.css';

export default class TextoDescripcion extends Component{
  render() {
    return(
        <div className="">
          <div className="panel with-nav-tabs panel-default hidden-xs hidden-sm">
            <div className="panel-heading">
              <ul className="nav nav-tabs">
                <li className="active"><a href="#tab1default" data-toggle="tab"><strong>Descripcion</strong></a></li>
              </ul>
            </div>
            <div className="panel-body">
              <div className="tab-content">
                <div className="tab-pane fade in active" id="tab1default">
                  <div className=" row">
                    <h1 className="col-xs-9 col-sm-9 col-md-9 col-lg-9">
                      <strong>Temario de la clase</strong>
                    </h1>
                    <span className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                      <div className="row">
                        <h5 className="padding-platzinueva"><a>Video en nueva ventana</a></h5>
                        <h3 className="padding-platzihashtag"><em>#platzi</em></h3>
                      </div>
                    </span>
                  </div>
                    <h2 className="padding-right">
                      Todos los jueves aquí transmitimos Platzi Live.
                    </h2>
                    <p>
                      <h4 className = "text-muted">¿Quieres saber que hay esta semana? Suscríbete a nuestra lista <a href="https://platzi.com/hola/">aquí</a></h4>
                      <h4 className = "text-muted">¿Quieres proponer un tema? Usa el chat de la derecha o escríbenos a cursos@platzi.com</h4>
                    </p>
                    <h2>Nuestros horarios</h2>
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
    )

  }
}
