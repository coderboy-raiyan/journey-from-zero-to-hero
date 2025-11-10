function binarySearch<T extends number>(arr: T[], target: T) {
  arr.sort((a, b) => a - b);
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    }

    if (arr[mid]! < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return null;
}

console.log(binarySearch([1, 3, 5, 7, 9, 11], 7));
