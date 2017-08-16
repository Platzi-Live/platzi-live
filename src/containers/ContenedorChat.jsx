
import React, { Component } from 'react';
import EstudiantesDestacados from '../components/EstudiantesDestacados';
import ContenedorTabs from './ContenedorTabs.jsx';


export default class ContenedorChat extends Component {
  constructor(props){
    super(props);

    this.state = [
      usuario: {
        nombre:
      }
    ]


  render() {
    return(
			<div className="col-md-offset-7 col-xs-12 col-sm-12 col-md-5 col-lg-5 moviento-fijo">
        		<div className="row">
        			<EstudiantesDestacados />
        		</div>
				<ContenedorTabs />
			</div>
    	)
  }
}
