class VolumeController {
	constructor() {
		this.name = "Volume"
		this.unitList = ["Litre", "Millilitre", "Cubic meter"]
	}

	convert(valStr, inUnit, outUnit) {
		if (valStr === "") return ""
		if (inUnit === outUnit) return valStr

		let val = parseFloat(valStr)
		let standardUnit = 0
		if (inUnit === "Litre") {
			standardUnit = val
		} else {
			let command = "this." + inUnit + "Litre(" + val + ")"
			standardUnit = eval(command.replace(/ /g, ""))
		}

		if (outUnit === "Litre") {
			return standardUnit
		} else {
			let command = "this.Litre" + outUnit + "(" + standardUnit + ")"
			return eval(command.replace(/ /g, ""))
		}
	}

	MillilitreLitre(x) {
		return 0.001 * x
	}
	CubicmeterLitre(x) {
		return 1000 * x
	}

	LitreMillilitre(x) {
		return 1000 * x
	}
	LitreCubicmeter(x) {
		return 0.001 * x
	}
}

export default VolumeController
