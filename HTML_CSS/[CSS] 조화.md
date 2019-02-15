# [CSS] 조화

### 상속

상속은 부모 엘리먼트의 속성을 자식 엘리먼트들이 물려 받는 다는 것을 의미한다. 

```html
<ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
    <li>Python</li>
</ul>

<ol>
    <li>AAA</li>
    <li>BBB</li>
    <li>CCC</li>
    <li>DDD</li>
</ol>
```

만약 여기서 ul, ol 모두 폰트 색상을 red로 바꿔주고 싶다면, ul, ol 각각 바꿔 줘야 할까?

그렇지 않다.  

```
html { color : red }
```

라고 선언하는 것이 해당 html 모든 영역의 폰트에 red 컬러를 적용함으로써 한번에 쉽게 해결할 수 있다.

이것이 바로 상속의 개념이다.



### 캐스캐이딩

캐스캐이딩이란 '우선순위'를 뜻한다.



```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      li{color:red;}
      #idsel{color:blue;}
      #idsel{color:yellow;}
      .classsel{color:green;}
    </style>
  </head>
  <body>
    <ul>
      <li>html</li>
      <li id="idsel" class="classsel">css</li> //(1)
      <li>javascript</li>
    </ul>
    <ol>
      <li>style attribute</li>
      <li>id selector</li>
      <li>class selector</li>
      <li>tag selector</li>
    </ol>
  </body>
</html>
```

(1) 부분에 있는  <li id="idsel" class="classsel">css</li> 코드를 보면 하나의 태그의 여러개의 선택자가 중복이 되어있다.

더군다나 style 태그에서는 li 태그 전체에 붉은색으로 색을 변경ㅎ라는 신호까지 있으니....어떤 색을 적용해야할지 난해하다.

이럴 때, 우선순위를 결정하는 규칙이 바로 'cascading'이라고 할 수 있다.



 우선순위대로 정리하면,

1.style attributer (개별 태그에 직접 쓰는 것)

2.id selector 

3.class selector

4.tag selector 

순으로 적용이 된다.

따라서, tag seletor를 통해 해당 태그가 공유해야하는 전반적인 디자인 틀을 잡아주고, 개별 요소하나하나는 class, id, style attributer를 통해 접근하는것이 바람직하다.