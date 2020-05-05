export default (number, wordForms) => {
  const n1 = Math.abs(number) % 100;
  const n2 = number % 10;
  if (n1 > 10 && n1 < 20) return wordForms[2];
  if (n2 > 1 && n2 < 5) return wordForms[1];
  if (n2 === 1) return wordForms[0];
  return wordForms[2];
};
