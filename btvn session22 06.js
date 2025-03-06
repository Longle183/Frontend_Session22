let numbers = [2, 5, 7, 4, 1, 8, 6, 2, 5, 7];
let input = Number(prompt("Nhập một số nguyên:"));
let count = 0;
for (let num of numbers) {
    if (num === input) {
        count++;
    }
}
if (count > 0) {
    console.log(`Số ${input} xuất hiện ${count} lần trong mảng`);
} else {
    console.log(`Số ${input} không tồn tại trong mảng`);
}
