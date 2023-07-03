console.log("dskljcv");
const array1 = [5, 10, 15, 20];
const array2 = [10, 20, 30];
const array3 = array1.concat(array2, [10]);
let sum = 0;
for (const element of array3) {
    sum += element;
}
console.log(sum);
