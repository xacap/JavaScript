// Переменные1

//const firstName = 'Oleksii'
//const lastName = 'Iatsuta'
// let age = 25
// const isProgamer = true;

// nameN = 'Oleks'
// age = 28

//console.log(isProgamer)

// const lastName = prompt('Введите фамилию')
// alert (firstName + ' ' + lastName)

//Типы данных
// const nameX = 'Alex'
// const isProgramer = true
// const age = 25
// let x
// console.log(typeof x)

//6 Приоритет оперторов
// const fullAge = 26
// const birhDay = 1993
// const currentYear = 2020

// const isFullAge = (currentYear - birhDay) >= fullAge
// console.log(isFullAge)

// 7 Условные опреторы
// const courseStatus = 'pending' // ready, pendidg, false

// if(courseStatus === 'ready'){
//     console.log('Курс готов')
// }
// else if (courseStatus === 'pending'){
//     console.log('Курс в процессе').
// }

// const isReady = true;
// isReady ? console.log('All Ok') : console.log('Not Ok')

// const num1 = 24
// const num2 = '24'

// console.log(num1 == num2) // приводит к одному типу
// console.log(num1 === num2) // сравнивает как есть

// // 8 Функции
// function calculateAge(year){
//     return 2020 - year
// }

// // const myAge = calculateAge(1993)
// // console.log(myAge)

// function logInfoAbout(name, year){
//     const age = calculateAge(year)
//     console.log('Имя человека ' + name + 'возраст ' + age)
// }

// logInfoAbout('Влад', 1993)

// 9 Массивы
// 10 Циклы
const cars = ['Audi', 'Mazda', 'Mersedes', 'Ford']

// for (let i = 0; i < cars.length; i++){
// const car = cars[i];
// console.log(car)
// }

// for (let car of cars){
//     console.log(car)
// }

// 11 Объекты
const person = {
    firstName:'Alex',
    lastName: 'Iatsuta',
    year: 25,
    languages:['Ru', 'Ua', 'En'],
    hasWafe: false,
    greet: function(){
        console.log('greet')
    } 
}
console.log(person.firstName)
console.log(person['lastName'])
const key = 'languages'
person.hasWafe = true
person.isProgramer = true
console.log(person[key])
console.log(person)