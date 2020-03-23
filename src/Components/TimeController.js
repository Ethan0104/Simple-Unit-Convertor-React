class TimeController {
	constructor() {
		this.name = "Time"
		this.unitList = [
			"Second",
			"Millisecond",
			"Microsecond",
			"Nanosecond",
			"Picosecond",
			"Minute",
			"Hour",
			"Day",
			"Week",
			"Year"
		]
	}

	convert(valStr, inUnit, outUnit) {
		if (valStr === "") return ""
		if (inUnit === outUnit) return valStr

		let val = parseFloat(valStr)
		let standardUnit = 0
		if (inUnit === "Second") {
			standardUnit = val
		} else {
			let command = "this." + inUnit + "Second(" + val + ")"
			standardUnit = eval(command.replace(/ /g, ""))
		}

		if (outUnit === "Second") {
			return standardUnit
		} else {
			let command = "this.Second" + outUnit + "(" + standardUnit + ")"
			return eval(command.replace(/ /g, ""))
		}
	}

	MillisecondSecond(x) {
		return 0.001 * x
	}
	MicrosecondSecond(x) {
		return 0.000001 * x
	}
	NanosecondSecond(x) {
		return 1e-9 * x
	}
	PicosecondSecond(x) {
		return 1e-12 * x
	}
	MinuteSecond(x) {
		return 60 * x
	}
	HourSecond(x) {
		return 3600 * x
	}
	DaySecond(x) {
		return 86400 * x
	}
	WeekSecond(x) {
		return 604800 * x
	}
	YearSecond(x) {
		return 31557600 * x
	}

	SecondMillisecond(x) {
		return 1000 * x
	}
	SecondMicrosecond(x) {
		return 1000000 * x
	}
	SecondNanosecond(x) {
		return 1000000000 * x
	}
	SecondPicosecond(x) {
		return 1000000000000 * x
	}
	SecondMinute(x) {
		return 0.0166666667 * x
	}
	SecondHour(x) {
		return 0.0002777778 * x
	}
	SecondDay(x) {
		return 0.0000115741 * x
	}
	SecondWeek(x) {
		return 0.0000016534 * x
	}
	SecondYear(x) {
		return 3.168808781e-8 * x
	}
}

export default TimeController
