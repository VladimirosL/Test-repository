const tal = [5,10,15]


function genomsnitt() {
    if (tal.length === 0) {
        console.log('ingen data')
    } else {
        let sum = 0
        for(let i=0; i<tal.length; i++) {
            sum = sum + tal[i]
        }
        let average = sum/tal.length
        console.log(average)
    }
}

genomsnitt()