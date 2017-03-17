function calculate(string) {
	var numbers = string.match(/\d+/g).map(Number);
	var num = numbers.reduce((prev, curr) => (string.includes("loses")) ? prev - curr : prev + curr);
	return num;
}