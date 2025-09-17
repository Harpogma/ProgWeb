"use strict"

const user = {
  firstName: "   Bruce",
  lastName: "$pringsteen",
  age: "72 years old",
  isBoss: true,
  nextTourDate: new Date("May 31, 2025 20:00").getTime(),
  albums: [
    {
      title: "Greetings from Asbury Park, NJ",
      year: 1973,
      rymScore: 3.59
    },
    {
      title: "The Wild, the Innocent & the E Street Shuffle",
      year: 1973,
      rymScore: 3.76
    },
    {
      title: "Born to Run",
      year: 1975,
      rymScore: 3.98
    },
    {
      title: "Darkness on the Edge of Town",
      year: 1978,
      rymScore: 3.93
    },
    {
      title: "The River",
      year: 1980,
      rymScore: 3.76
    },
    {
      title: "Nebraska",
      year: 1982,
      rymScore: 3.87
    },
    {
      title: "Born in the U.S.A.",
      year: 1984,
      rymScore: 3.71
    },
    {
      title: "Tunnel of Love",
      year: 1987,
      rymScore: 3.52
    },
    {
      title: "Human Touch",
      year: 1992,
      rymScore: 2.97
    },
    {
      title: "The Ghost of Tom Joad",
      year: 1995,
      rymScore: 3.38
    },
    {
      title: "The Rising",
      year: 2002,
      rymScore: 3.56
    },
    {
      title: "Devils & Dust",
      year: 2005,
      rymScore: 3.42
    },
    {
      title: "We Shall Overcome: The Seeger Sessions",
      year: 2006,
      rymScore: 3.7
    },
    {
      title: "Magic",
      year: 2007,
      rymScore: 3.48
    },
    {
      title: "Working on a Dream",
      year: 2009,
      rymScore: 2.95
    },
    {
      title: "Wrecking Ball",
      year: 2012,
      rymScore: 3.27
    },
    {
      title: "High Hopes",
      year: 2014,
      rymScore: 2.97
    },
    {
      title: "Western Stars",
      year: 2019,
      rymScore: 3.27
    },
    {
      title: "Letter to You",
      year: 2020,
      rymScore: 3.42
    }
  ]
};

// Manipulation de strings et conversion de type
// 1
console.log(`Cher ${user.firstName.trim()} ${user.lastName.replace("$", "S")}, bienvenue dans votre dashboard.`)

// 2 
let age = parseInt(user.age.substring(0, 2));
age++;
console.log(`You will be ${age + user.age.substring(2)} next year.`)

// Compte à rebours
function countdown() {
    let dateNow = new Date();
    let dayNow = dateNow.getDate();
    let hourNow = dateNow.getHours();
    let minutesNow = dateNow.getMinutes();
    let secondsNow = dateNow.getSeconds();


    let nextTourDate = new Date(user.nextTourDate);
    let dayNextTour = nextTourDate.getDate();
    let hourNextTour = nextTourDate.getHours();
    let minutesNextTour = nextTourDate.getMinutes();
    let secondsNextTour = nextTourDate.getSeconds();

    let dayCountDown = Math.abs(dayNow - dayNextTour);
    let hourCountDown = Math.abs(hourNow - hourNextTour);
    let minutesCountDown = Math.abs(minutesNow - minutesNextTour);
    let secondsCountDown = Math.abs(secondsNow - secondsNextTour);

    let result = `${dayCountDown} ${dayCountDown > 1 ? "jours" : "jour"}, ${hourCountDown} h, ${minutesCountDown} min, ${secondsCountDown} s`;

    return result;
}

console.log(countdown());


// Données de l'album
function albumRecommandation(score) {
    let rymScores = [];
    for(let i = 0; i < user.albums.length; i++) {
        rymScores[i] = user.albums[i].rymScore;
    }
    rymScores.sort();

    let numberOfRymScore = new Array(rymScores.length, 2);


    for(let i = 0; i < rymScores.length; i++) {
        
    }

    console.log(numberOfRymScore);
}

albumRecommandation(1);
