# Recursion 2. Modulo

Q. Instructions from your teacher:

Write a function called "modulo".



Given 2 numbers, "modulo" returns the remainder after dividing num1 by num2.



It should behave as described in the canonical documentation (MDN) for the JavaScript remainder operator:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder_()

Notes:

\* Do NOT use the actual built-in modulo (aka "remainder") operator (%) in your implementation.

\* 0 % ANYNUMBER = 0.

\* ANYNUMBER % 0 = NaN.

\* If either operand is NaN, then the result is NaN.

\* Modulo always returns the sign of the first number.



```
var output = modulo(25, 4);
console.log(output); // --> 1
```





Answer

```javascript
function modulo(num1, num2) {
  
  var number1 = Math.abs(num1)
  var number2 = Math.abs(num2)
   
  if(num1 === 0) return 0;
  else if(num2 === 0 || isNaN(num1) || isNaN(num2) ) return NaN;
  
  //base condition
  if( number1 < number2 ) return num1;
  
  //recursive condition
  if( num1 < 0 ) return modulo(-(number1-number2) , number2);
  return modulo(number1-number2, number2);
}
```

