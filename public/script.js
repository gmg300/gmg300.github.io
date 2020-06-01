$(document).ready(function() {
  // ACTIVATE CSS
  $('.parallax').parallax();
  
  $(".sidenav").sidenav({
    draggable: true,
    preventScrolling: true
  });

  // VARIABLES
  const portfolio = [
    {
      title: "Password Generator",
      description: "",
      img: "password-generator-s.jpg",
      repo: "https://github.com/gmg300/password-generator",
      page: "https://gmg300.github.io/password-generator/"
    },
    {
      title: "Code Quiz",
      description: "",
      img: "code-quiz-s.jpg",
      repo: "https://github.com/gmg300/code-quiz",
      page: "https://gmg300.github.io/code-quiz/"
    },
    {
      title: "Work Day Planner",
      description: "",
      img: "work-day-planner-s.jpg",
      repo: "https://github.com/gmg300/work-day-planner",
      page: "https://gmg300.github.io/work-day-planner/"
    },
    {
      title: "Weather Dashboard",
      description: "",
      img: "weather-dashboard-s.jpg",
      repo: "https://github.com/gmg300/weather-dashboard",
      page: "https://gmg300.github.io/weather-dashboard/"
    },
    {
      title: "Shaker",
      description: "",
      img: "shaker-s.jpg",
      repo: "https://github.com/gmg300/Shaker",
      page: "https://gmg300.github.io/Shaker/"
    },
    {
      title: "Note Taker",
      description: "",
      img: "note-taker-s.jpg",
      repo: "https://github.com/gmg300/Note-Taker",
      page: "https://still-brook-31315.herokuapp.com/"
    },
    {
      title: "Team Profile Generator",
      description: "",
      img: "team-profile-generator-s.jpg",
      repo: "https://github.com/gmg300/team-profile-generator",
      page: ""
    },
    {
      title: "The Coding Library",
      description: "",
      img: "the-coding-library-s.jpg",
      repo: "https://github.com/gmg300/the-coding-library",
      page: "https://coding-resources-312.herokuapp.com/"
    },
  ];

  const technologies = [
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
  // getTechnologies();
  getMenuLabel();


  $('.label').on('click', function() {
    $('.label').removeClass("active");
    $(this).addClass("active");
    getMenuLabel();
  })

  // FUNCTIONS
  function getName() {
    let block = "";
    let viewport = $(window).width();
    // console.log(viewport);
    if (viewport <= 768) {
      block = `< G G />`;
    } else {
      block = "GARRETT GASSENSMITH";
    }
    $(".brand-logo").text(block);
  }

  function getMenuLabel() {
    let currentLabel = $('.active').text(); 
    $('.menu-label').text(currentLabel);
  }

  function getCopyright() {
    let currentYear = moment().year();
    $("#copyright").text("© " + currentYear + " Garrett Gassensmith");
  }

  function getPortfolio() {
    $.each(portfolio, function() {
      let img = "public/images/stills/" + this.img;
      let block = `<div class="col l6 z-depth-5">
                    <div class="profile image hvr-shrink">
                      <img src="${img}" alt="Garrett Gassensmith">
                      <div class="text">
                        <p>${this.title}</p>
                        <p>${this.description}</p>
                        <p class="btn project-link hvr-grow"><a class="" href="${this.repo}">Github</a></p>
                        <p class="btn project-link hvr-grow"><a class="" href="${this.page}">Live Page</a></p>
                      </div>
                    </div>
                  </div>`;
      $("#portfolio-view").prepend(block);
    });
  }

  // function getTechnologies() {
  //  $.each(technologies, function() {
  //     let block = `<div class="tech-card center z-depth-5">
  //                     <i class="${this.logo}"></i>
  //                     <h6>${this.name}</h6>
  //                   </div>`;
  //     $("#tech-view").append(block);
  //   });
  // }
});
