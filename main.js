const endpoint = "http://192.168.18.30";

function getLed1() {
  fetch(endpoint + "/led1", {
    method: "GET",
  })
    .then((response) => response.text())
    .then((result) => {
      if (result == "ON") {
        led1.style.background = "blue";
        led1Image.src = "./assets/led-on.png";
      } else {
        led1.style.background = "#579fff";
        led1Image.src = "./assets/led-off.png";
      }
    });
}
function getLed2() {
  fetch(endpoint + "/led2", {
    method: "GET",
  })
    .then((response) => response.text())
    .then((result) => {
      if (result == "ON") {
        led2.style.background = "blue";
        led2Image.src = "./assets/led-on.png";
      } else {
        led2.style.background = "#579fff";
        led2Image.src = "./assets/led-off.png";
      }
    });
}
function getLed3() {
  fetch(endpoint + "/led3", {
    method: "GET",
  })
    .then((response) => response.text())
    .then((result) => {
      if (result == "ON") {
        led3.style.background = "blue";
        led3Image.src = "./assets/led-on.png";
      } else {
        led3.style.background = "#579fff";
        led3Image.src = "./assets/led-off.png";
      }
    });
}
function getLed4() {
  fetch(endpoint + "/led4", {
    method: "GET",
  })
    .then((response) => response.text())
    .then((result) => {
      if (result == "ON") {
        led4.style.background = "blue";
        led4Image.src = "./assets/led-on.png";
      } else {
        led4.style.background = "#579fff";
        led4Image.src = "./assets/led-off.png";
      }
    });
}

function setLed1() {
  fetch(endpoint + "/led1", {
    method: "POST",
  })
    .then((respond) => respond.text())
    .then(() => location.reload());
}
function setLed2() {
  fetch(endpoint + "/led2", {
    method: "POST",
  })
    .then((respond) => respond.text())
    .then(() => location.reload());
}
function setLed3() {
  fetch(endpoint + "/led3", {
    method: "POST",
  })
    .then((respond) => respond.text())
    .then(() => location.reload());
}
function setLed4() {
  fetch(endpoint + "/led4", {
    method: "POST",
  })
    .then((respond) => respond.text())
    .then(() => location.reload());
}

getLed1();
getLed2();
getLed3();
getLed4();
