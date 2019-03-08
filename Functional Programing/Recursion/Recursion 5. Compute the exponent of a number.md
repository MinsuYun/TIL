# Recursion 5. Compute the exponent of a number

Q. x의 n승 구하기 (제곱)

ex) (2,4) => 16

ex) (8,2) => 64



Answer

```javascript
function powNum(x,n) {
  return (n===0) ? 1 :  x * powNum(x,n-1) 
}
powNum(2,3)
```

 

