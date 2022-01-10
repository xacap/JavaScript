// const myName = "Alex"
// const age = 25

// function getAge(){
//     return age
// }

// //const output = 'меня зовут ' + name + ' мой возраст ' + age + ' лет'
// //const output = `меня зовут ${name} мой возраст ${getAge()} лет`
// //const output = `меня зовут ${myName} мой возраст ${age < 20 ? "A" : "B"} лет`

// const output = `
// <div>This is div</div>
// <p>This is p</p>

// const myName = 'Oleksii'

// console.log(myName.length)
// console.log(myName.toUpperCase())
// console.log(myName.toLowerCase())
// console.log(myName.charAt(2))
// console.log(myName.indexOf('k'))
// console.log(myName.startsWith('Ol'))
// console.log(myName.toLowerCase().startsWith('ol'))
// console.log(myName.endsWith('ii'))
// console.log(myName.repeat(3))

// const stingPass = '   password   '
// console.log(stingPass)
// console.log(stingPass.trim())
// console.log(stingPass.trimStart())
// console.log(stingPass.trimEnd())

function logPerson (s, name, age){
    //console.log(s, name, age)

    if(age < 0){
        age = "Еще не родился"
    }
    return `${s[0]}${name}${s[1]}${age}${s[2]}`
}

const personName = "Alex"
const personName2 = "Xxx"
const personAge = 25
const personAge2 = -10

const output = logPerson`Имя: ${personName}, возраст ${personAge}!`
const output2 = logPerson`Имя: ${personName2}, возраст ${personAge2}!`

console.log(output)
console.log(output2)