export class SolarAge {
  constructor(birthday, lifeExpectancy) {
    this.birthday = birthday;
    this.lifeExpectancy = lifeExpectancy;
    this.earthDays = this.getEarthDays();
    this.mercuryAge = this.getMercuryAge();
  }

  getEarthDays() {
  const today = new Date();
  const oneDay = 24*60*60*1000;
  let earthDays = ((today.getTime() - this.birthday.getTime())/(oneDay)).toFixed(1);
  return earthDays;
  }

  getMercuryAge() {
    const mercuryDays = 88.0;
    let mercuryAge = (this.earthDays / mercuryDays).toFixed(1);
    return mercuryAge;
  }

  getVenusAge() {
    const venusDays = 224.7;
    let venusAge = (this.earthDays / venusDays).toFixed(1);
    return venusAge;
  }

  getMarsAge() {
    const marsDays = 686.7;
    let marsAge = (this.earthDays / marsDays).toFixed(1);
    return marsAge;
  }

  getJupiterAge() {
    const jupiterDays = 4331.2;
    let jupiterAge = (this.earthDays / jupiterDays).toFixed(1);
    return jupiterAge;
  }

  getMercuryLife() {
    let mercuryTime = (this.mercuryAge - this.lifeExpectancy).toFixed(1);
    if (mercuryTime > 0) {
      return "You've been dead for " + mercuryTime + " on Mercury )=";
    } else {
      return "You have " + mercuryTime + " left on Mercury";
    }
  }
}
