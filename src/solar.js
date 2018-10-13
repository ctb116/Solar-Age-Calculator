export class SolarAge {
  constructor(birthday) {
    this.birthday = birthday;
  }


  getDays() {
  const today = new Date();
  const oneDay = 24*60*60*1000;
  let ageDays = ((today.getTime() - this.birthday.getTime())/(oneDay)).toFixed(1);
  return ageDays;
  }



}


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
