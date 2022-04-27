// O(n) time | O(n) space
const findClosestValueInBST = (tree, target) => {
	return findClosestValueInBSTHelper(tree, target, (closest = Infinity));
};

function findClosestValueInBSTHelper(tree, target, closest) {
	// setting the base case, or where we should return the value

	if (tree.length === 0) {
		return closest;
	}
	if (Math.abs(target - closest) > Math.abs(target - tree.value)) {
		closest = tree.value;
	} else if (target < tree.value) {
		return findClosestValueInBSTHelper(tree.left, target, closest);
	} else if (target > tree.value) {
		return findClosestValueInBSTHelper(tree.right, target, closest);
	} else {
		return closest;
	}
}
