export class SolarAge {
  constructor(birthday) {
    this.birthday = birthday;
    this.earthDays = this.getEarthDays();
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
}
