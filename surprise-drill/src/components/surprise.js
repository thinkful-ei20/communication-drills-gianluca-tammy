import React from 'react';

import SurpriseButton from './surprise-button';
import SurpriseImage from './surprise-image';

export default class Surprise extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			show: false
		};
	}

	// setShow() {
	// 	this.setState({
	// 		show: true
	// 	});
	// }

	render() {
		if(!this.state.show) {
			return <SurpriseButton onClick={() => this.setState({show:true})}/>;
			//return <SurpriseButton onClick={() => this.setShow()}/>;
		}
		return <SurpriseImage />;

	}
}
