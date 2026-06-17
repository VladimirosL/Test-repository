//Funktion som returnerar jämna tal. 

const number = [2,6,7,5,4,1,4];
const evenNumber = []

function checkIfEven(i) {
    if (number[i]%= 0) {
        return true
    } else {
        return false
    }
}

for (let i=0; i<number.length; i++) {
    if (checkIfEven(i) === true) {
        evenNumber.push(number[i])
        console.log(evenNumber)
    } else{
        console.log('fel')
    }
}

