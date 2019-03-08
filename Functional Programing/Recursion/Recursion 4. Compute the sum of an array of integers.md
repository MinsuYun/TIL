# Recursion 4. Compute the sum of an array of integers

Q. Write a JavaScript program to compute the sum of an array of integers.

*Example :* var array = [1, 2, 3, 4, 5, 6]
*Expected Output :* 21



Answer

```javascript
function sumInteger(array) {
  
  function sum(n) {
    if( n === array.length-1 ) return array[n]
    return array[n] + sum(n+1)
  }
  return sum(0)
}

sumInteger([1,2,3,6,8,10]) // 30
```



Answer 2

```javascript
function sumInteger(array) {
  
  if(array.length === 1) return array[0]
    return array.pop() + sumInteger(array)

  
}

sumInteger([1,2,3,6,8,10])
```

