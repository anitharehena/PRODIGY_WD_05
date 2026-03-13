document.querySelector('button').addEventListener("click", () => {

  const inputfeild = document.getElementById("location").value.trim();

  const obj = fetch(
    `https://api.weatherapi.com/v1/current.json?key=659dcf7108fc4d12b88153139261602&q=${inputfeild}&aqi=no`
  );

  obj.then((response) => {

    if (!response.ok) {
      throw new Error("City not found or API problem");
    }

    const data1 = response.json();

    data1.then((final) => {
      console.log(final);

      document.getElementById("weatherInfo").innerHTML =
        "Temperature: " + final.current.temp_c + " °C";
    });

  }).catch((error) => {

    console.log("Error:", error);

    document.getElementById("weatherInfo").innerHTML =
      "Error fetching weather data";

  });

});
