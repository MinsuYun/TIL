# [Array] flat



배열안에 배열을 깨버릴 땐 flat을 쓴다.



```javascript
var array = [1,2,3,[4,[5]]]

var one_flatted = array.flat();
var two_flatted = array.flat(2);

console.log(one_flatted)// [1,2,3,4,[5]]
console.log(two_flatted)// [1,2,3,4,5]
```



만약, flat이란 메소드가 없다면 reduce와 concat을 이용해 배열안의 중복 된 배열을 깰 수 있다. 하지만 복잡하핟.



```javascript
var array = [1,2,3,[4,[5]]]; 

function flatten(array){
    return array.reduce((acc, val) => (Array.isArray(val))? acc.concat(flatten(val)) : acc.concat(val) , [])
};
```

