let input = prompt("Nhập một dãy số:");
let isValid = true;
for (let char of input) {
    if (isNaN(char) || char === " ") {
        isValid = false;
        break;
    }
}
if (isValid) {
    let reversed = input.split("").reverse().join("");
    console.log(reversed);
} else {
    console.log("Dãy không hợp lệ");
}
