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

  let firstSentence = "Cher " + user.firstName.trim() + " " + user.lastName.replace("$", "S") + ", " + "bienvenue dans votre dashboard."
  console.log(firstSentence)


  let age = parseInt(user.age.slice(0, 3))
  let secondSentence = "Vous aurez " + parseInt(age + 1) + " ans l'année prochaine."
  console.log(secondSentence)

  
  function countdown(endDate) {
    const date = new Date(endDate);

    const dayNow = new Date().getDate();
    const dayEnd = date.getDate();
    const finalDay = dayEnd - dayNow;

    const hoursNow = new Date().getHours();
    const hoursEnd = date.getHours();
    const finalHours = hoursEnd - hoursNow;

    const minutesNow = new Date().getMinutes();
    const minutesEnd = date.getMinutes();
    const finalMinutes = Math.abs(minutesEnd - minutesNow);

    const secondsNow = new Date().getSeconds();
    const secondsEnd = date.getSeconds();
    const finalSeconds = Math.abs(secondsEnd - secondsNow);

    const finalString =
      finalDay +
      (finalDay > 1 ? " jours " : " jour ") +
      finalHours +
      " h " +
      finalMinutes +
      " min " +
      finalSeconds +
      " s";

    return finalString;
  }

  console.log(countdown(user.nextTourDate));