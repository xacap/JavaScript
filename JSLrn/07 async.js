//Event loop

// const timeout = setTimeout(()=>{ 
//     console.log('After timeout') // превый пераметр, функция callback
// }, 2500 )

//clearTimeout(timeout)

// const interval = setInterval(()=>{ 
//     console.log('After timeout') // превый пераметр, функция callback
// }, 1000 )

// clearInterval(interval)

// const delay = (callback, wait = 1000) =>{
//     setTimeout(callback, wait)
// }

// delay (()=>{
//     console.log('After 2 sec')

// }, 2000)

const delay = (weit = 1000) => {
const promise = new Promise ((resolve, reject) => {
    setTimeout(() => {
        //resolve()
        reject('Что то не так')

    }, weit)
})
    return promise
}

// delay(2500)
// .then(()=>{
//     console.log('After 2 seconds')
// })
// .catch(err => console.error('Eroor: ',err))
// .finally(() => console.log('Finally'))


const getData = () => new Promise(resolve => resolve([
    1, 1, 2, 3, 5, 8, 13
]))

//getData().then( data => console.log(data))

// async function asincExample()
// {
//     await delay(3000)
//     const data = await getData()
//     console.log('Data: ', data)
// }

async function asincExample()
{
    try
    {
        await delay(3000)
        const data = await getData()
        console.log('Data: ', data)
    }
    catch (erro)
    {
        console.log (erro)
    }
    finally
    {
        console.log('Finally!')
    }
    
}

asincExample()