import React from 'react';

import NumberInput from './number-input';
import Output from './output';

export default class RateCalculator extends React.Component {
    constructor(props) {
        super(props);
		this.state = {
			dayRate:'',
			hours:''
		}
	}
	
	calculateRate() {
		return this.state.dayRate / this.state.hours;
	}

    render() {
        const rate = (this.state.dayRate && this.state.hours) ? 0 : this.calculateRate();
        return (
            <form>
                <NumberInput id="day-rate" label="Day rate" min={0} max={5000} onChange={(dayRate) => this.setState({dayRate:dayRate}) } />
                <NumberInput id="hours" label="Hours" min={1} max={12} onChange={(hours) => this.setState({hours:hours}) } />
                <Output id="hourly-rate" label="Hourly rate" value={rate.toFixed(2)}/>
            </form>
        );
    }
}

