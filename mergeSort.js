// Merge Sort

let mergeSort = (arr) => {
	if (arr.length < 2) {
  	return arr;
  }
	// Split
  const halfIndex = Math.round(arr.length/2);
  const left = arr.slice(0, halfIndex);
  const right = arr.slice(halfIndex, arr.length);
  return merge(mergeSort(left), mergeSort(right));
}

let merge = (leftArr, rightArr) => {
	// Compare the two arrays
 	let combinedArr = []

  while (leftArr.length !== 0 && rightArr.length !== 0) {
  	if (leftArr[0] < rightArr[0]) {
    	combinedArr.push(leftArr[0]);
      leftArr.shift();
    } else {
    	combinedArr.push(rightArr[0]);
      rightArr.shift();
    }
  }

  return [...combinedArr, ...leftArr, ...rightArr];
}

let testArr = [3,4,9,1,4,6,2];

console.log(mergeSort(testArr));

//result [1, 2, 3, 4, 4, 6, 9];
