function selectionSort1(arr: number[]) {
  let i = 0;

  while (i < arr.length) {
    let j = i;
    while (j < arr.length - 1) {
      if (arr[j]! > arr[j + 1]!) {
        let temp = arr[j];
        arr[j] = arr[j + 1] as number;
        arr[j + 1] = temp as number;
      }
      j++;
    }
    i++;
  }
  return arr;
}

// Slightly better
function selectionSort(arr: number[]) {
  let i = 0;
  while (i < arr.length - 1) {
    let j = i + 1;
    let minIdx = i;
    while (j < arr.length) {
      if (arr[j]! < arr[minIdx]!) {
        minIdx = j;
      }

      j++;
    }

    if (minIdx !== i) {
      let temp = arr[i];
      arr[i] = arr[minIdx] as number;
      arr[minIdx] = temp as number;
    }

    i++;
  }
  return arr;
}
console.log(selectionSort([4, 8, 2, 9]));
