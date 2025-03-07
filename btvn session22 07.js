let numbers1 = [2, 5, 7, 4, 1, 8, 6, 2, 5, 7];
let numbers2 = [4, 8, 7, 8, 1, 9, 6, 9, 15, 3];
let numbers3 = [3, 9, 7, 4, 1, 8, 6, 2, 5, 7];
for (let i = 0; i < numbers1.length - 1; i++) {
    for (let j = i + 1; j < numbers1.length; j++) {
        if (numbers1[i] > numbers1[j]) {
            let temp = numbers1[i];
            numbers1[i] = numbers1[j];
            numbers1[j] = temp;
        }
    }
}
for (let i = 0; i < numbers2.length - 1; i++) {
    for (let j = i + 1; j < numbers2.length; j++) {
        if (numbers2[i] > numbers2[j]) {
            let temp = numbers2[i];
            numbers2[i] = numbers2[j];
            numbers2[j] = temp;
        }
    }
}
for (let i = 0; i < numbers3.length - 1; i++) {
    for (let j = i + 1; j < numbers3.length; j++) {
        if (numbers3[i] > numbers3[j]) {
            let temp = numbers3[i];
            numbers3[i] = numbers3[j];
            numbers3[j] = temp;
        }
    }
}
console.log(numbers1);
console.log(numbers2);
console.log(numbers3);
