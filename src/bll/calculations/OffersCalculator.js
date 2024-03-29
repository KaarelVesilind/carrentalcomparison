import { beast } from "@/providers/shortTerm/beast";
import { bolt } from "@/providers/shortTerm/bolt";
import { citybee } from "@/providers/shortTerm/citybee";
import { elmo } from "@/providers/shortTerm/elmo";
import { avis } from "@/providers/shortTerm/avis";
import BeastPriceCalculator from "./priceCalculations/BeastPriceCalculator";
import BoltPriceCalculator from "./priceCalculations/BoltPriceCalculator";
import CityBeePriceCalculator from "./priceCalculations/CityBeePriceCalculator";
import ElmoPriceCalculator from "./priceCalculations/ElmoPriceCalculator";
import AvisPriceCalculator from "./priceCalculations/AvisPriceCalculator";

export default class OffersCalculator {
  providers = { beast, bolt, citybee, elmo, avis };

  calculateOffers(searchParamsObj) {
    let offers = [];
    for (const provider in this.providers) {
      if (
        this.providers[provider].cities.includes(searchParamsObj.start) &&
        this.providers[provider].cities.includes(searchParamsObj.end)
      ) {
        for (const car of this.providers[provider].cars) {
          let priceDetails = this._calculatePrice(provider, car, {
            ...searchParamsObj,
          });

          offers.push({
            id: offers.length + 1,
            price: priceDetails.price,
            priceDetails: priceDetails,
            car: car,
            provider: provider,
          });
        }
      }
    }
    return offers;
  }

  _calculatePrice(provider, car, searchParamsObj) {
    switch (provider) {
      case "elmo": {
        const elmoPriceCalculator = new ElmoPriceCalculator();
        return elmoPriceCalculator.calculatePrice(car, searchParamsObj);
      }
      case "beast": {
        const beastPriceCalculator = new BeastPriceCalculator();
        return beastPriceCalculator.calculatePrice(car, searchParamsObj);
      }
      case "bolt": {
        const boltPriceCalculator = new BoltPriceCalculator();
        return boltPriceCalculator.calculatePrice(car, searchParamsObj);
      }
      case "citybee": {
        const cityBeePriceCalculator = new CityBeePriceCalculator();
        return cityBeePriceCalculator.calculatePrice(car, searchParamsObj);
      }
      case "avis": {
        const avisPriceCalculator = new AvisPriceCalculator();
        return avisPriceCalculator.calculatePrice(car, searchParamsObj);
      }
    }
  }
}
