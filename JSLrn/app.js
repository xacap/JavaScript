
let array = []

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
  }

for (let i = 0; i < 5; i++){
    array[i] = []
    for (let j = 0; j < 5; j++){
        array[i][j] = getRandomArbitrary(-100, 100)
    }
}

console.log(array)

for (let i = 0; i < 5; i++){
    for (let j = 0; j < 5; j++, i++){
        if(array[i][j] < 0){
            array[i][j] = 0
        }
        else{
            array[i][j] = 1
        }
    }
}

console.log(array)
