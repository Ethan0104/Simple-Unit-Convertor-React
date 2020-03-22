import React, { Component } from "react"
import "./ModeArea.css"

class ModeArea extends Component {
	makeOption = function(x) {
		return <option key={x}>{x}</option>
	}
	render() {
		let content = () => {
			if (this.props.position === "left") {
				return (
					<div className={"unit-select-container unit-selector-left"}>
						<select>{this.props.list.map(this.makeOption)}</select>
						<input onChange={this.props.changeHandler}></input>
					</div>
				)
			} else {
				return (
					<div className={"unit-select-container unit-selector-right"}>
						<select>{this.props.list.map(this.makeOption)}</select>
						<input readOnly></input>
					</div>
				)
			}
		}
		return content()
	}
}

export default ModeArea
