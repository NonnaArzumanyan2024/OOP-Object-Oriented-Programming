class Square {
	constructor (a) {
		this.a = a
	}
	calc () {
		return this.a ** 2;
	}
}

const p1 = new Square(2);
console.log(p1.calc());
