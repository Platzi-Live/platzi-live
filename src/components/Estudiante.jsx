import React, { Component } from 'react';
import '../EstudiantesDestacados.css';

class Estudiante extends Component{
    render() {
        return (
            <li className="estudiante col-xs-1 col-sm-1 col-md-1 col-lg-1">
                    <div className="estudiante">
                        <img className="img-responsive estudiante" src={this.props.img} alt=""/>
                    </div>    
            </li>
        );
    }
}

export default Estudiante;