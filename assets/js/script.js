$(document).ready(function() {
  // ACTIVATE CSS
  $(".parallax").parallax();
  $(".sidenav").sidenav({
    draggable: true,
    preventScrolling: true
  });
  $(".carousel.carousel-slider").carousel({
    fullWidth: true,
    indicators: false
  });

   // VARIABLES
   var portfolio = [
    {
      title: "Password Generator",
      description:
        "A password generator using a simple Bootstrap UI and javascript. Users can customize the password length as well as what types of characters are included in the password. Settings are validated and the result is written to the page. User settings are created with a number input and checkboxes and invalid inputs return an error message to the user.",
      img: "password-generator-s.png"
    },
    {
      title: "Code Quiz",
      description: "Code quiz is a single-page web app using HTML, Tailwindcss and pure JS that serves 10 geography questions with a multiple choice answering system. Along side generating the questions and answers in random order the web app includes scoring based off a built-in timer, answer feedback, and a localStorage based high score board that accepts usernames with scores and basic management like deleting old scores.",
      img: "code-quiz-s.png"
    },
    {
      title: "Work Day Planner",
      description: "This web app is a simple (work day) calendar that allows users to schedule, edit and delete events while saving them in local storage. The time is tracked along the calendar showing present and future blocks of time by color and disabling past blocks from new inputs. The app sets the day/time using moment.js and displays current weekday, date and time in the heading.",
      img: "work-day-planner-s.png"
    },
    {
      title: "Weather Dashboard",
      description: "A weather app that shows basic weather data, and a 5-day forecast for a city based on user search. User search history is saved in a list that can get weather data again when the user clicks on the city name.",
      img: "weather-dashboard-s.png"
    },
    {
      title: "Shaker",
      description: "Shaker is a web app for discovering new cocktails and drinks. Users can The Cocktail DB api for a random list of cocktails filtering by alcohol type and number of drinks. Drink cards display a name and photo of the drink as well as ingredients, measurements, and recipe instructions. Favorite drinks can be stored in localStorage, recalled for future use and deleted is necessary. Shaker also features the Google maps api, allow users to pull up a map of bars near them that may be serving the new and interesting cocktails they find!",
      img: "shaker-s.png"
    }
  ];

  // INIT
  getName();
  $( window ).resize(getName);
  getCopyright();
  getPortfolio();

  // FUNCTIONS
  function getName() {
    
    var block = '';
    var viewport = $(window).width();
    console.log(viewport);
    if(viewport <= 600) {
        block = `{ G G }`;
        $('.brand-logo').addClass('center');
        $('.brand-logo').removeClass('margin-left');
    } else {
        block = '{ Garrett Gassensmith }';
        $('.brand-logo').removeClass('center');
        $('.brand-logo').addClass('margin-left');
    }
    $('.brand-logo').text(block);
  }

  function getCopyright() {
    var currentYear = moment().year();
    $("#copyright").text("© " + currentYear + " Garrett Gassensmith");
  }

  function getPortfolio() {
    for (i = 0; i < portfolio.length; i++) {
      var title = portfolio[i].title;
      var description = portfolio[i].description;
      var img = "assets/images/stills/" + portfolio[i].img;
      var block = `<div class="col s12 m6">
                    <div class="card hoverable" data-index="${i}">
                        <div class="card-image waves-effect waves-block waves-light">
                            <img class="activator" src="${img}">
                        </div>
                        <div class="card-content">
                            <span class="card-title activator">${title}</span>
                            <p class="btn project-link"><a class="" href="#">Github</a></p>
                        </div>
                        <div class="card-reveal">
                            <span class="card-title">Project Description<i
                            class="material-icons right">close</i></span>
                            <p>${description}</p>
                        </div>
                    </div>
                    </div>`;
      $("#portfolio-view").prepend(block);
    }
  }

});
