class Song{
	constructor (title, singer) {
		this.title = title
		this.singer = singer
	}
}

class Singer{
	constructor (name, age) {
		this.name = name
		this.age = age
	}
}

let s1 = new Singer("Adel", 30);
let s2 = new Song("Hello", s1);
console.log(s2.singer.age);//this code prints 30, because A Singer object s1 is created with age 30. Then a Song object s2 is created with s1 as the singer. So s2.singer.age accesses the age of the singer, which is 30.
