setInterval(function () {
  navigator.getBattery().then(function (battery) {
    console.log("Battery level: " + battery.level * 100 + "%");
    var audio = new Audio('alarme.mp3');
    var nivel = battery.level * 100;
    document.getElementById('texto').innerHTML = nivel + "%";
    nivel > 98 ? (audio.play()) : (console('teste'))




  });
}, 300000); // 300000 milisegundos = 5 minutos












