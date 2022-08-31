let val1;

do {
  val1 = prompt('Enter your value');
} while (isNaN(val1) || !(val1 >0) || val1 === null || val1.trim() === '');

val1 = +val1;

let odd = 0;

for (let i = 0; i <= val1; i++) {
     if (i % 2 == 0) continue;
     odd += i;
}

let even = 0;

for (let i = 0; i <= val1; i++) {
     if (i % 2 !== 0) continue;
     even += i;
}

alert ('Sum of odds is ' + odd);
alert('Sum of evens is ' + even);








