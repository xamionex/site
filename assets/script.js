const swup = new Swup({
  animationSelector: '[class*="swup-transition-"]',
  plugins: [new SwupOverlayTheme({
    color: '#2D2E82',
    duration: 300,
    direction: 'to-right',
  }), new SwupHeadPlugin(), new SwupBodyClassPlugin()]
}); // only this line when included with script tag

// run once
init();
// this event runs for every page view after initial load
swup.on('contentReplaced', init);
function init() {
  if (document.querySelector('#myname')) {
    new Typewriter('#myname', {
      strings: ['Hello, I\'m <strong>Petar</strong>', 'I\'m a <strong>Serbian Programmer</strong>', 'I hope you like my site.'],
      autoStart: true,
      loop: true,
      deleteSpeed: 70,
      delay: 100,
      pauseFor: 2000,
    });
  }
  if (document.querySelector('#specs')) {
    new Typewriter('#specs', {
      strings: ['Stormbringer', 'Stormbreaker\'s Twin', 'Petar\'s PC'],
      autoStart: true,
      loop: true,
      deleteSpeed: 50,
      delay: 70,
      pauseFor: 2500,
    });
  }
  if (document.querySelector('#age')) {
    function getAge(dateString) {
      var today = new Date();
      var birthDate = new Date(dateString);
      var age = today.getFullYear() - birthDate.getFullYear();
      var m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      return age;
    }
    document.getElementById("age").innerHTML = getAge("2005/11/22");
  }
  if (document.querySelector('#ago')) {
    (function () {
      const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;
      //I'm adding this section so I don't have to keep updating this pen every year :-)
      //remove this if you don't need it
      let today = new Date(),
        dd = String(today.getDate()).padStart(2, "0"),
        mm = String(today.getMonth() + 1).padStart(2, "0"),
        yyyy = today.getFullYear(),
      nextYear = yyyy + 1,
        dayMonth = "11/22/",
        birthday = dayMonth + yyyy;
      today = mm + "/" + dd + "/" + yyyy;
      if (today > birthday) {
        birthday = dayMonth + nextYear;
      }
      //end
      const countDown = new Date(birthday).getTime(),
        x = setInterval(function () {
          const now = new Date().getTime(),
            distance = countDown - now;
            if (document.querySelector('#ago')) {
              document.getElementById("ago").innerText = 365 - Math.floor(distance / (day))
            };
            if (document.querySelector('#days')) {
              document.getElementById("days").innerText = Math.floor(distance / (day))
            };
            if (document.querySelector('#hours')) {
              document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour))
            };
            if (document.querySelector('#minutes')) {
              document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute))
            };
            if (document.querySelector('#seconds')) {
              document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second)
            };
          //do something later when date is reached
          if (distance < 0) {
            if (document.querySelector('#announcer')) {
              document.getElementById("announcer").innerText = "It's my birthday!"
            };
            if (document.querySelector('#announcer')) {
              document.getElementById("announcer").classList.add("text-6xl")
            };
            if (document.querySelector('#countdown')) {
              document.getElementById("countdown").style.display = "none"
            };
            if (document.querySelector('#content')) {
              document.getElementById("content").style.display = "block"
            };
            if (document.querySelector('#announcer2')) {
              document.getElementById("announcer2").style.display = "none"
            };
            const script = document.createElement('script');
            script.src = '/assets/confetti.js';
            document.head.appendChild(script);
            clearInterval(x);
          }
          //seconds
        }, 0)
    }());
  }
}