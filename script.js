const num = 266219;

const multiplyingDigitsNumber = str => {
    let res = 1;
    for (let i = 0; i < str.length; i++) {
        res *= str[i];
    }
    return res;
};

const multiplyingDigits = multiplyingDigitsNumber(num.toString());
console.log('2: ', multiplyingDigits);

const raising = multiplyingDigits ** 3;
console.log('3: ', raising);

console.log('4: ', raising.toString().substr(0,2));