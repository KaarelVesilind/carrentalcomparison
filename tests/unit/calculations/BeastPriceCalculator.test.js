import BeastPriceCalculator from "../../../src/bll/calculations/priceCalculations/BeastPriceCalculator";
import { beast } from "../../../src/providers/shortTerm/beast";

describe("Beast price calculator", function () {
  const beastPriceCalculator = new BeastPriceCalculator();

  test("Tesla Model 3 Standard Range - 30min", async () => {
    // ARRANGE
    const car = beast.cars.find(
      (car) => car.name === "Tesla Model 3 Standard Range"
    );
    const searchParamsObj = {
      distance: 0,
      days: 0,
      hours: 0,
      minutes: 30,
    };

    // ACT
    const result = beastPriceCalculator.calculatePrice(car, searchParamsObj);

    // ASSERT
    expect(result.price).toBe(12.49);
  });

  test("Tesla Model 3 Standard Range - 2 days 10h", async () => {
    // ARRANGE
    const car = beast.cars.find(
      (car) => car.name === "Tesla Model 3 Standard Range"
    );
    const searchParamsObj = {
      distance: 0,
      days: 2,
      hours: 10,
      minutes: 0,
    };

    // ACT
    const result = beastPriceCalculator.calculatePrice(car, searchParamsObj);

    // ASSERT
    expect(result.price).toBe(294.98);
  });

  test("Tesla Model 3 Standard Range - 1 week 5 days 5h", async () => {
    // ARRANGE
    const car = beast.cars.find(
      (car) => car.name === "Tesla Model 3 Standard Range"
    );
    const searchParamsObj = {
      distance: 0,
      days: 12,
      hours: 10,
      minutes: 0,
    };

    // ACT
    const result = beastPriceCalculator.calculatePrice(car, searchParamsObj);

    // ASSERT
    expect(result.price).toBe(1104.97);
  });

  test("Tesla Model 3 Standard Range - 4 days 12h 2000km", async () => {
    // ARRANGE
    const car = beast.cars.find(
      (car) => car.name === "Tesla Model 3 Standard Range"
    );
    const searchParamsObj = {
      distance: 2000,
      days: 4,
      hours: 12,
      minutes: 0,
    };

    // ACT
    const result = beastPriceCalculator.calculatePrice(car, searchParamsObj);

    // ASSERT
    expect(result.price).toBe(634.96);
  });
  test("Tesla Model 3 Standard Range - 20min, 30km", async () => {
    // ARRANGE
    const car = beast.cars.find(
      (car) => car.name === "Tesla Model 3 Standard Range"
    );
    const searchParamsObj = {
      distance: 30,
      days: 0,
      hours: 0,
      minutes: 20,
    };

    // ACT
    const result = beastPriceCalculator.calculatePrice(car, searchParamsObj);

    // ASSERT
    expect(result.price).toBe(9.99);
  });
  test("Tesla Model 3 Standard Range - 1 day 1min 600km", async () => {
    // ARRANGE
    const car = beast.cars.find(
      (car) => car.name === "Tesla Model 3 Standard Range"
    );
    const searchParamsObj = {
      distance: 600,
      days: 1,
      hours: 0,
      minutes: 1,
    };

    // ACT
    const result = beastPriceCalculator.calculatePrice(car, searchParamsObj);

    // ASSERT
    expect(result.price.toFixed(2)).toBe(125.23 + "");
  });
});
