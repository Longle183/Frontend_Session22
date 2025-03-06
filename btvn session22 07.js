function sortArray(arr) {
    return arr.sort((a, b) => a-b);
}
let numbers1 = [2, 5, 7, 4, 1, 8, 6, 2, 5, 7];
let numbers2 = [4, 8, 7, 8, 1, 9, 6, 9, 15, 3];
let numbers3 = [3, 9, 7, 4, 1, 8, 6, 2, 5, 7];
console.log(sortArray(numbers1));
console.log(sortArray(numbers2));
console.log(sortArray(numbers3));