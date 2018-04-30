let store = {
  drivers: [],
  passengers: [],
  trips: []
};

let driverId = 0;

class Driver {
  constructor (name) {
    this.name = name;
    this.id = ++driverId;

    store.drivers.push(this);
  }

  trips () {
    return store.trips.filter( (trip) => {
        return this.id === trip.driverId;
    });
  }

  passengers () {
    let output = [];

    this.trips().forEach ( (trip) => {

      store.passengers.forEach ( (passenger) => {
        // select passangers whose id is in trips.passengerId
        if (passenger.id === trip.passengerId) {
          output.push(passenger);
        }
      });

    });

    return output;

  }
}

let passengerId = 0;

class Passenger {
  constructor (name) {
    this.name = name;
    this.id = ++passengerId;

    store.passengers.push(this);
  }

  trips () {
    return store.trips.filter( (trip) => {
        return this.id === trip.passengerId;
    });
  }

  drivers () {
    let output = [];

    this.trips().forEach ( (trip) => {

      store.drivers.forEach ( (driver) => {
        if (driver.id === trip.driverId) {
          output.push(driver);
        }
      });

    });

    return output;

  }

}

let tripId = 0;

class Trip {
  constructor(driver, passenger) {
    this.id = ++tripId;

    if (driver) {
      this.driverId = driver.id;
    };

    if (passenger) {
      this.passengerId = passenger.id;
    };

    store.trips.push(this);
  }

  passenger () {
    return store.passengers.find( (passenger) => {
      return this.passengerId === passenger.id;
    });
  }

  driver () {
    return store.drivers.find( (driver) => {
      return this.driverId === driver.id;
    });
  }
}
