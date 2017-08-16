import React,{Component} from 'react';

export default class ElementoEstrella extends Component {
	constructor(props){
		super(props);

		this.state = {
			colorEstrella:"color-gris",
			contador:0
		};
		this.actualizarEstrella = this.actualizarEstrella.bind(this);
	}
	actualizarEstrella(e) {
		let contador = 0;
		console.log(e.target);
		this.setState({
			colorEstrella:"color-amarillo"
		});
		// this.state ? this.state.removeClass('color-amarillo') : this.state.addClass('color-amarillo');
	}
	render(){
		return(
				<i className={`fa fa-star ${this.state.colorEstrella}`}  aria-hidden="true" onClick={this.actualizarEstrella}></i>
			);
	}
}