//1 Функции
//Function declaration

// function greet(name){
//     console.log('Привет - ', name)
// }

// //Function expression
// const greet2 = function greet2(name){
//     console.log('Привет 2 - ', name)
// }

// greet('Аля')
// greet2('Аля')

// console.log(typeof greet)
// console.dir(greet)

//2 Анонимные функции
// let counter = 0
// const interval = setInterval(function(){
//     if (counter === 5){
//         clearInterval(interval)
//     }
//     else{
//         console.log(++counter)
//     }
    
// }, 1000 )

//3 Стрелочные функции

// function greet(name){
//     console.log('Привет - ', name)
// }

// const arrow = (itName) => {
//     console.log('Привет - ', itName)
// }

// const arrow2 = itName => console.log('Привет - ', itName)
// arrow2('Alex')

// const pov2 = num => num ** 2
// console.log(pov2(5))

// 4 Параметры по умолчанию

// const sum = (a = 40, b = a * 2) => a + b
// //console.log(sum(2,3))
// console.log(sum())

// function sumAll(...all){
// let resoult = 0
// for (let num of all){
//     resoult += num
// }
// return resoult
// }

// const res = sumAll(1, 2, 3, 4, 5)
// console.log(res)

//5 Замыкание

function createMember(name){
    return function (lastName){
        console.log(name + lastName)
    }
}

const logWihtLastname = createMember('Alex')
console.log(logWihtLastname('Iatsuta'))
console.log(logWihtLastname('Xacap'))