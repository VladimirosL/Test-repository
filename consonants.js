const word = 'superman'

let vokaler = 0;

for (i=0; i<word.length; i++) {
    if (checkIfVow(word[i].toLowerCase() === true)) {
        vokaler++
    }
}

function checkIfVow(letterToCheck) {
    const vokaler = 'aoiuyeåäö'
    if (vokaler.includes(letterToCheck)) {
        return true
    } else {
        return false
    }
}

console.log(vokaler)