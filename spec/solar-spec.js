import { today } from './../src/solar.js';

describe('daysAlive', function() {
var today;
var oneDay;
var birthday;
var ageDays;

  beforeEach(function() {
  today = new Date();
  });

  beforeEach(function() {
  oneDay = 24*60*60*1000; //hours*minutes*seconds*milliseconds - Convert day to milliseconds
  });

  beforeEach(function() {
  birthday = new Date("10/20/1990");
  });

  beforeEach(function() {
  ageDays = ((today.getTime() - birthday.getTime())/(oneDay)).toFixed(1);
  });


 it('should return user birthday to as number of days alive', function() {
   console.log(today);
   console.log(oneDay);
   console.log(birthday);
   console.log(ageDays);
 });

});
