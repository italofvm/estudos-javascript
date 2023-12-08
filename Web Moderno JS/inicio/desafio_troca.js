let a = 7;
let b = 94;

// depois da troca... a = 94 e b = 7
console.log(a);
console.log(b);

// Uma das formas de troca.
/* 
let c = a;
a = b;
b = c;
*/

// Segunda forma de troca
[a, b] = [b, a];

console.log(a);
console.log(b);
