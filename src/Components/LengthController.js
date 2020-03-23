class LengthController {
	constructor() {
		this.name = "Length"
		this.unitList = [
			"Meter",
			"Kilometer",
			"Centimeter",
			"Decimeter",
			"Milimeter",
			"Micrometer",
			"Nanometer",
			"Inch",
			"Feet",
			"Mile"
		]
	}

	convert(valStr, inUnit, outUnit) {
		if (valStr === "") return ""
		if (inUnit === outUnit) return valStr

		let val = parseFloat(valStr)
		let standardUnit = 0
		if (inUnit === "Meter") {
			standardUnit = val
		} else {
			standardUnit = eval("this." + inUnit + "Meter(" + val + ")")
		}

		if (outUnit === "Meter") {
			return standardUnit
		} else {
			return eval("this.Meter" + outUnit + "(" + standardUnit + ")")
		}
	}

	KilometerMeter(x) {
		return 1000 * x
	}
	CentimeterMeter(x) {
		return 0.01 * x
	}
	DecimeterMeter(x) {
		return 0.1 * x
	}
	MilimeterMeter(x) {
		return 0.001 * x
	}
	MicrometerMeter(x) {
		return 0.000001 * x
	}
	NanometerMeter(x) {
		return 0.000000001 * x
	}
	MileMeter(x) {
		return 1609.344 * x
	}
	InchMeter(x) {
		return 0.0254 * x
	}
	FeetMeter(x) {
		return 0.3048 * x
	}

	MeterKilometer(x) {
		return 0.001 * x
	}
	MeterCentimeter(x) {
		return 1000 * x
	}
	MeterDecimeter(x) {
		return 10 * x
	}
	MeterMilimeter(x) {
		return 1000 * x
	}
	MeterMicrometer(x) {
		return 1000000 * x
	}
	MeterNanometer(x) {
		return 1000000000 * x
	}
	MeterMile(x) {
		return 0.000621371192 * x
	}
	MeterInch(x) {
		return 39.3700787 * x
	}
	MeterFeet(x) {
		return 3.2808399 * x
	}
}

export default LengthController
