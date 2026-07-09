//1. Left and Right Sum Differences(2574)



// var leftRightDifference = function (nums) {

//     let sum = 0;
//     let arr = [];
//     for (let i = 0; i < nums.length; i++) {
//         if (i == 0) {
//             arr.push(sum)
//         } else {
//             arr.push(sum += nums[i - 1])
//         }
//     }

//     let arr1 = [];
//     sum = 0;
//     for (let j = 0; j < nums.length; j++) {
//         sum = 0
//         let n = nums.length - 1
//         while (j < n) {
//             sum += nums[n]
//             n--
//         }
//         arr1.push(sum)
//     }

//     let result = [];
//     for (i = 0; i < arr.length; i++) {
//         result.push(Math.abs(arr[i] - arr1[i]))
//     }

//     return result
// };

3300. Minimum Element After Replacement With Digit Sum

var minElement = function (nums) {

    let n = 0;
    let sum = 0;
    let arr = [];
    let digit = 0

    for (let i = 0; i < nums.length; i++) {
        sum = 0
        n = nums[i]
        while (n > 0) {
            digit = n % 10;
            sum += digit;
            n = Math.floor(n / 10);
        }
        arr.push(sum)
    }

    return Math.min(...arr)
}