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
		age = yyyy - 2005
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
				document.getElementById("age").innerHTML = age,
				document.getElementById("ago").innerText = 365 - Math.floor(distance / (day)),
				document.getElementById("days").innerText = Math.floor(distance / (day)),
				document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
				document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
				document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
			//do something later when date is reached
			if (distance < 0) {
				document.getElementById("text09").innerText = "It's my birthday!";
				document.getElementById("countdown").style.display = "none";
				document.getElementById("content").style.display = "block";
				const script = document.createElement('script');
				script.src = './confetti.js';
				document.head.appendChild(script);
				clearInterval(x);
			}
			//seconds
		}, 0)
}());