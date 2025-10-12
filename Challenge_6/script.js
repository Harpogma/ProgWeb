"use strict"

const examplePoll1 = {
    id: 1,
    question: "What is your favorite programming language?",
    options: ["1. JavaScript", "2. PHP", "3. Java", "4. Assembly"],
}

const examplePoll2 = {
    id: 2,
    question: "Ce challenge est-il difficile?",
    options: ["Oui", "Non"],
}

const questionPoll = obj => {
    console.log(`${obj.question}`),
    console.log(`${obj.options.join(', ')}`)

    return obj;
}

const answers = obj => {
    const answers = {};
    obj.options.forEach(el => {
        answers[el] = 0;
    });

    return answers;
}


const answerPoll = (obj, answer) => {
    
    function pollAnswer (answer) {obj.answers.answer += 1};

    console.log(`${obj.answers.join(', ')}`);

    pollAnswer();

}


