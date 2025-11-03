// ACCOUNT DATA
const account1 = {
  owner: "Anna Anderson",
  username: "aa",
  movements: [200, 450, -400.5, 3000, -650, -130, 70, 1300],
  pin: 1234
};

const account2 = {
  owner: "Bijan Bell",
  username: "bb",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  pin: 1111
};

const account3 = {
  owner: "Celeste Carter",
  username: "cc",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  pin: 0000
};

const accounts = [account1, account2, account3];

// ELEMENTS
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
let labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");

const containerOperation = document.querySelector(".operation");

let currentAccount;

const matchUser = (username, pin) => {
  const matchedAccount = accounts.find((acc) => username === acc.username);
  if (matchedAccount && matchedAccount.pin === pin) {
    return matchedAccount;
  } else {
    throw new Error("Couldn't match user");
  }
};

const message = (text, error) => {
  labelWelcome.textContent = text;
  error
    ? (labelWelcome.style.color = "var(--withdrawal)")
    : (labelWelcome.style.color = "var(--deposit)");
};

const displayAccount = (acc) => {
  if (acc) {
    containerApp.style.opacity = "100";
  } else {
    throw new Error("No account to display");
  }
};

const calculateBalance = (acc) => {
  let currentBalance = 0;
  if (acc) {
    for (let num of acc.movements) {
      currentBalance += num;
    }
  }
  labelBalance.textContent = currentBalance;
  return currentBalance;
};

const sumIn = (acc) => {
  let sumIn = 0;
  let onlyPositives = new Array();
  if (acc) {
    for (let num of acc.movements) {
      if (num >= 0) {
        onlyPositives.push(num);
      }
    }
  }
  onlyPositives.forEach((num) => {
    sumIn += num;
  });
  labelSumIn.textContent = sumIn;
};

const sumOut = (acc) => {
  let sumOut = 0;
  let onlyNegatives = new Array();
  if (acc) {
    for (let num of acc.movements) {
      if (num < 0) {
        onlyNegatives.push(num);
      }
    }
  }
  onlyNegatives.forEach((num) => {
    sumOut += num;
  });
  labelSumOut.textContent = sumOut;
};

const checkSign = (mov, el) => {
  if (mov >= 0) {
    el.classList.add("movements__type--deposit");
  } else {
    el.classList.add("movements__type--withdrawal");
  }
};

const transactionList = (acc) => {
  containerMovements.textContent = "";
  let reverseArray = acc.movements.slice().reverse();

  reverseArray.forEach((mov, i) => {
    const parentRow = document.createElement("div");
    parentRow.className = "movements__row";

    const movementsType = document.createElement("div");
    movementsType.className = "movements__type";

    checkSign(mov, movementsType);
    movementsType.textContent = `${i + 1} ${
      mov >= 0 ? "deposit" : "withdrawal"
    }`;

    const movementValue = document.createElement("div");
    movementValue.className = "movements__value";
    movementValue.textContent = `CHF ${mov}`;

    parentRow.append(movementsType, movementValue);
    containerMovements.insertAdjacentElement("afterbegin", parentRow);
  });
};

const userExists = (user) => {
  if (user === "aa" || user === "bb" || user === "cc") {
    return true;
  } else {
    return false;
  }
};

const enoughMoney = (acc, amount) => {
  let currentBalance = calculateBalance(acc);
  if (amount <= currentBalance && currentBalance - amount >= 0) {
    return true;
  } else {
    return false;
  }
};

const messageTransfer = (text, error) => {
  const validationMessage = document.createElement("h2");

  validationMessage.textContent = text;
  error
    ? ((validationMessage.style.color = "var(--withdrawal)"),
      (validationMessage.className = "valid"))
    : ((validationMessage.style.color = "var(--deposit)"),
      (validationMessage.className = "invalid"));
};

console.log("is enough money in global scope: " + enoughMoney(account1, 10000));

const transferMoney = (srcAcc, destAcc, amount) => {
  console.log("the source user inside transfer money function:" + srcAcc);
  console.log("the dest user inside transfer money function:" + destAcc);
  console.log(
    "the user exist inside transfer money function? " + userExists(destAcc)
  );
  console.log(
    "is enough money inside transfer money? " + enoughMoney(srcAcc, amount)
  );

  if (userExists(destAcc) && enoughMoney(srcAcc, amount)) {
    srcAcc.movements.push(-amount);
    destAcc.movements.push(amount);
    containerOperation.append(validationMessage);
    containerOperation.insertAdjacentHTML("afterend", containerOperation);
  }
};

btnLogin.addEventListener("click", function (e) {
  try {
    e.preventDefault();
    currentAccount = matchUser(inputLoginUsername.value, +inputLoginPin.value);
    displayAccount(currentAccount);
    calculateBalance(currentAccount);
    sumIn(currentAccount);
    sumOut(currentAccount);
    transactionList(currentAccount);
    message(`Welcome ${currentAccount.owner}`);
  } catch (err) {
    message(err.message, true);
  }
});

btnTransfer.addEventListener("click", function (e) {
  try {
    e.preventDefault();
    currentAccount = matchUser(inputLoginUsername.value, +inputLoginPin.value);
    console.log(currentAccount.username);
    console.log(inputTransferTo.value);
    console.log(inputTransferAmount.value);
    transferMoney(
      currentAccount.username,
      inputTransferTo.value,
      inputTransferAmount.value
    );
  } catch (err) {
    messageTransfer(err.message, true);
  }
});

