# [003] Seek and Destroy

You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

**Note**
You have to use the `arguments`object.



`destroyer([1, 2, 3, 1, 2, 3], 2, 3)`should return `[1, 1]`.

`destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3)`should return `[1, 5, 1]`.

`destroyer([3, 5, 1, 2, 2], 2, 3, 5)`should return `[1]`.

`destroyer([2, 3, 2, 3], 2, 3)`should return `[]`.



-----------

**[내 답안]**

```javascript
function destroyer(arr, ...args) {
    return arr.filter( ele => !args.includes(ele) )
}


destroyer([1, 2, 3, 1, 2, 3], 2, 3);
```



**[모범답안(하)]**

```javascript
function destroyer(arr) {
    const args = Array.prototype.slice.call(arguments)
    const filterdArr = [];
    
    function diff(a, b) {
        for(let ele of a) {
            if(!b.includes(ele){
               filterdArr.push(ele)
             }
           }
    	}
    
    diff(arr, args);
	
    return filterArr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
```



**[모범답안(하)]**

```javascript
function destroyer(arr) {
    const args = Array.prototype.slice.call(arguments)
    
    return arr.filter( ele => !args.includes(ele) );
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
```



**[모범답안(중)]**

```javascript
function destroyer(arr) {
    var args = Array.from(arguments).slice(1)
    return arr.filter( ele => !args.includes(ele));
}
```



**[모범답안(상)]**

```javascript
const destroyer = (arr, ...args) => arr.filter( ele => !args.includes(ele))
```

- ES6에서는 함수를 arrow 함수로 선언할 수 있다.

  ex) var 함수명 = (parameter) =>  함수내용(return 포함)  

- arrow 함수이기 때문에 return 값이 들어 가지 않는다.