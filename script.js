const startButton = document.querySelector("#start")
startButton.addEventListener("click", function(){
	timer();
})

function timer(){
	const timer = 25;
	let amountTime = timer * 60; 
	const countdown = document.querySelector("#countdown");
	function calculateTime(){
	let minutes = Math.floor(amountTime/60);
	let seconds = amountTime%60;


	if (seconds < 10) {
		seconds = "0" + seconds;
	}
		amountTime--;
		countdown.textContent = `${minutes} : ${seconds}`
	if (amountTime < 0){
		stopTimer();
		amountTime=0;	
		document.querySelector("#par").style.display = "block";
		document.querySelector("#countdown").innerHTML = `<audio id="myAudio" autoplay="autoplay" loop="loop"  src="/ring.mp3"></audio>`
}

		
	function stopTimer(){
		clearInterval(timerID)
	}

}
let timerID = setInterval(calculateTime, 1000)
}



