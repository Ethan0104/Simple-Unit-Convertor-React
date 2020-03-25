import React, { Component } from "react"
import "./ModeArea.css"

class ModeArea extends Component {
	constructor(props) {
		super(props)

		this.state = {}
	}

	makeOption = function(x) {
		return <option key={x}>{x}</option>
	}
	render() {
		let content = () => {
			if (this.props.position === "left") {
				return (
					<div className={"unit-select-container unit-selector-left"}>
						<select
							value={this.props.unit}
							onChange={this.props.unitChangeHandler}
						>
							{this.props.list.map(this.makeOption)}
						</select>
						<input
							onChange={this.props.valChangeHandler}
							value={this.props.num}
						></input>
					</div>
				)
			} else {
				return (
					<div className={"unit-select-container unit-selector-right"}>
						<select
							value={this.props.unit}
							onChange={this.props.unitChangeHandler}
						>
							{this.props.list.map(this.makeOption)}
						</select>
						<input readOnly value={this.props.num}></input>
					</div>
				)
			}
		}
		return content()
	}
}

export default ModeArea
