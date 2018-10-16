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
  var lifeExpectancy

  beforeEach(function() {
    today = new Date();
    oneDay = 24*60*60*1000; //hours*minutes*seconds*milliseconds - Convert day to milliseconds
    inputBirthday = new Date("10/16/1990");
    lifeExpectancy = 86;
    ageDays = ((today.getTime() - inputBirthday.getTime())/(oneDay)).toFixed(1);
    birthday = new SolarAge(inputBirthday, lifeExpectancy);
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

  it('should return Happy Birthday message if user birthday equal today', function() {
    let birthdayToday = new Date();
    let birthdayTodayMonth = birthdayToday.getMonth();
    let birthdayTodayDay = birthdayToday.getDay();
    let date = new Date();
    let dateMonth = date.getMonth();
    let dateDay = date.getDay();
    let birthdayTest = (birthday.checkBirthday);
    console.log("Birthday" + birthdayTodayMonth + birthdayTodayDay);
    console.log("Today" + dateMonth + dateDay);
    expect(birthdayTest).toEqual("Happy Birthday!!!!");
  });

  it('should return user age in years to Mercury age in years', function() {
    let ageMercury = (ageDays / mercuryDays).toFixed(1);
    console.log("Age in years on Mercury: " + ageMercury);
    expect(birthday.getMercuryAge()).toEqual(ageMercury);
  });

  it('should return user age in years to Venus age in years', function() {
    let ageVenus = (ageDays / venusDays).toFixed(1);
    console.log("Age in years on Venus: " + ageVenus);
    expect(birthday.getVenusAge()).toEqual(ageVenus);
  });

  it('should return user age in years to Mars age in years', function() {
    let ageMars = (ageDays / marsDays).toFixed(1);
    console.log("Age in years on Mars: " + ageMars);
    expect(birthday.getMarsAge()).toEqual(ageMars);
  });

  it('should return user age in years to Jupiter age in years', function() {
    let ageJupiter = (ageDays / jupiterDays).toFixed(1);
    console.log("Age in years on Jupiter: " + ageJupiter);
    expect(birthday.getJupiterAge()).toEqual(ageJupiter);
  });

  it('should return user time dead in Mercury years', function() {
    let timeMercury = (birthday.getMercuryAge() - lifeExpectancy).toFixed(1);
    console.log("Time dead on Mercury: " + timeMercury);
    expect(birthday.getMercuryLife()).toEqual("You've been dead for " + timeMercury + " years on Mercury )=");
  });

  it('should return user time left alive in Venus years', function() {
    let timeVenus = (birthday.getVenusAge() - lifeExpectancy).toFixed(1);
    console.log("Time left on Venus: " + timeVenus);
    expect(birthday.getVenusLife()).toEqual("You have " + timeVenus + " years left on Venus");
  });

  it('should return user time left alive in Mars years', function() {
    let timeMars = (birthday.getMarsAge() - lifeExpectancy).toFixed(1);
    console.log("Time left on Mars: " + timeMars);
    expect(birthday.getMarsLife()).toEqual("You have " + timeMars + " years left on Mars");
  });

  it('should return user time life alive in Jupiter years', function() {
    let timeJupiter = (birthday.getJupiterAge() - lifeExpectancy).toFixed(1);
    console.log("Time left on Jupiter: " + timeJupiter);
    expect(birthday.getJupiterLife()).toEqual("You have " + timeJupiter + " years left on Jupiter");
  });

});
