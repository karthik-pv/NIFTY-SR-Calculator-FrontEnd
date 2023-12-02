const isNumber = (value) => typeof Number(value) === 'number';

const checkNullNegative = (toCheck) => {
  if (Array.isArray(toCheck)) {
    for (let i = 0; i < toCheck.length; i++) {
      if (
        toCheck[i] === null ||
        toCheck[i] === undefined ||
        !isNumber(toCheck[i]) || // Use !isNumber to check if it's not a number
        toCheck[i] < 0
      ) {
        alert('Enter positive numerical values or check for non-numeric data');
        return false;
      }
    }
  } else {
    if (
      toCheck === null ||
      toCheck === undefined ||
      !isNumber(toCheck) || // Use !isNumber to check if it's not a number
      toCheck < 0
    ) {
      alert('Enter positive numerical values or check for non-numeric data');
      return false;
    }
  }
  return true;
};

export default checkNullNegative;
