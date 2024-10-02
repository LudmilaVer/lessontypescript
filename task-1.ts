export interface Car {
    brand: string;
    model: string;
    year: number;
    isElectric: boolean;
  }
  
  function CarConstructor(
    brand: string,
    model: string,
    year: number,
    isElectric: boolean
  ): Car {
    return { brand, model, year, isElectric };
  }
  
  let car: Car = CarConstructor("BMW", "E39", 2003, false);
  let car2: Car = CarConstructor("Tesla", "Type S", 2024, true);
  
  function describeCar({ brand, model, year, isElectric }: Car): string {
    let status = isElectric ? "Yes" : "No";
    return `${brand} ${model} (${year}), Electric: ${status}`;
  }
  
  console.log(describeCar(car));
  console.log(describeCar(car2));
  