"use strict"

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

function getSubtotal(orders) {
    let subtotal = 0;

    for(const order of orders) {
        subtotal += order.qty * order.price;
    };
    return subtotal;
}

const calcPercentage = function (amount, percentage) {
    return amount * percentage / 100; 
} 

function createBill(table) {
    const subtotal = getSubtotal(table.orders).toFixed(2);
    const tax = calcPercentage(subtotal, 8.1).toFixed(2);
    const tip = calcPercentage(subtotal, 10).toFixed(2);
    const total = subtotal + tax + tip;
    return {
     subtotal,
     tax,
     tip, 
     total
    }
}

function displayBills() {
    for(let table of register) {
         console.log(createBill(table));
    } 

}  