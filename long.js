const longBreak = document.querySelector("#longBreak")
longBreak.addEventListener("click", function(){
	longBreakCount()
})

function longBreakCount(){
	const longTimer = 30;
	let amountLongTime = longTimer * 60; 
	const countdown = document.querySelector("#countdown");
	function calculateTimeForLong(){
	let minutesForLong = Math.floor(amountLongTime/60);
	let secondsForLong = amountLongTime%60;


	if (secondsForLong < 10) {
		secondsForLong = "0" + secondsForLong;
	}
		amountLongTime--;
		countdown.textContent = `${minutesForLong} : ${secondsForLong}`
	if (amountLongTime < 0){
		stopTimerForLong();
		amountLongTime=0;	
		document.querySelector("#parTwo").style.display = "block";
		document.querySelector("#countdown").innerHTML = `<audio id="myAudio" autoplay="autoplay" loop="loop"  src="/ring.mp3"></audio>`

	}
		
	function stopTimerForLong(){
		clearInterval(timerID)
	}
}
let timerID = setInterval(calculateTimeForLong, 1000)
}

