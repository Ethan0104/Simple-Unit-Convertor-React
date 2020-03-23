class AreaController {
	constructor() {
		this.name = "Area"
		this.unitList = [
			"Square meter",
			"Square kilometer",
			"Square centimeter",
			"Square mile",
			"Hectare",
			"Acre"
		]
	}

	convert(valStr, inUnit, outUnit) {
		if (valStr === "") return ""
		if (inUnit === outUnit) return valStr

		let val = parseFloat(valStr)
		let standardUnit = 0
		if (inUnit === "Square meter") {
			standardUnit = val
		} else {
			let command = "this." + inUnit + "Squaremeter(" + val + ")"
			standardUnit = eval(command.replace(/ /g, ""))
		}

		if (outUnit === "Square meter") {
			return standardUnit
		} else {
			let command = "this.Squaremeter" + outUnit + "(" + standardUnit + ")"
			return eval(command.replace(/ /g, ""))
		}
	}

	SquarekilometerSquaremeter(x) {
		return 1000000 * x
	}
	SquarecentimeterSquaremeter(x) {
		return 0.0001 * x
	}
	SquaremileSquaremeter(x) {
		return 2589988.11 * x
	}
	HectareSquaremeter(x) {
		return 10000 * x
	}
	AcreSquaremeter(x) {
		return 4046.85642 * x
	}

	SquaremeterSquarekilometer(x) {
		return 0.000001 * x
	}
	SquaremeterSquarecentimeter(x) {
		return 10000 * x
	}
	SquaremeterSquaremile(x) {
		return 3.86102159 * Math.pow(10, -7) * x
	}
	SquaremeterHectare(x) {
		return 0.0001 * x
	}
	SquaremeterAcre(x) {
		return 0.000247105381 * x
	}
}

export default AreaController
