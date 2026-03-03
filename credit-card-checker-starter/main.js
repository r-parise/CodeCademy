// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]


// Add your functions below:

/*
    Starting from the farthest digit to the right, AKA the check digit, iterate to the left.

    As you iterate to the left,
    every other digit is doubled (the check digit is not doubled). 
    
    If the number is greater than 9 after doubling, subtract 9 from its value.

    Sum up all the digits in the credit card number.

    If the sum modulo 10 is 0 (if the sum divided by 10 has a remainder of 0) 
    then the number is valid, otherwise, it’s invalid.
*/

const validateCred = array => {
    let count = 0;
    let sum = 0;

    for (let i = array.length - 1; i >= 0; i--) {
        let digit = array[i];  // ✅ don't modify original array

        if (count === 0) {
            sum += digit;
        } else if (count % 2 === 0) {
            sum += digit;
        } else {
            digit = digit * 2;
            if (digit > 9) {
                digit = digit - 9;
            }
            sum += digit;
        }

        count++;
    }

    return sum % 10 === 0;
};

/*

console.log(validateCred(invalid1))
console.log(validateCred(invalid2))
console.log(validateCred(invalid3))
console.log(validateCred(invalid4))

*/

findInvalidCards = array => {
  return array.filter(card => !validateCred(card));
}

console.log(findInvalidCards(batch))

const idInvalidCardCompanies = invalidCards => {
  const companies = [];

  for (let i = 0; i < invalidCards.length; i++) {
    const firstDigit = invalidCards[i][0];
    let company;

    if (firstDigit === 3) {
      company = "Amex (American Express)";
    } else if (firstDigit === 4) {
      company = "Visa";
    } else if (firstDigit === 5) {
      company = "Mastercard";
    } else if (firstDigit === 6) {
      company = "Discover";
    } else {
      console.log("Company not found");
      continue;
    }

    if (!companies.includes(company)) {
      companies.push(company);
    }
  }

  return companies;
};

console.log(idInvalidCardCompanies(findInvalidCards(batch)))
