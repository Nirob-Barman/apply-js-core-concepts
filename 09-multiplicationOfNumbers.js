// 1 * 2 * 3 * 4 * 5 * 6 * 7
function multiplicationOfNumbers(number) {
    let mul = 1;
    for (let i = 1; i <= number; i++) {
        mul = mul * i;
        // console.log(i, mul);
    }
    return mul;
}

const result = multiplicationOfNumbers(7);
console.log(result);