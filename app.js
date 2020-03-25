fetch("https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats", {
  method: "GET",
  headers: {
    "x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com",
    "x-rapidapi-key": "395feb7c3emshb4a91900aa9f376p161dc0jsn52d04d06ce2e"
  }
})
  .then(response => response.json()) // (generic response) getting the actual data we have to convert to .json
  .then(data => {
    console.log(data); //we always want to start with console.log(data)
  });

// console.log(stats);
