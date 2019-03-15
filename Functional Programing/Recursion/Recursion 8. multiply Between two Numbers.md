# Recursion 8. multiply Between two Numbers

Q.

Given 2 integers, "multiplyBetween" returns the product between the two given integers, beginning at num1, and excluding num2.



Notes:

\* The product between 1 and 4 is 1 * 2 * 3 = 6.

\* If num2 is not greater than num1, it should return 0.



```
var output = multiplyBetween(2, 5);
console.log(output); // --> 24
```



Answer

```javascript
function multiplyBetween(num1, num2) {
  //base case
  if(num1 >= num2) return 0;
  else if(num1 + 1 === num2) return num1;
    return num1 * multiplyBetween(num1 + 1 , num2);
}
  
  
var output = multiplyBetween(2, 5);
console.log(output); // --> 24

```



  

