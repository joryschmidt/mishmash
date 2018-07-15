function makeFriendlyDates(arr) {
  var date = [];
  
  var year1 = parseInt(arr[0].substr(0, 4), 10);
  var year2 = parseInt(arr[1].substr(0, 4), 10);
  var mon1  = parseInt(arr[0].substr(5, 2), 10);
  var mon2  = parseInt(arr[1].substr(5, 2), 10);
  var day1  = parseInt(arr[0].substr(8, 2), 10);
  var day2  = parseInt(arr[1].substr(8, 2), 10);
  
  var months = ["here be the months", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  
  function makeOrd(day) {
    switch (day) {
      case 1: return "1st";
      case 2: return "2nd";
      case 3: return "3rd";
      case 21: return "21st";
      case 22: return "22nd";
      case 23: return "23rd";
      case 31: return "31st";
      case 32: return "32nd";
      default: return day + "th";
    }
  }
  
  function withinYear(y1, y2, m1, m2, d1, d2) {
    if (y2 - y1 > 1) return false;
    else if (y2 - y1 == 1 && m2 - m1 > 0) return false;
    else if (y2 - y1 == 1 && m2 - m1 == 0 && d2 - d1 >= 0) return false;
    else return true;
  }
  
  if (withinYear(year1, year2, mon1, mon2, day1, day2)) {
    if (year1 == 2016) {
      if (mon1 == mon2) {
        if (day1 == day2) {
          date.push(months[mon1] + " " + makeOrd(day1));
        } else {
          date.push(months[mon1] + " " + makeOrd(day1));
          date.push(makeOrd(day2));
        }
      } else {
        date.push(months[mon1] + " " + makeOrd(day1));
        date.push(months[mon2] + " " + makeOrd(day2));
      }
    } else {
      if (mon1 == mon2) {
        if (day1 == day2) {
          date.push(months[mon1] + " " + makeOrd(day1) + ", " + year1);
        } else {
          date.push(months[mon1] + " " + makeOrd(day1) + ", " + year1);
          date.push(months[mon2] + " " + makeOrd(day2));
        }
      } else {
        date.push(months[mon1] + " " + makeOrd(day1) + ", " + year1);
        date.push(months[mon2] + " " + makeOrd(day2));
      }
    }
  } else {
    date.push(months[mon1] + " " + makeOrd(day1) + ", " + year1);
    date.push(months[mon2] + " " + makeOrd(day2) + ", " + year2);
  }
  
  return date;
}

makeFriendlyDates(['2016-07-01', '2016-07-04']);