class MassController {
	constructor() {
		this.name = "Mass"
		this.unitList = [
			"Kilogram",
			"Gram",
			"Milligram",
			"Ton",
			"Pound",
			"Ounce",
			"Carat"
		]
	}

	convert(valStr, inUnit, outUnit) {
		if (valStr === "") return ""
		if (inUnit === outUnit) return valStr

		let val = parseFloat(valStr)
		let standardUnit = 0
		if (inUnit === "Kilogram") {
			standardUnit = val
		} else {
			let command = "this." + inUnit + "Kilogram(" + val + ")"
			standardUnit = eval(command.replace(/ /g, ""))
		}

		if (outUnit === "Kilogram") {
			return standardUnit
		} else {
			let command = "this.Kilogram" + outUnit + "(" + standardUnit + ")"
			return eval(command.replace(/ /g, ""))
		}
	}

	GramKilogram(x) {
		return 0.001 * x
	}
	MilligramKilogram(x) {
		return 0.000001 * x
	}
	TonKilogram(x) {
		return 1000 * x
	}
	PoundKilogram(x) {
		return 0.453592 * x
	}
	OunceKilogram(x) {
		return 0.0283495 * x
	}
	CaratKilogram(x) {
		return 0.0002 * x
	}

	KilogramGram(x) {
		return 1000 * x
	}
	KilogramMilligram(x) {
		return 1000000 * x
	}
	KilogramTon(x) {
		return 0.0001 * x
	}
	KilogramPound(x) {
		return 2.2046244202 * x
	}
	KilogramOunce(x) {
		return 35.273990723 * x
	}
	KilogramCarat(x) {
		return 5000 * x
	}
}

export default MassController
