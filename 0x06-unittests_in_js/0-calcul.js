
//This accepts two argument (a,b)
//The function should round a and b and 
//return the sum of it


function calculateNumber(a, b) {
  const roundedA = Math.round(a);
  const roundedB = Math.round(b);

  return roundedA + roundedB;
}

module.exports = calculateNumber;
