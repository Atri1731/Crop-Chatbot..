
function getSoilRecommendation() {
  const ph = parseFloat(document.getElementById('ph').value);
  const moisture = parseInt(document.getElementById('moisture').value);
  const nitrogen = document.getElementById('nitrogen').value;

  let recommendation = "Recommended Crops: ";

  if (ph >= 6 && ph <= 7.5 && moisture > 30 && nitrogen === "High") {
    recommendation += "Wheat, Rice, Sugarcane";
  } else if (ph >= 5.5 && ph <= 6.5 && nitrogen === "Medium") {
    recommendation += "Cotton, Soybean";
  } else {
    recommendation += "Millet, Groundnut, Pulses";
  }

  document.getElementById("soilResult").innerText = recommendation;
  return false;
}
function simulatePrices() {
  setInterval(() => {
    document.getElementById("wheat-price").innerText = Math.floor(Math.random() * 20) + 45;
    document.getElementById("rice-price").innerText = Math.floor(Math.random() * 20) + 55;
  }, 5000);
}
simulatePrices();
function startVoice() {
  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  recognition.lang = 'en-IN';
  recognition.start();

  recognition.onresult = function(event) {
    const speechResult = event.results[0][0].transcript;
    alert("You said: " + speechResult);
    // You can connect this with your chatbot API later.
  };
}
