"use strict";

const req = new XMLHttpRequest();
req.open("GET", "https://transport.opendata.ch/v1/stationboard?station=yverdon&limit=10");
req.send();

req.addEventListener("load", () => {
    let data = JSON.parse(req.response);
    data = data.stationboard;
    console.log(data);

    for (let i = 9; i > 0; i--) {
        const trainContainer = document.querySelector("#board");
        const article = document.createElement("article");

        const departureTime = document.createElement("div");
        departureTime.className = "time";
        departureTime.textContent = new Date(data[i].stop.departure).toLocaleTimeString("fr-CH", { hour: "2-digit", minute: "2-digit" });
        const categoryTrain = document.createElement("div");
        categoryTrain.className = "category";
        categoryTrain.textContent = data[i].category;
        console.log(data[i].category);
        categoryTrain.dataset.category = categoryTrain.textContent;
        const destinationTrain = document.createElement("div");
        destinationTrain.className = "destination";
        destinationTrain.textContent = data[i].to;

        article.appendChild(departureTime);
        article.appendChild(categoryTrain);
        article.appendChild(destinationTrain);

        trainContainer.insertAdjacentElement("afterbegin", article);
    }
});
