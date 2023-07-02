function convert() {
    var temperature = parseFloat(document.getElementById("temperature").value);
    var unit = document.getElementById("unit").value;
    var result;

    if (unit === "celsius") {
      result = (temperature * 9/5) + 32;
      document.getElementById("result").textContent = temperature + "°C is " + result + "°F";
    } else if (unit === "fahrenheit") {
      result = (temperature - 32) * 5/9;
      document.getElementById("result").textContent = temperature + "°F is " + result + "°C";
    }
  }