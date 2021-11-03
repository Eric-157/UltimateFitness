function button_press() {
    var x = document.getElementById("drop-down_content");
    if (x.style.width === "250px") {
      x.style.width = "0";
    } else {
      x.style.width = "250px";
    }
}