
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
// lần đầu do không hiểu đề
// Push lần 2 sau khi hỏi lại logic của ng khác và tự code lại

let btn = document.querySelector('button');
let labelInput = document.querySelectorAll('label');
Array.from(labelInput).forEach(item => {
    item.onclick = function () {
        let activeLabel = document.querySelector('.active')
        activeLabel.classList.remove('active')
        item.classList.add('active');
    }
})

btn.onclick = function () {
    let resultLink = document.querySelector('.linkShort')
    let inputLink = document.querySelector('#inputLink');

    let linkApi = 'https://api.shrtco.de/v2/shorten?url=' + inputLink.value

    fetch(linkApi)
        .then(response => response.json())
        .then(async data => {
            console.log(data);
            if (document.querySelector('#link-shrtcode').checked) {
                resultLink.innerHTML = data.result.full_short_link
            } else if (document.querySelector('#link-9qrde').checked) {
                resultLink.innerHTML = data.result.full_short_link2
            } else if (document.querySelector('#link-shinylink').checked) {
                resultLink.innerHTML = data.result.full_short_link3
            }
        })

}





