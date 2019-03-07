# [001] Sum All Numbers in a Range

We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them.

The lowest number will not always come first.

Remember to use [Read-Search-Ask](http://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck/19514) if you get stuck. Try to pair program. Write your own code.

<보기>

`sumAll([1, 4])`should return 10.

`sumAll([4, 1])`should return 10.

`sumAll([5, 10])`should return 45.

`sumAll([10, 5])`should return 45.



-----------

[나의 답]

```javascript
function sumAll(arr) {
  
  let result = 0;

  if( arr[0] <= arr[1]) {
    for( let i=arr[0] ; i <= arr[1] ; i++ ) {
      result += i;
    }
  } else { 
    for ( let i=arr[1] ; i <= arr[0] ; i++) {
      result += i;
    } 
  }

  return result;
}

sumAll([1, 4]);
sumAll([1, 4]);
```



[모범 답 (하)]

```javascript
function sumAll(arr) {
    let minNum = Math.min(arr[0], arr[1]);
    let maxNum = Math.min(arr[0], arr[1]);
    let temp = 0;
    for(var i=minNum; i<= maxNum ; i++ ) {
        temp += i
    }
    return temp;
}

sumAll([1,4])
sumAll([4,1])
```



[모범 답 (중)]

```javascript
function sumAll(arr) {
   let sortedArr = arr.sort( (a,b) => a-b);
   let firstNum = arr[0];
   let lastNum = arr[1];
   
   let sum = (lastNum - firstNum + 1) * ( firstNum + lastNum ) / 2
	
   return sum;
}

sumAll([1,4])
sumAll([4,1])
```

- **sort 메소드를 쓰면, 변수 sortedArr에도 정렬 된 값이 담길 뿐 아니라, 원형인 arr도 정렬 된 모습으로 나오게 된다.**
- **1씩 오름순차적으로  더하는 방법 : (lastNum - firstNum + 1) * ( firstNum + lastNum ) / 2**



[모범 답 (상)]

```javascript
function sumAll(arr) {
    let sum = 0;
    
    for( let i = Math.min(...arr) ; i <= Math.max(...arr); i++){
        sum += i
    }
    
    return sum;
}
sumAll([1,4])
sumAll([4,1])
```

- Math.max.apply(null, arr) 와 같이 표현이 가능하지만, 이를 생략하여, Math.max(...arr)와 같이 간단하게 실행 할 수 있다.