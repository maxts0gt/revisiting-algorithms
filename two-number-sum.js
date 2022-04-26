// Method 1: Double Loop

// O(n ^ 2) time | O(1) space
const twoNumberSum1 = (array, targetSum) => {
	// create simple loop
	for (let i = 0; i < array.length; i++) {
		// grab the first num
		let firstNum = array[i];
		for (let j = i + 1; j < array.length; j++) {
			// grab the second num
			let secondNum = array[j];
			// check they add up to the target sum
			if (firstNum + secondNum === targetSum) {
				// in that case, return those two numbers
				return [firstNum, secondNum];
			}
		}
	}
	return [];
};

const array = [-4, -1, 1, 3, 5, 6, 8, 11];
const targetSum = 10;

console.log(twoNumberSum1(array, targetSum));

// Method 2: Hash Table
// O(n) time | O(n) space
const twoNumberSum2 = (array, targetSum) => {
	// create hash table
	let hash = {};
	// create simple loop
	for (let i = 0; i < array.length; i++) {
		// check if number is in hash
		if (hash[targetSum - array[i]]) {
			// then return hash with the number
			return [targetSum - array[i], array[i]];
		} else {
			// if the number doesn't exist put it inside hash
			hash[array[i]] = true;
		}
	}
	// else return empty array
	return [];
};
console.log(twoNumberSum2(array, targetSum));

// Method 3: Two Pointers
// O(n log(N)) time | O(1) space
const twoNumberSum3 = (array, targetSum) => {
	// create two pointer
	left = 0;
	right = array.length - 1;
	// sort the array
	array = array.sort((a, b) => a - b);
	// create simple while loop
	while (left < right) {
		// create current sum
		const currentSum = array[left] + array[right];
		// check if current sum is the target sum
		if (currentSum === targetSum) {
			// then return the left and right
			return [array[left], array[right]];
			// if currentSum < target, move left by 1
		} else if (currentSum < targetSum) {
			left += 1;
			// if currentSum > target, move right by -1
		} else if (currentSum > targetSum) {
			right -= 1;
		}
	}
	// else if not found, then return empty []
	return [];
};

console.log(twoNumberSum3(array, targetSum));
