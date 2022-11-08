
// Given a number, n, return an array containing n unique random numbers between 1-10, inclusive. (That is, do not repeat any numbers in the returned list.)

// You can trust that this function will never be called with n < 0 or n > 10.

// For example:

// luckyNumbers(2)
// // returns (3, 7)

// luckyNumbers(6)
// // returns (1, 7, 9, 6, 5, 2)

const luckyNumbers =(n)=>{
    let result = []
    let nums = [1,2,3,4,5,6,7,8, 9,10]

    for(let i =0; i< n; i++){
        let random = Math.floor(Math.random()* nums.length)
        result.push(nums[random])
        nums.splice(random, 1)
    }

    return result
}
console.log(luckyNumbers(10))

