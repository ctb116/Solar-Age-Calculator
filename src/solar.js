export class SolarAge {
  constructor(birthday, lifeExpectancy) {
    this.birthday = birthday;
    this.lifeExpectancy = lifeExpectancy;
    this.earthDays = this.getEarthDays();
    this.mercuryAge = this.getMercuryAge();
    this.venusAge = this.getVenusAge();
    this.marsAge = this.getMarsAge();
    this.jupiterAge = this.getJupiterAge();
  }

  getEarthDays() {
  const today = new Date();
  const oneDay = 24*60*60*1000;
  let earthDays = ((today.getTime() - (this.birthday).getTime())/(oneDay)).toFixed(1);
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
      return "You've been dead for " + mercuryTime + " years on Mercury )=";
    } else {
      return "You have " + mercuryTime + " years left on Mercury";
    }
  }

  getVenusLife() {
    let venusTime = (this.venusAge - this.lifeExpectancy).toFixed(1);
    if (venusTime > 0) {
      return "You've been dead for " + venusTime + " years on Venus )=";
    } else {
      return "You have " + venusTime + " years left on Venus";
    }
  }

  getMarsLife() {
    let marsTime = (this.marsAge - this.lifeExpectancy).toFixed(1);
    if (marsTime > 0) {
      return "You've been dead for " + marsTime + " years on Mars )=";
    } else {
      return "You have " + marsTime + " years left on Mars";
    }
  }

  getJupiterLife() {
    let jupiterTime = (this.jupiterAge - this.lifeExpectancy).toFixed(1);
    if (jupiterTime > 0) {
      return "You've been dead for " + jupiterTime + " years on Jupiter )=";
    } else {
      return "You have " + jupiterTime + " years left on Jupiter";
    }
  }
}
