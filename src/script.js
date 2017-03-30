$(document).ready(function() {
  //===== AJAX functions =====
  let Ajax = function () {

    var getCall = function (uri){
      return $.ajax({
        type: 'GET',
        url: uri,
      });
    },

    errorHandler = function (xhr, status) {
      if(xhr.status === 400) {
        alert("Bad request, maybe you wrote the wrong word/numbers.")
      }
      else {
      alert("You got error code: " + xhr.status);
    }
      //alert("You got this error: " + error);
    }

    return{
      Get: getCall,
      DoError: errorHandler
    }
  }();


//===== Binds =====
let outputData = $(".well");

//===== Function to get Astronomy picture of the day =====
  $('#addSpaceInfo').click(function() {
    let year = $('#spaceInput1').val(),
    month = $('#spaceInput2').val(),
    day = $('#spaceInput3').val();
    uri = 'https://api.nasa.gov/planetary/apod?date=' + year + '-' + month +'-' + day + '&api_key=bBU65q4w4DLC6hHt6SyD1V6xgsugKkRbR3eDQYBi';

    Ajax.Get(uri).then(function(response) {
      outputData.empty();
      outputData.append('<h2>Title: ' + response.title + '</h2>');
      outputData.append('<img src="' + response.hdurl + '" height="300" width="500" />');

      outputData.append('<p>Picture explanation: ' + response.explanation + '</p>');
      console.log(response);
    }, Ajax.DoError)
  })

//===== Function to get Country with given properties =====
  $('#addCountry').click(function(){
      let countryInput = $('#countryInput'),
      capital = $('#capitalCheck'),
      population = $('#populationCheck'),
      continent = $('#continentCheck'),
      uri ='https://restcountries.eu/rest/v2/name/' + countryInput.val();

        Ajax.Get(uri).then(function(response){
          outputData.empty();
          $.each(response, function(i, country) {
            outputData.append('<h2> Name: ' + country.name + '</h2>');
            if (capital.is(':checked')) {
              outputData.append('<h4> Capital: ' + country.capital + '</h3>')
            }
            if(population.is(':checked')) {
              outputData.append('<h4> Population: ' + country.population + '</h3>')
            }
            if (continent.is(':checked')) {
              outputData.append('<h4> Continent: ' + country.region + '</h3>')
            }
            outputData.append('<img src="' + country.flag + '" alt="flag" class="images" />')
          });
        }, Ajax.DoError);});

//===== Function to get Weather with given properties =====
  $('#weather-btn').click(function() {
    let cityInput = $('#weatherInput').val(),

    uri = 'http://api.openweathermap.org/data/2.5/weather?q=' + cityInput + '&units=metric&APPID=e985f6af257fd64e5778decdbeb3d715';

    Ajax.Get(uri).then(function(response){
        outputData.empty();

        outputData.append('<h2>City: ' + response.name + '</h2>');
        outputData.append('<p>Weather Condition: ' + response.weather[0].main + '</p>');
        outputData.append('<p>Wind: ' + response.wind.speed + '</p>');
        outputData.append('<p>Temperature: ' + response.main.temp + '°C</p>')
        outputData.append('<p>Humidity: ' + response.main.humidity + '</p>');
    }, Ajax.DoError);
  })


//===== HTML Menu Click Events =====
  $("#country-menu-btn").click(function() {
        outputData.empty();
        $("body").css({
          'background': 'url("images/map-2153535_1280.jpg")',
          'background-size' : 'cover'
        });
        $(".space-form").addClass("noShow");
        $(".weather-form").addClass("noShow");
        $(".country-form").removeClass("noShow");
      })

  $("#space-menu-btn").click(function() {
        outputData.empty();
        $("body").css({
          'background': 'url("images/space-travel-1784461_1280.png")',
          'background-size' : 'cover'
        });
        $(".country-form").addClass("noShow");
        $(".weather-form").addClass("noShow");
        $(".space-form").removeClass("noShow");
      });

  $("#weather-menu-btn").click(function() {
        outputData.empty();
        $("body").css({
          'background': 'url("images/supercell-139398_1280.jpg")',
          'background-size' : 'cover',
        });
        $(".country-form").addClass("noShow");
        $(".space-form").addClass("noShow");
        $(".weather-form").removeClass("noShow");
      })


});
