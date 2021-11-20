const shortBreak = document.querySelector("#shortBreak")
shortBreak.addEventListener("click", function(){
	shortBreakCount()
})

function shortBreakCount(){
	const shortTimer = 5;
	let amountShortTime = shortTimer * 60; 
	const countdown = document.querySelector("#countdown");
	function calculateTimeForShort(){
	let minutesForShort = Math.floor(amountShortTime/60);
	let secondsForShort = amountShortTime%60;


	if (secondsForShort < 10) {
		secondsForShort = "0" + secondsForShort;
	}
		amountShortTime--;
		countdown.textContent = `${minutesForShort} : ${secondsForShort}`
	if (amountShortTime < 0){
		stopTimerForShort();
		amountShortTime=0;	
    document.querySelector("#parTwo").style.display = "block";
		document.querySelector("#countdown").innerHTML = `<audio id="myAudio" autoplay="autoplay" loop="loop"  src="/ring.mp3"></audio>`

	}
		
	function stopTimerForShort(){
		clearInterval(timerID)
	}
}
let timerID = setInterval(calculateTimeForShort, 1000)
}

