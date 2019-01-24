# [객체지향] 상속과 prototype 1

Javascript 에서 모든 객체는 prototype 이라고 하는 숨겨진 특수 property를 가지고 있다. 이 prototype을 통해 한 객체의 속성을 다른 객체에서도 사용 할 수 있도록 허락한다.  이것이 바로 상속의 개념이다.

```javascript
function Person(name){
    this.name = name;
    this.introduce = function(){
        return "Hi! My name is " + this.name + "!"
    }
}

var father = new Person("JongHwan");

console.log(father); // --> Person {name : JongHwan , introduce : function(){} }
console.log(father.introduce()); // --> "Hi! My name is JongHwan!"
```

위와 같이 일반적으로 생성자 함수를 통해 새로운 객체(father)를 만들어주면,  그 새로운 객체(father)는 생성자(Person)의 property를 함께 공유하게 된다. 

하지만 이렇게 생성자 함수 안에 일일이 Property를 넣어 주지 않고, 생성자함수 Person안에 특수한 property인 'prototype'에 property를 넣어줌으로써 조금 더 시각적으로 간결화 시킬 수 있다.



```javascript
function Person(name){
    this.name = name;
}
Person.prototype.introduce = function (){
    return "Hi, my name is " + this.name 
}

var father = new Person('JongHwan');

console.log(father.introduce()); //--> "Hi, my name is JongHwan"
```



이제 여러가지의 객체를 만들어보자. 이 여러가지의 객체들은 property가 상속되어 서로 연결 되어있다.



```javascript
function Person(name) {
    this.name = name;
}
Person.prototype.introduce = function(){
 return "hi, my name is " + this.name   
}

function Programmer(name) {
    this.name = name
}
Programmer.prototype = new Person();

function Designer(name) {
    this.name = name
}
Designer.prototype = new Programmer();

var p1 = new Designer("Minsu");
console.log(p1.introduce());
```



위와 같이 Person()  > Programmer()  >  Designer() 순으로 꼬리에 꼬리의 물도록 상속을 시켰다. 따라서, 생성자 함수 Designer('Minsu') 로 만든 객체를 담은 변수인 p1 에서 , Person의 prototype 에 담겨있던 introduce를 호출해도 호출이 되는 것이다.



