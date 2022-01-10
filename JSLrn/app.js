let number
let maxNumber = Number.MIN_SAFE_INTEGER
let minNumber = Number.MAX_SAFE_INTEGER
let sum = 0
let i = 0
let average = 0 

while (number = prompt('Imput number:')){

    i++

    if (number > maxNumber){
        maxNumber = number
    }

    if (number < minNumber){
        minNumber = number
    }

    sum += number

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