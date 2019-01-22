# Passing Variables ( Primitive types , Reference types)

**Primitive Types (원시형타입)**

- Boolean
- number
- string
- undefined
- null



**Reference types** **(참조형 타입)**

- function
- array
- object



-----------

#### 원시형타입은 변수의 값을 변경 해주면, 원본 값은 변하지 않는다.

#### 참조형타입은 변수의 값을 변경 해주면, 원본의 값마저 함께 변한다.



```javascript 
(1)원시형타입(primitive type)

var a = 5
var b = a
b = 3

console.loe(a); // --> 5
console.log(b); // --> 3

위와 같이, 원시형타입에서는 제 1변수(a)의 값을 제 2변수(b)가 참조한 상황에서, b의 값이 변경되어도, 원본인 제 1변수(a)의 값은 변경되지 않는다.


(2)참조형타입(reference type)

var a = [1, 2, 3]
var b = a
b[0] = 7

console.log(a); // --> [7, 2, 3]
console.log(b); // --> [7, 2, 3]

위와 같이, 참조형타입에서는 제 1변수(a), 제 2변수(b) 모두 값이 변경 된다.
```

