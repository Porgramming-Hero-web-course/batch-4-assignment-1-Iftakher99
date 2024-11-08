{
  //make the class
  class Car {
    make: string;
    model: string;
    year: number;

    constructor(make: string, model: string, year: number) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
    //the method
    getCarAge(): number {
      const runningYear = new Date().getFullYear();
      return runningYear - this.year;
    }
  }
  //   // Sample Input 1:
  //   const car = new Car('Honda', 'Civic', 2018);

  //   console.log(car.getCarAge());
}
