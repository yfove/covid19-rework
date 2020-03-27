import "https://api.mapbox.com/mapbox-gl-js/v1.8.1/mapbox-gl.js";

// alert("Document ready");

const btn = document
  .querySelector("button")
  .addEventListener("click", function() {
    alert("still in progress");
    // console.log(this);
    // let buttonInnerHTML = this.innerHTML;
    // switch(buttonInput)
  });

const mapbox_token =
  "pk.eyJ1IjoiY3VydGlzY2hhdCIsImEiOiJjazg2dHo2dTIwbG50M2RvOHU5aGU0a2Y1In0.ajuXbkqhdPXTqujBc7c_QQ";

mapboxgl.accessToken = mapbox_token;

const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/dark-v10",
  zoom: 2.0,
  center: [120, 20]
});

const getColorFromCount = count => {
  if (count >= 7000) {
    return "maroon";
  }
  if (count >= 2000) {
    return "darkred";
  }
  if (count >= 1000) {
    return "firebrick";
  }
  if (count >= 500) {
    return "crimson";
  }
  if (count >= 10) {
    return "indianred";
  }
  return "pink";
};

fetch("https://coronavirus-tracker-api.herokuapp.com/v2/locations")
  .then(response => response.json()) // (generic response) getting the actual data we have to convert to .json
  .then(data => {
    const reports = data.locations;

    // console.log(reports);

    reports.forEach(report => {
      const { latest, country, last_updated, coordinates } = report;
      // console.log(latest, coordinates);
      //create makers
      const marker = new mapboxgl.Marker({
        size: "large",
        color: getColorFromCount(latest.confirmed)
      })
        .setLngLat([coordinates.longitude, coordinates.latitude])
        .setPopup(
          new mapboxgl.Popup().setText(
            "Country: " +
              country +
              "\n" +
              "Confimed Cases: " +
              latest.confirmed +
              "\n" +
              "Deaths: " +
              latest.deaths +
              "\n" +
              "Updated: " +
              last_updated
          )
        )
        .addTo(map);
    });
  });

const worldStatistics = document.creat;
