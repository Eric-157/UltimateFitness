function button_press() {
	var x = document.getElementById("drop-down_content");
	var y = document.getElementById("button");
	if (x.style.width === "250px") {
		x.style.width = "0";
		y.style.backgroundImage = "url(uf_buttons/hamburger.png)"
	} else {
		x.style.width = "250px";
		y.style.backgroundImage = "url(uf_buttons/close.png)"
	}
}