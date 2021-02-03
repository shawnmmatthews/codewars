function findDifference(a, b) {
  const reducer = (accumulator, currentValue) => accumulator * currentValue;
  const volumeOfA = a.reduce(reducer);
  const volumeOfB = b.reduce(reducer);
  return Math.abs(volumeOfA - volumeOfB);
}

//Lessons learned
//If we know we will have a specific amounts of items in the input arrays [a,b,c] it might make sence to just destructure and do the math vs bothering with a reducer. 
//Math.abs is also super helpful to make things negative.