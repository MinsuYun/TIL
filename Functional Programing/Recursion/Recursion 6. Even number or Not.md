# Recursion 6. Even number or Not

Q. 해당 숫자가 짝수면 true , 홀수면 false



Answer

```javascript
function evenCheck(num) {
  //check the case of minus number
  num = Math.abs(num);
  //Base Condition
  if( num === 1 ) return false;
  else if(num === 0) return true;
  //Recursive Condition
  return evenCheck(num-2)
}

evenCheck(-554) // true;
evenCheck(3888) // true;
evenCheck(3921) // false;
evenCheck(-381) // false;

```

