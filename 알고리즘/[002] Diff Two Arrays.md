# [002] Diff Two Arrays

Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

Remember to use [Read-Search-Ask](http://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck/19514) if you get stuck. Try to pair program. Write your own code.

**Note**
You can return the array with its elements in any order.



`[1, 2, 3, 5], [1, 2, 3, 4, 5]`should return `[4]`.



`[1, 2, 3, 5], [1, 2, 3, 4, 5]`should return an array with one item.



`[1, "calf", 3, "piglet"], [1, "calf", 3, 4]`should return `["piglet", 4]`.



`[1, "calf", 3, "piglet"], [1, "calf", 3, 4]`should return an array with two items.



`[], ["snuffleupagus", "cookie monster", "elmo"]`should return `["snuffleupagus", "cookie monster", "elmo"]`.



------------------------------------------------------

[내 답안 1]

```javascript
function diffArray(arr1, arr2) {
	var newArr = [];
	
    for(var ele of arr1) {
        if( arr2.indexOf(ele) === -1 ) {
			newArr.push(ele);
        }};

   for(var item of arr2) {
       if(arr1.indexOf(item)===-1 ) {
			newArr.push(item);
       }};

   return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]); //?
```



[내 답안 2]

```javascript
function diffArray(arr1, arr2) {
var newArr = [];

 for( var ele of arr2 ) {
    if(!arr1.includes(ele)) {
      newArr.push(ele);
    }}

  for( var item of arr1 ) {
    if(!arr2.includes(item)) {
      newArr.push(item);
    }}
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]); //?
```



[모범답안 하]

```javascript
function diffArray(arr1, arr2) {
    const newArr = [];
    
    function diffEle(first, second) {
        for(const ele of first) {
            if( second.indexOf(ele) === -1 ) {
                newArr.push(ele);
            }}}
    
	diffEle(arr1, arr2);
    diffEle(arr2, arr1);
    
    return newArr;
}
```



[모범답안 중]

```javascript
function diffArray(arr1, arr2) {
    return arr1
        	   .concat(arr2)
        	   .filter(
        			item => !arr2.includes(item) || !arr1.includes(item)
    			)
}
```



[모범답안 상]

```
function diffArray(arr1, arr2) {
    return arr1.filter(el => !arr2.includes(el))
    		.concat(
    		arr2.filter(el => !arr1.includes(el))
    		)
}
```



[모범답안 상2]

```javascript
fucntion diffArray(arr1, arr2) {
  	
    return [...diff(arr1, arr2), 
            ...diff(arr2, arr1)
           ]
    
    function diff(a, b) {
      	return a.filter( el => !b.includes(el))
    }
}
```

**[Spread Operator(ES6)]**

spread operator(...) 는 다양한 곳에서 활용이 되지만 이 문제에서는 배열을 합치는 데 사용 되었다. ...Array 를 하게 되면 Array안에 있는 요소들을 밖으로 끄집어내어 나열하는 역할을 한다.

ex) var a = [1,2,3,4,5]

​      var b = [4,5,6,7,8]

​      var abc = [ ...a , 100, 1000, ...b ];

​      console.log(abc) // [1,2,3,4,5,100,1000,4,5,6,7,8]

