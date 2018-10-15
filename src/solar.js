export class SolarAge {
  constructor(birthday) {
    this.birthday = birthday;
    this.getDays = this.getAgeDays();
    this.getMercuryAge = this.getMercuryAge();
  }

  // const today = new Date();
  // const oneDay = 24*60*60*1000;

  // const mercuryDays = 88.0;
  // const venusDays = 224.7;
  // const marsDays = 686.7;
  // const jupiterDays = 4331.2;

  getAgeDays() {
  const today = new Date();
  const oneDay = 24*60*60*1000;
  let birthday = this.birthday;
  let ageDays = ((today.getTime() - birthday.getTime())/(oneDay)).toFixed(1);
  return ageDays;


  getMercuryAge() {
    const mercuryDays = 88.0;
    let mercuryAge = (getAgeDays() / mercuryDays).toFixed(1);
    return mercuryAge;
  }

};



}

//
// console.log("test");
// console.log("test");

// export function Solar(birthday) {
//   this.birthday = birthday;
// }
//
// const today = new Date();
// const oneDay = 24*60*60*1000;
//
// const mercuryDays = 88.0;
// const venusDays = 224.7;
// const marsDays = 686.7;
// const jupiterDays = 4331.2;
//
// Solar.prototype.getDays = function () {
// var ageDays = ((today.getTime() - this.birthday.getTime())/(oneDay)).toFixed(1)
// console.log(ageDays);
// return ageDays;
// };
//
// //Days in a year for Mercury, Venus, Mars, Jupiter
// const solarDays = [88.0, 224.7, 686.7, 4331.2]
// //Average US life expectancy
// const lifeExp = 79;
