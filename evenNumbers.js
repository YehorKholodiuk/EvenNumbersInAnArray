const evenNumbers = (array, number) => array.filter( element => element % 2 === 0).slice(-number)
console.log(evenNumbers([2,3,4,5,6,88,9],2))
