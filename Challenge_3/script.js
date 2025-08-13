console.log("script.js is running!");

const register = [
  {
    tableID: 0,
    orders: [
      {
        item: "coffee",
        qty: 3,
        price: 3.5
      },
      {
        item: "salad", 
        qty: 3,
        price: 8
      },
      {
        item: "steak",
        qty: 3,
        price: 28
      },
      {
        item: "ice cream",
        qty: 3,
        price: 5
      }
    ]
  },
  {
    tableID: 1,
    orders: [
      {
        item: "coffee",
        qty: 2,
        price: 3.5
      },
      {
        item: "salad",
        qty: 2,
        price: 8
      },
      {
        item: "steak",
        qty: 2,
        price: 28
      },
      {
        item: "ice cream",
        qty: 2,
        price: 5
      }
    ]
  }
];

function getSubTotal(tableId) {
    if (tableId > register.length || tableId < 0) {
        console.log("Table ${tableId} not found!");
    }

    const table = register[tableId];
    let subTotal = 0;

    for (let i = 0; i < table.orders.length; i++) {
        const orders = table.orders[i]; 
        subTotal += orders.qty * orders.price; 
    }

    return subTotal;
}

function calcPercentage(tableId) {
    const tax = 8.1;
    let taxAmount = getSubTotal(tableId) * (tax / 100);
    taxAmount = Math.round(taxAmount * 100) / 100;

    const tip = 10;
    let tipAmount = getSubTotal(tableId) * (tip / 100);
    tipAmount = Math.round(tipAmount * 100) / 100;

    return [taxAmount, tipAmount];
}

console.log("the total for table 0 is:");
console.log(getSubTotal(0));

console.log("the tax for the table 0 is:")
console.log(calcPercentage(0));
