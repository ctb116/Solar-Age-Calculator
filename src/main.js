import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { SolarAge } from './solar.js';

$(document).ready(function() {

  $("form").submit(function(event) {
    event.preventDefault();
    let birthday = new Date($('#birthday').val());
    let age = 79;
    let user = new SolarAge(birthday, age);

    $('.planet').click(function() {
      if(this.id === 'mercury') {
        $("#selectPlanet").text(user.getMercuryAge() + user.getMercuryLife());
      } else if (this.id === 'venus') {
        $("#selectPlanet").text(user.getVenusAge() + user.getVenusLife());
      } else if (this.id === 'mars') {
        $("#selectPlanet").text(user.getMarsAge() + user.getMarsLife());
      } else if (this.id === 'jupiter') {
        $("#selectPlanet").text(user.getJupiterAge() + user.getJupiterLife());
      }
    });
  });
});
