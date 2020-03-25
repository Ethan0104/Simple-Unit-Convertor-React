class TemperatureController {
	constructor() {
		this.name = "Temperature"
		this.unitList = ["Celsius", "Fahrenheit", "Kelvin"]
	}

	convert(valStr, inUnit, outUnit) {
		if (valStr === "") return ""
		if (inUnit === outUnit) return valStr

		let val = parseFloat(valStr)
		let standardUnit = 0
		if (inUnit === "Celsius") {
			standardUnit = val
		} else {
			let command = "this." + inUnit + "Celsius(" + val + ")"
			standardUnit = eval(command.replace(/ /g, ""))
		}

		if (outUnit === "Celsius") {
			return standardUnit
		} else {
			let command = "this.Celsius" + outUnit + "(" + standardUnit + ")"
			return eval(command.replace(/ /g, ""))
		}
	}

	FahrenheitCelsius(x) {
		return ((x - 32) * 5) / 9
	}
	KelvinCelsius(x) {
		return x - 273.15
	}

	CelsiusFahrenheit(x) {
		return 1.8 * x + 32
	}
	CelsiusKelvin(x) {
		return x + 273.15
	}
}

export default TemperatureController
