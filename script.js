const clock = document.querySelector("div.clock span");

const renderClock = () => {
  const horaAtual = new Date();
  clock.innerHTML =
    ("0" + horaAtual.getHours()).slice(-2) +
    ":" +
    ("0" + horaAtual.getMinutes()).slice(-2) +
    ":" +
    ("0" + horaAtual.getSeconds()).slice(-2);
};

setInterval(renderClock, 1000);
renderClock();

function buscarClima() {
  const apiKey = "93deb309e93049378a2135718252605";
  const cidade = "Marília";
  const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cidade}&lang=pt`;
  fetch(url)
    .then((response) => response.json())
    .then((dados) => {
      const temperatura = dados.current.temp_c;
      const descricao = dados.current.condition.text;
      document.getElementById(
        "infoClima"
      ).innerText = `${temperatura}°C ${descricao}`;
    })
    .catch((error) => console.error("Erro:", error));
}

buscarClima();
setInterval(buscarClima, 15 * 60 * 1000);
