var speed = 0
var prevspeed = 0
var currentScale = 1

function increasespeed() {
	if (speed < 180) {
		speed = speed + 10
		changetext()
		addclass()
		currentScale = currentScale + 1
		changeactive()
	}
}

function decreasespeed() {
	if (speed > 0) {
		speed = speed - 10
		changetext()
		addclass()
		changeactive()
		currentScale = currentScale - 1
	}
}

function addclass() {
	let newclass = "speed" + speed;
	let prevclass = "speed" + prevspeed;
	let el = document.getElementsByClassName("arrowhead")[0];
	if (el.classList.contains(prevclass)) {
		el.classList.remove(prevclass)
		el.classList.add(newclass)
	}
	prevspeed = speed;
}

function changeactive() {
	let temp = "speedometerscale" + currentScale;
	let el = document.getElementsByClassName(temp)[0]
	el.classList.toggle("active")
}

function changetext() {
	let el = document.getElementsByClassName("km")[0]
	el.innerHTML = speed
}
