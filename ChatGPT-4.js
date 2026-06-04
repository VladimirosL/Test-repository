let a;
let b;

function summa(a,b) {
    if (typeof a === 'number' && typeof b === 'number') {
    let sum = a+b;
    console.log(sum); 
} else {
    console.log('fel!');
}
};

summa(5,7);