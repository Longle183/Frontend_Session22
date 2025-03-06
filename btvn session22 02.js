let numbers = [2, 5, 7, 4, 1, 8, 6];
let input = prompt("Nhập một số:");
if (numbers.includes(Number(input))) {
    console.log("Bingo");
} else {
    console.log("Chúc bạn may mắn lần sau");
}
