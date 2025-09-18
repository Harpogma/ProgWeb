"use strict"

const user = {
  firstName: "   Bruce",
  lastName: "$pringsteen",
  age: "72 years old",
  isBoss: true,
  //nextTourDate: new Date("May 31, 2025 20:00").getTime(),
  nextTourDate: new Date("Sep 30, 2025 20:00").getTime(),
  albums: [
    {
      title: "Greetings from Asbury Park, NJ",
      year: 1973,
      rymScore: 3.59,
    },
    {
      title: "The Wild, the Innocent & the E Street Shuffle",
      year: 1973,
      rymScore: 3.76,
    },
    {
      title: "Born to Run",
      year: 1975,
      rymScore: 3.98,
    },
    {
      title: "Darkness on the Edge of Town",
      year: 1978,
      rymScore: 3.93,
    },
    {
      title: "The River",
      year: 1980,
      rymScore: 3.76,
    },
    {
      title: "Nebraska",
      year: 1982,
      rymScore: 3.87,
    },
    {
      title: "Born in the U.S.A.",
      year: 1984,
      rymScore: 3.71,
    },
    {
      title: "Tunnel of Love",
      year: 1987,
      rymScore: 3.52,
    },
    {
      title: "Human Touch",
      year: 1992,
      rymScore: 2.97,
    },
    {
      title: "The Ghost of Tom Joad",
      year: 1995,
      rymScore: 3.38,
    },
    {
      title: "The Rising",
      year: 2002,
      rymScore: 3.56,
    },
    {
      title: "Devils & Dust",
      year: 2005,
      rymScore: 3.42,
    },
    {
      title: "We Shall Overcome: The Seeger Sessions",
      year: 2006,
      rymScore: 3.7,
    },
    {
      title: "Magic",
      year: 2007,
      rymScore: 3.48,
    },
    {
      title: "Working on a Dream",
      year: 2009,
      rymScore: 2.95,
    },
    {
      title: "Wrecking Ball",
      year: 2012,
      rymScore: 3.27,
    },
    {
      title: "High Hopes",
      year: 2014,
      rymScore: 2.97,
    },
    {
      title: "Western Stars",
      year: 2019,
      rymScore: 3.27,
    },
    {
      title: "Letter to You",
      year: 2020,
      rymScore: 3.42,
    },
  ],
};

// Manipulation de strings et conversion de type
// 1
console.log(
  `Cher ${user.firstName.trim()} ${user.lastName.replace(
    "$",
    "S"
  )}, bienvenue dans votre dashboard.`
);

// 2
let age = parseInt(user.age.substring(0, 2)) + 1;
console.log(`Vous aurez ${age} ans l'année prochaine.`);

// Compte à rebours
function countdown() {
  const dateNow = new Date();
  const nextTourDate = new Date(user.nextTourDate);
  let differenceInSeconds = Math.floor((nextTourDate - dateNow) / 1000);

  if (differenceInSeconds < 0) {
    return "The date is in the past";
  }

  const days = Math.floor(differenceInSeconds / 86400);
  differenceInSeconds %= 86400;
  const hours = Math.floor(differenceInSeconds / 3600);
  differenceInSeconds %= 3600;
  const minutes = Math.floor(differenceInSeconds / 60);
  differenceInSeconds %= 60;
  const seconds = differenceInSeconds % 60;

  return `${days} ${
    days > 1 ? "jours" : "jour"
  }, ${hours} h, ${minutes} min, ${seconds} s`;
}

console.log(countdown());

// Données de l'album
function deleteFromArray(index, array) {
  let tempArray = new Array();
  array.forEach((element) => {
    tempArray.push(Math.trunc(element));
  });

  tempArray.splice(tempArray.lastIndexOf(index) + 1);
  console.log(tempArray);
}

function albumRecommandation(score) {
  const rymScores = [];
  for (let i = 0; i < user.albums.length; i++) {
    rymScores[i] = user.albums[i].rymScore;
  }
  rymScores.sort();

  console.log(rymScores);

  const test = deleteFromArray(2, rymScores);
  console.log(test);
}

albumRecommandation(2);

function randomAlbum() {
  const randomNumber = Math.trunc(Math.random() * user.albums.length);

  console.log(
    `Today you will discover the album: ${user.albums[randomNumber].title}`
  );
}

randomAlbum();
