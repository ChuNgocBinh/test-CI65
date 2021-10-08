
// Bài 1

function adjacentElementsProduct(inputArray) {
    product = inputArray[0] * inputArray[1];
    for (i = 0; i < inputArray.length; i++) {
        if (inputArray[i] * inputArray[i + 1] > product) {
            product = inputArray[i] * inputArray[i + 1];
        }
    }
    return product;
}

console.log(adjacentElementsProduct([2, 3, -5, -2, 4]))

//------------------------------------------------

// Bài 2

let sumEven = 0;
let sumOdd = 0;
function alternatingSums(myArray) {
    for (let i = 0; i < myArray.length; i++) {
        if (i % 2 != 0) {
            sumEven += myArray[i];
        } else {
            sumOdd += myArray[i];
        }
    }
    return [sumEven, sumOdd];
}

console.log(alternatingSums([60, 40, 55, 75, 64]))

//------------------------------------------------------------------------------

// về cái API này thì khóa 1 và khóa 2 không thấy nhắc tới nhiều nên mình chưa tìm hiểu sâu về phần này nên mình không biết code nó như thế nào cả.





fetch('https://api.shrtco.de/v2/shorten?url=example.org/very/long/link.html')
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })




