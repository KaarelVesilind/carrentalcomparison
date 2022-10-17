export default class OffersFilter {
  filter(offers, filterConditionsObj) {
    let filteredOffers = [...offers];

    for (const condition in filterConditionsObj) {
      switch (condition) {
        case "bodyType":
          filteredOffers = this._searchBodyTypes(
            filteredOffers,
            filterConditionsObj[condition]
          );
          break;
        case "motorType":
          filteredOffers = this._searchMotor(
            filteredOffers,
            filterConditionsObj[condition]
          );
          break;
        case "petFriendly":
          filteredOffers = this._searchPetFriendly(
            filteredOffers,
            filterConditionsObj[condition]
          );
          break;
        case "gearBox":
          filteredOffers = this._searchGearBox(
            filteredOffers,
            filterConditionsObj[condition]
          );
          break;
        // TODO provider, no filters,
      }
    }

    return filteredOffers;
  };

  _searchBodyTypes(offers, value) {
    const haveSomeBodyType = Object.values(value).some((bodyType) => bodyType);
    if (!haveSomeBodyType) return offers;
    return offers.filter((offer) => value[offer.car.bodyType]);
  }

  _searchMotor(offers, value) {
    const haveSomeMotorType = Object.values(value).some(
      (motorType) => motorType
    );
    if (!haveSomeMotorType) return offers;
    return offers.filter((offer) => value[offer.car.motorType]);
  }

  _searchPetFriendly(offers, value) {
    if (!value) return offers;
    return offers.filter((offer) => offer.car.petFriendly);
  }

  _searchGearBox(offers, value) {
    const haveSomeGearBox = Object.values(value).some((gearBox) => gearBox);
    if (!haveSomeGearBox) return offers;
    return offers.filter((offer) => value[offer.car.gearBox]);
  };
}
