

/*
let myNumberOne, second, third;

myNumberOne = 321

console.log(myNumberOne);

const myConst = 777
console.log(myConst);
*/

// let number = 2
// let float = 31.23
// let age = 5
// age = age * 6

// let name = 'Serge\'y'
// let lastName = "Ivan\"v"

// console.log('I am: ' + name + ' ' + lastName)

// console.log(`Age: ${name} ${age}`)

let num1 = 2
let num2 = '2'

let isTrue = true;
let isFalse = false;

// console.log(isTrue)
// console.log(isFalse)

// console.log(parseInt(num1) === parseInt(num2))

// console.log(num2)
// console.log(parseInt(num2))

// let age = 15

// if (age > 30) {
	
// 	console.log('я старый')

// }else{

// 	console.log('я еще молод')

// }

// if (age === 15) {
// 	console.log('мне 15')
// }

// let variable = null;

// console.log(variable)

// let arr = [1, 2, 'Petya', 4, true, 6, 7.8]

// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[2])
// console.log(arr[3])
// console.log(arr[4])
// console.log('======================================')
// console.log(arr[5])
// console.log(arr[2345345]) // не существует

// console.log(arr.length)

// let num = 2

// console.log(++num) // 3
// console.log(num++) // 3
// console.log(num) // 4

// let max = arr.length

// for ( let i = 0;  i < max;  i++ ) {

// 	console.log(arr[i])
	
// }


// num1 = 2
// num2 = 5

// let result = num1 * num2
// result = result + 10

// console.log(result)


// myResult()

function myResult(chislo) {

	num1 = 2
	num2 = 5

	let result = num1 * num2
	result = result + chislo

	console.log(result)
}



// myResult(15)
// myResult(25)
// myResult(654)
// myResult(234)
// myResult(23234)



function myResult2(one, two, chislo) {

	let result = one * two
	result = result + chislo

	console.log(result)
}



// myResult2(5, 6, 15)
// myResult2(54, 62, 1235)



// значения по умолчанию
function myResult3(one = 10, two = 20, chislo = 110) {

	let result = one * two
	result = result + chislo

	console.log(result)
}

// result = undefined
// console.log(result)


// let numer1 = 54
// let numer2 = 234
// let numer3 = 23523


// myResult3(numer1, numer2)


// function myResult4(one = 10, two = 20, chislo = 110) {

// 	let result = one * two
// 	result = result + chislo

// 	return result // возвращаем результат

// 	console.log('я после return') // код после return не выполняется
// 	alert('test')
// }



// let numer4 = 54
// let numer5 = 234
// let numer6 = 23523


// let res = myResult4(numer4, numer5) // сохраняем результат в переменную res

// console.log(res)

// alert(res) // после aler js код не выполнится пока пользователь не нажмет "ok"
// console.log('я после алерта')


// let res = func(50, 50, 50)

// console.log(res)

// let func = function(one = 10, two = 20, chislo = 110) {

// 	let result = one * two
// 	result = result + chislo

// 	return result // возвращаем результат
// }


// console.error('my error')
// console.info(console)

// let var3 = prompt('введи что нибудь!')

// console.log(var3)

// let conf = confirm('Da ili net')

// console.log(conf)

// if (conf) {
// 	console.log('пользователь нажал ok')
// }else{
// 	console.log('пользователь нажал otmena')
// }

// let func = chislo => console.log('result: ' + chislo)

// let res = func(12352345)

// console.log(res)

let cl = console.log

let human = {
	'name': 'Petya',
	age: 55,
	hasDog: true,
	sayHi: function(kto) {
		cl('hi ' + kto + ' my age is ' + this.age)
	},
	'likes His Mother': true,
	address: {
		city:'NY',
		street: 'Derebasovskaya'
	}
}

// cl(human.name) // обращение к свойству объекта через точку

// let value = 'name'
// cl(human[value]) // обращение к свойству объекта с помощью квадратных скобок

// cl(human.address)
// human.name = 'Andrey'
// cl(human)

// cl(human.sayHi('People'))


let countries = {
	DE: 'Germany',
	UA: 'Ukaraine',
	CH: 'China'
}

// for( let key in countries){
// 	cl(key + ' => ' + countries[key])
// }


class Human{
	hasDog = true
	hair = 'Brown'
	hasHead = 'IQ34'
	constructor(a, b) {
	  this.name = a
	  this.age = b
	}
}

let andrey = new Human('Andrey', 45)
let sasha = new Human('Alex', 56)
sasha.hair = 'white'
sasha.car = 'Audi'
let vova = new Human('Vladimir', 34)

// cl(andrey)
// cl(sasha)
// cl(vova)
