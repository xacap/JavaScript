const cars = ['Mazda', 'BMW', 'Mersedes', 'Ford']
// const people = [
//     {itName: 'Alex', budget: 4200 },
//     {itName: 'Alya', budget: 5400 },
//     {itName: 'Ser', budget: 1200 }
// ]

const fib = [1, 1, 2, 3, 5, 8]
// cars.push('Renault')
// cars.unshift('Audi')

// cars.shift()
// const firstCar = cars.shift()
// const lastCar = cars.pop()
// console.log(firstCar)
// console.log(lastCar)
// console.log(cars)

//console.log(cars.reverse())

//const index = cars.indexOf('BMW')
// console.log(cars[index])
// cars[index] = 'Porshe'
// console.log(cars)

// let findedPerson
// for (const person of people){
//     console.log(person)
//     if (person.budget === 1200){
//         findedPerson = person
//     }
// }
// console.log(findedPerson)


// const index = people.findIndex( function(person) {
// return person.budget === 1200})



//  const person = people.find(function(person) {
//      return person.budget === 1200})

// const person = people.find((person) => {
//     return person.budget === 1200
// })
// const person = people.find(person => person.budget === 1200)



//console.log(cars.includes('BMW')) // bool проверяет наличеие элемента

// const upperCaseCar = cars.map(car =>{ // map - возвращает новый массив
//     return car.toUpperCase()
//})


// const pow2 = num => num ** 2 // стрелочная функция
// //const sqrt = num => Math.sqrt(num)
// const pow2Fib = fib.map(pow2) 
// const filteredNumber = pow2Fib.filter(num => num > 20 )

// //const pow2Fib = fib.map(pow2).map(Math.sqrt)
// //const pow2Fib = fib.map( num => num ** 2) // конструкция по умолчанию делает return

// console.log(pow2Fib)
// console.log(filteredNumber)


// задача 1

// const text = 'Пивет, мы изучаем ЯваСкрипт'
// const reversText = text.split('').reverse().join('')
// console.log(reversText) 

const people = [
         {itName: 'Alex', budget: 4200 },
         {itName: 'Alya', budget: 5400 },
         {itName: 'Ser', budget: 1200 }
     ]
// people.reduce(function(accum, person) {

// },0 )
// const allBudget = people.reduce((accum, person) => {
// if (person.budget > 2000){
//     accum += person.budget
// }

const allBudget = people.
filter(person => person.budget > 2000).
reduce((accum, person) => {
    accum += person.budget
return accum
},0 )

console.log(allBudget)
    