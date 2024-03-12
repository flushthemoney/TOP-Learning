const myarr = [1, 3, 4, 5, 6, 667];

let x = myarr.reduce((total, currentNumber) => total + currentNumber, 0);
alert(x);
