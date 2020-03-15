import React, { Component } from "react"
import TypeSelector from "./TypeSelector"

class UnitConverter extends Component {
	constructor(props) {
		super(props)

		this.state = {
			mode: "Length"
		}
	}

	modeChangeHandler = event => {
		this.setState({
			mode: event.value
		})
	}

	render() {
		return (
			<div>
				<TypeSelector
					val={this.state.mode}
					changeHandler={this.modeChangeHandler}
				></TypeSelector>
			</div>
		)
	}
}

export default UnitConverter
