module.exports = function toReadable(number) {
    let len = String(number).length;
    let num = String(number).split("");
    if (len == 0) {
        console.log("empty");
        return;
    }
    if (len > 4) {
        console.log("more than 4");
        return;
    }
    let sinDigits = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    let twoDigits = [
        "",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    let tenMultiple = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    let tensPower = ["hundred", "thousand"];
    let result = "";
    if (len == 1) {
        return sinDigits[number];
    }
    let x = 0;
    while (x < num.length) {
        if (len >= 3) {
            if (+num[x] != 0) {
                result += sinDigits[+num[x]] + " ";
                result += tensPower[len - 3] + " ";
            }
            --len;
        } else {
            if (+num[x] == 1) {
                let sum = +num[x] + +num[x + 1];
                return (result += twoDigits[sum]);
            } else if (+num[x] == 2 && +num[x + 1] == 0) {
                return (result += "twenty");
            } else {
                let i = +num[x];
                if (i > 0) result += tenMultiple[i] + " ";
                else result += "";
                ++x;
                if (+num[x] != 0 && +num[x] != undefined)
                    result += sinDigits[+num[x]];
            }
        }
        ++x;
    }
    return result.slice(-1) == " "
        ? result.substring(0, result.length - 1)
        : result;
};
