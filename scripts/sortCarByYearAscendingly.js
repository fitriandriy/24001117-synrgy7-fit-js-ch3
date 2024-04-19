function sortCarByYearAscendingly(cars) {
  console.log(cars);

  const arr = [...cars];

  // [5, 1, 7, 2]
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j].year > arr[j + 1].year) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}
