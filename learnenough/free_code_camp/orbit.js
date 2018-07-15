function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  
  var rad = arr[0].avgAlt + earthRadius;
  
  var T = 2 * Math.PI * Math.pow(Math.pow(rad, 3)/GM, 1/2);
  
  arr[0].orbitalPeriod = +T.toFixed(0);
  delete arr[0].avgAlt;
  
  return arr;
}