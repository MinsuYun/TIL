# Array from 

Array from은 인자로 받은 유사배열을 이용하여 새로운 Array를 return 한다.  

**[사용법]**

```javascript
Array.from( arrayLike[,mapFn [,thisArg]])

//Array.from(obj).map(callback , thisArg) 와 같다.
```

- arrayLike(obj) (essential) : 유사배열
- MapFn(optional) : MapFn은 배열의 모든 요소를 call 하는 역할을 한다.
- thisArg(optional): MapFn이 실행될 때, 이 값으로 사용할 수 있다.

**[Return 값]**

- new Array instance





### arrayLike 가 string 타입일때

```javascript
let str = 'rainbow'
let strArr = Array.from(str)

console.log(strArr) // ['r','a', 'i', 'n' ,'b', 'o', 'w'];
```





### Set() 으로 부터 배열을 만들 때

```javascript
let movie = new Set(['avengers' 'matrix' ,'kingkong'])
console.log(movie) // {'avengers', 'matrix', 'kingkong'}

let movieArr = Array.from(movie);
console.log(movieArr) //['avengers' 'matrix' ,'kingkong']
```



### arguments 와 같은 유사배열(객체)로 진짜 배열을 만들 때

```javascript
function arrFrm(){
    return Array.from(arguments)
}

let arr = arrFrm(1,2,3);

console.log(arguments) //[1,2,3]
console.log(Array.isArray(arguments))//false

console.log(arr) // [1,2,3]
console.log(Array.isArray(arr) //true


```



### 두번 째 인자, map함수를 이용할 때

```javascript
let data = Array.from([1,2,3], x => x*2 );
console.log(data) // [2,4,6]
```

