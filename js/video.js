var video;

// ELEMENT 1: "PAGE LOAD"
window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video = document.querySelector("#player1");
	video.autoplay = false;
	video.loop = false;
});

// ELEMENT 2: "PLAY BUTTON"
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
});

// ELEMENT 3: "PAUSE BUTTON"
document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

// ELEMENT 4: "SLOW DOWN"
document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down");
	video.playbackRate *=0.95;
	console.log("speed is", video.playbackRate);
});

// ELEMENT 5: "SPEED UP"
document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up");
	video.playbackRate /=0.95;
	console.log("new speed is", video.playbackRate);
});

// ELEMENT 6: "SKIP AHEAD"
document.querySelector("#skip"). addEventListener("click", function() {
	console.log("Skip Ahead");
	video.currentTime +=15;
	if (video.currentTime >= video.duration){
		video.currentTime = 0
	}
	console.log("video current time is", video.currentTime);
});

// ELEMENT 7: "MUTE"
document.querySelector("#mute").addEventListener("click", function() {
	console.log("mute")
	if (video.muted == false) {
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";
	} else {
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute";
	}
})

// ELEMENT 8: "VOLUME SLIDER"
document.querySelector("#slider").addEventListener("change", function() {
	video.volume = this.value / 100;
	document.querySelector("#volume").innerHTML=video.volume * 100 + "%";
})

// ELEMENT 9: "STYLED"
document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
});

// ELEMENT 10: "ORIGINAL" (REMOVE oldSchool class)
document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
});