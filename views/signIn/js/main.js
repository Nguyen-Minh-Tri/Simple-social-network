function on() {
  	document.getElementById("overlay").style.display = "flex";
  	var modal = document.getElementById('overlay');
  	window.onclick = function(event) {
  		if (event.target == modal) {
    	modal.style.display = "none";
  		}
	}
}

function off() {
  document.getElementById("overlay").style.display = "none";
}

