"use strict";

const firstTimer = {
    name: "Boire de l'eau",
    time: 10
}

const secondTimer = {
    name: "Faire une pause",
    time: 5
}

const setTimer = () => {
    const displayTimerDetails = (obj) => {
        console.log(`The name of the timer is ${obj.name}`);
        console.log(`The time of the timer is ${obj.time}`);
    }

    return displayTimerDetails;

}

const testTimer = setTimer();
testTimer(firstTimer);
testTimer(secondTimer);