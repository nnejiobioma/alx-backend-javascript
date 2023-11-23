//This performs a mathematical operation on two 
//rounded numbers
//the operation is dvision and b is rounded to 0


function calculateNumber(type, a, b) {
  const roundedA = Math.round(a);
  const roundedB = Math.round(b);

  switch (type) {
    case 'SUM':
      return roundedA + roundedB;
    case 'SUBTRACT':
      return roundedA - roundedB;
    case 'DIVIDE':
      if (roundedB === 0) {
        return 'Error';
      }
      return roundedA / roundedB;
    default:
      throw new Error('Invalid type. Use SUM, SUBTRACT, or DIVIDE.');
  }
}

module.exports = calculateNumber;
