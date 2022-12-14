import { citybee } from "@/providers/shortTerm/citybee";
import CityBeePriceCalculator from "../../../src/bll/calculations/priceCalculations/CityBeePriceCalculator";

describe("CityBee price calculator", function () {
  const cityBeePriceCalculator = new CityBeePriceCalculator();

  test("Volkswagen T-Roc - 30min", async () => {
    // ARRANGE
    const car = citybee.cars.find((car) => car.name === "Volkswagen T-Roc");
    const searchParamsObj = {
      distance: 0,
      days: 0,
      hours: 0,
      minutes: 30,
    };

    // ACT
    let result = cityBeePriceCalculator.calculatePrice(car, searchParamsObj);
    result = result.price ?? result;
    // ASSERT
    expect(result).toBe(5.3);
  });

  test("Ford Fiesta - 1h 4min 31km", async () => {
    // ARRANGE
    const car = citybee.cars.find((car) => car.name === "Ford Fiesta");
    const searchParamsObj = {
      distance: 31,
      days: 0,
      hours: 1,
      minutes: 4,
    };

    // ACT
    let result = cityBeePriceCalculator.calculatePrice(car, searchParamsObj);
    result = result.price ?? result;

    // ASSERT
    expect(Number(result.toFixed(2))).toBe(12.63);
  });

  test("Volkswagen T-Roc - 5min", async () => {
    // ARRANGE
    const car = citybee.cars.find((car) => car.name === "Volkswagen T-Roc");
    const searchParamsObj = {
      distance: 0,
      days: 0,
      hours: 0,
      minutes: 5,
    };

    // ACT
    let result = cityBeePriceCalculator.calculatePrice(car, searchParamsObj);
    result = result.price ?? result;
    // ASSERT
    expect(result).toBe(2.29);
  });

  test("Volkswagen T-Roc - 1h 9km", async () => {
    // ARRANGE
    const car = citybee.cars.find((car) => car.name === "Volkswagen T-Roc");
    const searchParamsObj = {
      distance: 9,
      days: 0,
      hours: 1,
      minutes: 0,
    };

    // ACT
    let result = cityBeePriceCalculator.calculatePrice(car, searchParamsObj);
    result = result.price ?? result;
    // ASSERT
    expect(result).toBe(9.49);
  });

  test("Volkswagen T-Roc - 1day 9h 9km", async () => {
    // ARRANGE
    const car = citybee.cars.find((car) => car.name === "Volkswagen T-Roc");
    const searchParamsObj = {
      distance: 9,
      days: 1,
      hours: 9,
      minutes: 0,
    };

    // ACT
    let result = cityBeePriceCalculator.calculatePrice(car, searchParamsObj);
    result = result.price ?? result;
    // ASSERT
    expect(result).toBe(69);
  });

  test("Volkswagen T-Roc - 50min", async () => {
    // ARRANGE
    const car = citybee.cars.find((car) => car.name === "Volkswagen T-Roc");
    const searchParamsObj = {
      distance: 0,
      days: 0,
      hours: 0,
      minutes: 50,
    };

    // ACT
    let result = cityBeePriceCalculator.calculatePrice(car, searchParamsObj);
    result = result.price ?? result;
    // ASSERT
    expect(result).toBe(7.49);
  });

  test("Volkswagen T-Roc - 59min 20km", async () => {
    // ARRANGE
    const car = citybee.cars.find((car) => car.name === "Volkswagen T-Roc");
    const searchParamsObj = {
      distance: 20,
      days: 0,
      hours: 0,
      minutes: 59,
    };

    // ACT
    let result = cityBeePriceCalculator.calculatePrice(car, searchParamsObj);
    result = result.price ?? result;
    // ASSERT
    expect(result).toBe(11.89);
  });
});
