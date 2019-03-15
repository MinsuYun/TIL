# 3-1  DOM | 제어대상 찾기와 HTML ELEMENT



### [제어대상 찾기]



HTML의 문서에 해당하는 부분을 자바스크립트로 제어하기 위해서는 제어 대상에 해당하는 객체를 찾아야한다. 객체를 찾는 방법은 document 객체의 메소드를 이용한다.

1. **document.getElementbyID('something')**

2. **document.getElementsbyClassName('something')**
3. **document.getElementsbyTagName('something')**



4. **document.querySelector('#something') // ID값을 불러올 때**
5. **document.querySelector('.something') // Class값을 불러올 때**
6. **document.querySelector('something') // tag값을 불러올 때**



### [HTML ELEMENT]

getElement 메소드를 통해 원하는 객체를 조회 했다면, 이제 이들을 가지고 구체적인 작업을 해야한다. 이를 위해서는 가져온 객체가 무엇인지 알아야한다. 그래야 메소드나 프로퍼티를 이용하여 구체적인 작업을 실행 할 수 있다.

```html
<ul>
    <li>HTML</li>
    <li>CSS</li>
    <li id="active">JavaScript</li> 
</ul>

<script>
	var li = document.getElementById('active');
    console.log(li.constructor.name) // li객체를 만든 부모생성자가 누군인지 알아봄
    //li.constructor.name = HTMLLIElement
    
    
    var lis = document.getElementsbyTagName('li');
    console.log(lis.constructor.name) //lis객체를 만든 부모생성자가 누군지 알아봄
	//lis.constructor.name = HTMLCollection
</script>
```

- HTMLLIElement