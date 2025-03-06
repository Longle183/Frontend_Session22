let input = prompt("Nhập một dãy số:");
let isValid = true;
for (let char of input) {
    if (isNaN(char) || char === " ") {
        isValid = false;
        break;
    }
}
if (isValid) {
    let numberArray = input.split("").map(Number);
    let maxNumber = Math.max(...numberArray);
    console.log(`${maxNumber} là số lớn nhất trong dãy số`);
} else {
    console.log("Dãy số không hợp lệ");
}
