function checkCashRegister(price, cash, cid) {
  var change = [];
  
  var Amounts = {
    0.01: "PENNY",
    0.05: "NICKEL",
    0.10: "DIME",
    0.25: "QUARTER",
    1.00: "ONE",
    5.00: "FIVE",
    10.00: "TEN",
    20.00: "TWENTY",
    100.00: "ONE HUNDRED"
  };
  
  var denoms = [100.00, 20.00, 10.00, 5.00, 1.00, 0.25, 0.10, 0.05, 0.01];
  
  function Drawer(cash) {
    for (var i=0; i<cash.length; i++) {
      this[cash[i][0]] = cash[i][1];
    }
  }
  
  var money = new Drawer(cid);
  var amount_due = cash - price;
  denoms = denoms.filter(function(amount) {
    if (amount > amount_due) {
      return false;
    }
    return true;
  });
  
  for (var i=0; i<denoms.length; i++) {
    if (money[Amounts[denoms[i]]] > 0) {
      var this_many = Math.floor(amount_due/denoms[i]);
      if (this_many * denoms[i] > money[Amounts[denoms[i]]]) {
        change.push([Amounts[denoms[i]], money[Amounts[denoms[i]]]]);
        amount_due -= money[Amounts[denoms[i]]];
        amount_due = amount_due.toFixed(2);
        money[Amounts[denoms[i]]] = 0;
      } else if (this_many > 0) {
        change.push([Amounts[denoms[i]], this_many * denoms[i]]);
        amount_due -= this_many * denoms[i];
        amount_due = amount_due.toFixed(2);
        money[Amounts[denoms[i]]] -= this_many * denoms[i];
      }
    }
    
    var empty = true;
    for (var j=0; j<cid.length; j++) {
      if (money[Amounts[denoms[j]]] > 0) {
        empty = false;
        break;
      }
    }
    
    if (empty && amount_due == 0) {
      change = "Closed";
    } else if (i == denoms.length - 1 && amount_due > 0) {
      change = "Insufficient Funds";
    } else if (amount_due == 0) {
      break;
    }
  }
  
  // Here is your change, ma'am.
  return change;
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.10],
// ["QUARTER", 4.25],
// ["ONE", 90.00],
// ["FIVE", 55.00],
// ["TEN", 20.00],
// ["TWENTY", 60.00],
// ["ONE HUNDRED", 100.00]]

checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);
