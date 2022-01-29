const swup = new Swup({
  animationSelector: '[class*="swup-transition-"]',
  plugins: [new SwupOverlayTheme({
    color: '#2D2E82',
    duration: 300,
    direction: 'to-right',
  }), new SwupBodyClassPlugin()]
});
const jsConfetti = new JSConfetti()
init();
swup.on('contentReplaced', init);
function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /*loop through a collection of all HTML elements:*/
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("include-html");
    if (file) {
      /*make an HTTP request using the attribute value as the file name:*/
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /*remove the attribute, and call this function once more:*/
          elmnt.removeAttribute("include-html");
          includeHTML();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      /*exit the function:*/
      return;
    }
  }
};

function Multiply(node, count, deep) {
  for (var i = 0, copy; i < count - 1; i++) {
      copy = node.cloneNode(deep);
      node.parentNode.insertBefore(copy, node);
  }
}

function init() {
  if (document.querySelector('#socials')) {
    includeHTML()
  }
  if (document.querySelector('.banan')) {
    Multiply(document.querySelector('#banan'), 100, true);
    Multiply(document.querySelector('.banan'), 100, true);
  }
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
      const countDown = new Date(birthday).getTime(),
      x = setInterval(function () {
        const now = new Date().getTime(),
        distance = countDown - now;
        if (document.querySelector('#countdown')) {
          document.getElementById("ago").innerText = 365 - Math.floor(distance / (day))
          document.getElementById("days").innerText = Math.floor(distance / (day)),
          document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
              document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
              document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second)
            };
            if (distance < 0) {
              if (document.querySelector('#countdown')) {
                document.getElementById("announcer").innerText = "It's my birthday!"
                document.getElementById("announcer").classList.add("text-6xl")
                document.getElementById("countdown").style.display = "none"
                document.getElementById("content").style.display = "block"
                document.getElementById("announcer2").style.display = "none"
              };
              jsConfetti.addConfetti({
                emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸'],
                confettiColors: ['#ff0a54', '#ff477e', '#ff7096', '#ff85a1', '#fbb1bd', '#f9bec7',],
                confettiRadius: 6,
                confettiNumber: 200,
                emojiSize: 50,
              })
              clearInterval(x);
            }
          }, 0)
        }());
      }
    }