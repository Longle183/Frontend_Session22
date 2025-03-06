let numbers = [1, 4, 7, 8, 3]; 
let sumEven = 0;
let sumOdd = 0;
for (let num of numbers) {
    if (num % 2 === 0) {
        sumEven += num;
    } else {
        sumOdd += num;
    }
}
console.log(`Tổng các số chẵn: ${sumEven}`);
console.log(`Tổng các số lẻ: ${sumOdd}`);
