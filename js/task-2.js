'use strict';

// function makeArray(firstArray, secondArray, maxLength) {

//     let result = firstArray.concat(secondArray);

//     result.length = maxLength;

//     return result.length <= maxLength ? result : result.length;
   
// }

function makeArray(firstArray, secondArray, maxLength) {

    let result = firstArray.concat(secondArray);

    let array = [];

    for (let i = 0; i < result.length; i++) {
        
        if (i < maxLength) {
            array.push(result[i]);
        }
    }
    return array;
}


console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []