function filterCarByAvailability(cars) {
  console.log(cars);

  let result = [];

  cars.forEach(car => {
    if (car.available) result = [...result, car]
  });

  return result;
}
