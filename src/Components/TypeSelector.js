import React, { Component } from "react"
import "./TypeSelector.css"

class TypeSelector extends Component {
	constructor(props) {
		super(props)

		this.state = {}
	}

	render() {
		return (
			<div className="select-container">
				<select value={this.props.val} onChange={this.props.changeHandler}>
					<option>Length</option>
					<option>Area</option>
					<option>Volume</option>
					<option>Mass</option>
					<option>Time</option>
					<option>Temperature</option>
				</select>
			</div>
		)
	}
}

export default TypeSelector
