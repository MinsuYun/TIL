# Recursion 3. get Array in a range

Q. 특정 구간에 있는 숫자들을 이용하여 배열을 만들어라.

ex) getArray(2,6) => [2,3,4,5,6]

ex)getArray(4,9) => [4,5,6,7,8,9]



```javascript
function getArray(start, end) {
  
  let arr = [];
  
  function range(start, end) {
    if(start === end) {
      arr.push(start);
      return arr;
    } else {
      arr.push(start);
      return range(start+1, end)
    }
  }
  return range(start, end);
}

getArray(4,11);
```

