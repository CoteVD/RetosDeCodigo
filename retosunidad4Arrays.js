// Reto 1
const computeAverageLengthOfWords = (word1, word2) => {
  let str1 = word1.length;
  let str2 = word2.length;
  return ((str1 + str2) / 2);
};

// Reto 2
const getNthElement = (array, n) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === n) {
      return array[n];
    }
  }
};

// Reto 15
const calculateBillTotal = (preTaxAndTipAmount) => {
  let billTax = (preTaxAndTipAmount * 0.095);
  let billTip = (preTaxAndTipAmount * 0.15);
  let completeBillTaxes = billTax + billTip;
  let completeBill = preTaxAndTipAmount + completeBillTaxes;
  return completeBill;
};

// Reto 16
const convertScoreToGrade = (score) => {
  if (score >= 0 && score <= 59){
    return 'F';
  } if (score >= 60 && score <= 69){
    return 'D';
  } if (score >= 70 && score <= 79){
    return 'C';
  } if (score >= 80 && score <= 89){
    return 'B';
  } if (score >= 90 && score <= 100){
    return 'A';
  } else {
    return 'PUNTUACION INVALIDA';
  }
};
