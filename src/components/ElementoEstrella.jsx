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
		let tmp;
		this.setState({
			colorEstrella: this.state.colorEstrella == "color-gris" ? "color-amarillo" :  "color-gris" 
		});
		this.setState({
			contador: this.state.contador ? contador++ : contador--			
		});
			console.log(contador);	
		
		
	}

	render(){
		return(
				<i className={`fa fa-star ${this.state.colorEstrella}`}  aria-hidden="true" onClick={this.actualizarEstrella}></i>
			);
	}
}