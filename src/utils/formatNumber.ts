const formatNumber = (number: number): string => {
  const str = String(number);
  let result = '';
  let counter = 0;
  for (let i = str.length - 1; i >= 0; i--) {
    if (counter % 3 === 0 && counter !== 0) result = ' ' + result;
    result = str[i] + result;
    counter++;
  }

  return result;
};

export default formatNumber;
