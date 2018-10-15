import { SolarAge } from '../src/solar.js';

describe('daysAlive', function() {
  var today;
  var oneDay;
  var inputBirthday;
  var ageDays;
  var mercuryDays;
  var venusDays;
  var marsDays;
  var jupiterDays;
  var birthday;

  beforeEach(function() {
    today = new Date();
    oneDay = 24*60*60*1000; //hours*minutes*seconds*milliseconds - Convert day to milliseconds
    inputBirthday = new Date("10/20/1990");
    ageDays = ((today.getTime() - inputBirthday.getTime())/(oneDay)).toFixed(1);
    birthday = new SolarAge(inputBirthday);
  });

  beforeEach(function() {
    mercuryDays = 88.0;
    venusDays = 224.7;
    marsDays = 686.7;
    jupiterDays = 4331.2;
  });

  it('should return user birthday to as number of days alive', function() {
    console.log("Age in days:" + ageDays);
    birthday = new SolarAge(inputBirthday);
    let getEarthDaysTest = (birthday.earthDays);
    expect(getEarthDaysTest).toEqual(ageDays);
  });

  it('should return user age in years to Mercury age in years', function() {
    var ageMercury = (ageDays / mercuryDays).toFixed(1);
    console.log("Age in years on Mercury: " + ageMercury);
    expect(birthday.getMercuryAge()).toEqual(ageMercury);
  });

  it('should return user age in years to Venus age in years', function() {
    var ageVenus = (ageDays / venusDays).toFixed(1);
    console.log("Age in years on Venus: " + ageVenus);
    expect(birthday.getVenusAge()).toEqual(ageVenus);
  });

  it('should return user age in years to Mars age in years', function() {
    var ageMars = (ageDays / marsDays).toFixed(1);
    console.log("Age in years on Mars: " + ageMars);
    expect(birthday.getMarsAge()).toEqual(ageMars);
  });

  it('should return user age in years to Jupiter age in years', function() {
    var ageJupiter = (ageDays / jupiterDays).toFixed(1);
    console.log("Age in years on Jupiter: " + ageJupiter);
    expect(birthday.getJupiterAge()).toEqual(ageJupiter);
  });


});
