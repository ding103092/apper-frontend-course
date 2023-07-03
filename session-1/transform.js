function transform(nums) {
    // returns an array in which all the elements are squared and sorted in ascending order.
    return nums.map(num => num ** 2).sort((a, b) => a - b);
}

const nums = [4,9,5,3,8]
const sortedSquaredNums = transform(nums)
console.log(sortedSquaredNums) // [9,16,25,64,81]