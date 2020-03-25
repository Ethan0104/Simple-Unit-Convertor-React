import React, { Component } from "react"
import TypeSelector from "./TypeSelector"
import ModeArea from "./ModeArea"

import LengthController from "./LengthController"
import AreaController from "./AreaController"
import VolumeController from "./VolumeController"
import MassController from "./MassController"
import TimeController from "./TimeController"
import TemperatureController from "./TemperatureController"

var lengthController = new LengthController()
var areaController = new AreaController()
var volumeController = new VolumeController()
var massController = new MassController()
var timeController = new TimeController()
var temperatureController = new TemperatureController()

class UnitConverter extends Component {
	constructor(props) {
		super(props)

		this.state = {
			core: lengthController,
			inputUnit: lengthController.unitList[0],
			outputUnit: lengthController.unitList[0],
			inputVal: "",
			outputVal: ""
		}
	}

	coreChangeHandler = event => {
		let newCore = this.correspondingCoreReturner(event.target.value)
		this.setState({
			core: newCore,
			inputUnit: newCore.unitList[0],
			outputUnit: newCore.unitList[0],
			inputVal: "",
			outputVal: ""
		})
	}
	// Change Arithmetic Core
	correspondingCoreReturner(mode) {
		switch (mode) {
			case "Length":
				return lengthController
			case "Area":
				return areaController
			case "Volume":
				return volumeController
			case "Mass":
				return massController
			case "Time":
				return timeController
			case "Temperature":
				return temperatureController
			default:
				return null
		}
	}

	inputUnitChangeHandler = event => {
		this.setState({
			inputUnit: event.target.value,
			outputVal: this.doCalculation(
				this.state.inputVal,
				event.target.value,
				this.state.outputUnit
			)
		})
	}
	outputUnitChangeHandler = event => {
		this.setState({
			outputUnit: event.target.value,
			outputVal: this.doCalculation(
				this.state.inputVal,
				this.state.inputUnit,
				event.target.value
			)
		})
	}
	inputValChangeHandler = event => {
		this.setState({
			inputVal: event.target.value,
			outputVal: this.doCalculation(
				event.target.value,
				this.state.inputUnit,
				this.state.outputUnit
			)
		})
	}

	// The important actual calculation bit
	doCalculation(val, inUnit, outUnit) {
		return this.state.core.convert(val, inUnit, outUnit)
	}

	render() {
		return (
			<div>
				<TypeSelector
					val={this.state.core.name}
					changeHandler={this.coreChangeHandler}
				></TypeSelector>
				<ModeArea
					list={this.state.core.unitList}
					position="left"
					num={this.state.inputVal}
					unit={this.state.inputUnit}
					valChangeHandler={this.inputValChangeHandler}
					unitChangeHandler={this.inputUnitChangeHandler}
				></ModeArea>
				<ModeArea
					list={this.state.core.unitList}
					position="right"
					num={this.state.outputVal}
					unit={this.state.outputUnit}
					unitChangeHandler={this.outputUnitChangeHandler}
				></ModeArea>
			</div>
		)
	}
}

export default UnitConverter
