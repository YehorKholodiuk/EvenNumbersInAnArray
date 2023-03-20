const evenNumbers1 = (array, number) => {
    let result = [];
    for ( let index = 0; index <= array.length; index++){
        if (array[index] % 2 === 0){
            result.push(array[index])
        }
    }
    return result.slice(-number);
}
console.log (evenNumbers1([2,3,4,5,6,7],1))
