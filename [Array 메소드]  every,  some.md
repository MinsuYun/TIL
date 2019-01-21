# [Array 메소드]  every,  some

### ! every

every는  Array안의 elements 들이 제공되는 함수에 모두 부합되는지를 판별하는 메소드이며, 값은  Boolean 형태로 나온다.

### ! some

some은 Array안의 elements 들이 제공되는 함수에 하나라도 부합되는지 판별하는 메소드이며, 값은 Boolean 형태로 나온다.



```javascript
var array = [1,2,3,4,5]
var isEven = function(n){
   return n%2 === 0
}

array.every(isEven); // -->  false
array.some(isEven); // --> true
```



