let number
let maxNumber = Number.MIN_SAFE_INTEGER
let minNumber = Number.MAX_SAFE_INTEGER
let sum = 0
let i = 0
let average = 0 

while (number = prompt('Imput number:')){

    let num = parseInt(number)
    i++

    if (num > maxNumber){
        maxNumber = number
    }

    if (num < minNumber){
        minNumber = number
    }

    sum = sum +  num

    average = sum/i
}

alert(`Max value:  ${maxNumber} Min value: ${minNumber} Sum: ${sum} Average: ${average}`)





// do 
// {
//     number = prompt('Imput number:')
  
//     if (number > maxNumber){
//         maxNumber = number
//     }

// }while (number !== null)