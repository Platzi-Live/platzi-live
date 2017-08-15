import React, {Component} from 'react';
import '../App.css'

export default class ElementosTagChat extends Component {
	render() {
		return(
				<div className="col-xs-3  col-md-3 estiloTags">
					<li className="active color-azul texto-centrado">
						<a href="#" className="texto-blanco">{this.props.textoTagChat}</a>
					</li>
				</div>
			);
	}
}