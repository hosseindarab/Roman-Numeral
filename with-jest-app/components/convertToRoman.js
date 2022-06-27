// The main function which is in charge of calculation and conversion of a number to Roman.

function convertToRoman(num) {

    // Array of numbers
    let numberArr = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

    // Array of Roman values
    let RomanArr = [
        "M",
        "CM",
        "D",
        "CD",
        "C",
        "XC",
        "L",
        "XL",
        "X",
        "IX",
        "V",
        "IV",
        "I"
    ];

    // Create result array
    let result = [];

    const findElement = e => {
        return e <= num;
    };

    // Calculation till no number found to be calculated.
    while (1000 >= num > 0) {
        let nextHighest = numberArr.find(findElement);

        result.push(RomanArr[numberArr.indexOf(nextHighest)]);
        num -= nextHighest;
    }

    // Join all the calculated and converted values together nad return the final value.
    let newResult = result.join("");

    return newResult;
}

export default convertToRoman;
