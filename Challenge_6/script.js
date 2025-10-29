"use strict"

const examplePoll1 = {
  question: "What is your favorite programming language?",
  options: ["1. JavaScript", "2. PHP", "3. Java", "4. Assembly"],
};

const examplePoll2 = {
  question: "Ce challenge est-il difficile?",
  options: ["Oui", "Non"],
};

const createPoll = (obj) => {
  const question = obj.question;
  const voteOptions = new Map();
  const votesQuantity = new Array(voteOptions.length).fill(0);

  let i = 1;
  for (let opt of obj.options) {
    voteOptions.set(i, opt);
    i++;
  }

  const poll = {
    question: obj.question,
    options: voteOptions,
    votes: votesQuantity,
  };

  function vote(answer) {
    const vote = (poll.options[answer] += 1);
    return vote;
  }
  displayPoll(poll);

  return vote();
};

const createPoll1 = function (poll) {
  const { question, options } = poll;
};