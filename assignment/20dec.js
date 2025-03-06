// mixins

const engine = {
  isRunning() {
    return true;
  },
};

const car = {
  isCar() {
    return true;
  },
};
// const mycar= Object.assign(car, engine);
// console.log(mycar)

let engineCar = function (color, carType) {
  let moving = false;
  return Object.assign(carType, engine, {
    color: color,
    drive() {
      moving = true;
    },
    isMoving() {
      return moving;
    },
  });
};

let redCar = engineCar("red", car);
console.dir(redCar);
