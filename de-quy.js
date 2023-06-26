// function func(a) {
//     if (a == 2)
//         return 2;
//     return a * func(a - 1);
// }

// func(5); 
// //5 * func(4)
// //5 *  4 * func(3)
// //5 * 4 * 3 * func(2)
// //5 * 4 * 3 * 2

// function tinhGiaiThua(a) {
//     let giaiThua = 1;
//     for (let i = 2; i <= a ; i++) {
//         giaiThua *= i;
//     }
//     return giaiThua;
// }


// function swap(arr) {
//     let temp = arr[0];
//     arr[0] = arr[1];
//     arr[1] = temp;
// }

// let arr1 = [5,10]
// swap(arr1);
// console.log(arr1);
// console.log(temp);