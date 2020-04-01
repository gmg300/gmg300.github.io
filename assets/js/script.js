$(document).ready(function() {
  // ACTIVATE CSS
  $(".sidenav").sidenav({
    draggable: true,
    preventScrolling: true
  });

  // VARIABLES
  var portfolio = [
    {
      title: "Password Generator",
      description:
        "A password generator using a simple Bootstrap UI and javascript. Users can customize the password length as well as what types of characters are included in the password. Settings are validated and the result is written to the page. User settings are created with a number input and checkboxes and invalid inputs return an error message to the user.",
      img: "password-generator-s.png",
      repo: "https://github.com/gmg300/password-generator",
      page: "https://gmg300.github.io/password-generator/"
    },
    {
      title: "Code Quiz",
      description:
        "Code quiz is a single-page web app using HTML, Tailwindcss and pure JS that serves 10 geography questions with a multiple choice answering system. Along side generating the questions and answers in random order the web app includes scoring based off a built-in timer, answer feedback, and a localStorage based high score board that accepts usernames with scores and basic management like deleting old scores.",
      img: "code-quiz-s.png",
      repo: "https://github.com/gmg300/code-quiz",
      page: "https://gmg300.github.io/code-quiz/"
    },
    {
      title: "Work Day Planner",
      description:
        "This web app is a simple (work day) calendar that allows users to schedule, edit and delete events while saving them in local storage. The time is tracked along the calendar showing present and future blocks of time by color and disabling past blocks from new inputs. The app sets the day/time using moment.js and displays current weekday, date and time in the heading.",
      img: "work-day-planner-s.png",
      repo: "https://github.com/gmg300/work-day-planner",
      page: "https://gmg300.github.io/work-day-planner/"
    },
    {
      title: "Weather Dashboard",
      description:
        "A weather app that shows basic weather data, and a 5-day forecast for a city based on user search. User search history is saved in a list that can get weather data again when the user clicks on the city name.",
      img: "weather-dashboard-s.png",
      repo: "https://github.com/gmg300/weather-dashboard",
      page: "https://gmg300.github.io/weather-dashboard/"
    },
    {
      title: "Shaker",
      description:
        "Shaker is a web app for discovering new cocktails and drinks. Users can The Cocktail DB api for a random list of cocktails filtering by alcohol type and number of drinks. Drink cards display a name and photo of the drink as well as ingredients, measurements, and recipe instructions. Favorite drinks can be stored in localStorage, recalled for future use and deleted is necessary. Shaker also features the Google maps api, allow users to pull up a map of bars near them that may be serving the new and interesting cocktails they find!",
      img: "shaker-s.png",
      repo: "https://github.com/gmg300/Shaker",
      page: "https://gmg300.github.io/Shaker/"
    }
  ];

  var technologies = [
    {
      name: "HTML",
      logo: "fab fa-html5 fa-5x"
    },
    {
      name: "CSS",
      logo: "fab fa-css3-alt fa-5x"
    },
    {
      name: "Javascript",
      logo: "fab fa-js fa-5x"
    },
    {
      name: "Node.js",
      logo: "fab fa-node-js fa-5x"
    },
  ];

  // INIT
  getName();
  $(window).resize(getName);
  getCopyright();
  getPortfolio();
  getTechnologies();

  // FUNCTIONS
  function getName() {
    var block = "";
    var viewport = $(window).width();
    // console.log(viewport);
    if (viewport <= 800) {
      block = `{ G G }`;
      $(".brand-logo").removeClass("margin-left revealLeft");
      $(".brand-logo").addClass("center");
    } else {
      block = "{ Garrett Gassensmith }";
      $(".brand-logo").removeClass("revealTop center");
      $(".brand-logo").addClass("margin-left revealLeft");
    }
    $(".brand-logo").text(block);
  }

  function getCopyright() {
    var currentYear = moment().year();
    $("#copyright").text("© " + currentYear + " Garrett Gassensmith");
  }

  function getPortfolio() {
    $.each(portfolio, function() {
      var img = "assets/images/stills/" + this.img;
      var block = `<div class="col s12 m6">
                    <div class="card hoverable">
                        <div class="card-image waves-effect waves-block waves-light">
                            <img class="activator" src="${img}">
                        </div>
                        <div class="card-content">
                            <span class="card-title activator">${this.title}</span>
                            <p class="btn project-link"><a class="" href="${this.repo}">Github</a></p>
                            <p class="btn project-link"><a class="" href="${this.page}">Live Page</a></p>
                        </div>
                        <div class="card-reveal">
                            <span class="card-title">Project Description<i
                            class="material-icons right">close</i></span>
                            <p>${this.description}</p>
                        </div>
                    </div>
                    </div>`;
      $("#portfolio-view").prepend(block);
    });
  }

  function getTechnologies() {
   $.each(technologies, function() {
      var block = `<div class="tech-card center z-depth-5">
                      <i class="${this.logo}"></i>
                      <h6>${this.name}</h6>
                    </div>`;
      $("#tech-view").append(block);
    });
  }
});
