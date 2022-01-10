const person = {
    name: 'Alex', // ключ: значение
    age: undefined,
    isProgramer: true,
    languages: ['ru', 'ua', 'en'],
    // 'komplex key': 'Complex value',
    // ['key_' + (1 + 3)]: 'Comuted key', //key_4

    greet(){
        console.log('this: ', this)
    },

    info(){
        console.info('Информация про чел про имени', this.name )
    }
}

// console.log(person.name)
// const ageKey = 'age'
// console.log(person[ageKey])
// console.log(person["komplex key"])

// person.age++
// person.languages.push('by')
// //person['key_4'] = undefined
// delete person['key_4']
// console.log(person)

// const name = person.name
// const age = person.age
// const languages = person.languages

// const {name, age:personAge = 10, languages} = person // деструктуризация

// console.log(name, personAge, languages)

// for (let key in person){
//     if (person.hasOwnProperty(key)){ // проверка что бы не заходитm в прототип (Object)
//         console.log('key: ', key)
//         console.log('value: ', person[key])
//     }
// }

// const keys = Object.keys(person) // получаем массив ключей, 
// keys.forEach((key) => { // callbackfn 
//     console.log('key: ', key)
//     console.log('value: ', person[key])
// })


// Object.keys(person).forEach((key) => { // callbackfn 
//     console.log('key: ', key)
//     console.log('value: ', person[key])
// })


//Context

//person.greet()

const logger = {
     myKeys(obj){
         console.log('Object keys:', Object.keys(this))
    },

    keysAndValues(){
        //"key": value
        Object.keys(this).forEach(key => {
            console.log(`"${key}": ${this[key]}`)
        })

        //const selfThis = this

        // Object.keys(this).forEach( function (key) { // function создает новый контекст
        //     console.log(`"${key}": ${this[key]}`)
        // }.bind(this))
    },

    withParams (top = false, between = false, bottom =false){
        
        if (top){
            console.log('-------Start------')
        }

        Object.keys(this).forEach((key ,index, array) => {
            console.log(`"${key}": ${this[key]}`)

            if (between && index !== array.length -1 ){
                console.log('----------------')
            }
        })

        if (bottom){
            console.log('-------End------')
        }
    }
 } 

//  logger.myKeys(person)

// const bound = logger.myKeys.bind(person) // связывает
//  bound()

 //logger.myKeys.call(person)
 //logger.keysAndValues.call(person)
 //logger.keysAndValues.call({a: 1, c:{b: 2 }})

 //logger.withParams.call(person, true, true, true)
 logger.withParams.apply(person, [true, true, true])


