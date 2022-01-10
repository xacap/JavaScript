let number
let maxNumber = Number.MIN_SAFE_INTEGER
let minNumber = Number.MAX_SAFE_INTEGER
let sum = 0

while (number = prompt('Imput number:')){

    if (number > maxNumber){
        maxNumber = number
    }

    if (number < minNumber){
        minNumber = number
    }

    sum += number
}

alert(`Max value:  ${maxNumber} Min value: ${minNumber} Sum: ${sum}`)





// do 
// {
//     number = prompt('Imput number:')
  
//     if (number > maxNumber){
//         maxNumber = number
//     }

// }while (number !== null)