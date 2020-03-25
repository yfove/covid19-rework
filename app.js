import "https://api.mapbox.com/mapbox-gl-js/v1.8.1/mapbox-gl.js";

const mapbox_token =
  "pk.eyJ1IjoiY3VydGlzY2hhdCIsImEiOiJjazg2dHo2dTIwbG50M2RvOHU5aGU0a2Y1In0.ajuXbkqhdPXTqujBc7c_QQ";

mapboxgl.accessToken = mapbox_token;

var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/dark-v10",
  zoom: 1.5,
  center: [0, 20]
});

fetch("https://coronavirus-tracker-api.herokuapp.com/v2/locations")
  .then(response => response.json())
  .then(data => {
    console.log(data);
  });

// fetch("https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats", {
//   method: "GET",
//   headers: {
// "x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com",
// "x-rapidapi-key": "395feb7c3emshb4a91900aa9f376p161dc0jsn52d04d06ce2e"
//   }
// });
//   .then(response => response.json()) // (generic response) getting the actual data we have to convert to .json
//   .then(data => {
//     const report = data.data.covid19Stats;

//     console.log(report);

//     report.forEach(report => {
//       const { confirmed, keyId } = report;
//       console.log(confirmed, keyId);
//       new mapboxgl.Marker({})
//         .setLngLat([report.longitude, report.latitude])
//         .addTo(map);
//     });
//   })
//   .catch(error => {
//     console.log(error);
//   });

// console.log(stats);
