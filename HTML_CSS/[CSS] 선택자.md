# [CSS] 선택자

### 1.css와 html이  만나는 방법

(1)inline 방식 - body 부분 각 태그 라인에 style 태그 삽입해주기

(2)head에 style 태그 넣기



### 2.선택자?

![1549960256991](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\1549960256991.png)



### 3.선택자의 종류 

**<1>태그선택자**

일반 선택자. 본문에서 사용되는 각 태그에 해당 하는 모든 값들이 일괄적으로 변경 된다.



**<2>아이디선택자 ( 복수의 값을 가지고 있는 태그들 중, 특정 값 하나만 변경하기 )**

(1)body부분 -태그 시작 부분 안에, **id = " 임의의 값 "** 넣어주고, 

(2)head부분 -  **#임의의 값 { 선언;}** 하기

```html
<head>
    <style>
        h1 { 
            color : red;
        	text-decoration : underline;
        }
        #special {
 			font-size : 30px           
        }
    </style>
</head>

<body>
    <h1> HTML </h1>
    <h2 id = "special"> CSS </h2>
</body>
```



**<3>클래스선택자**

아이디선택자는 복수의 값을 가지고 있는 태그들 중, 특정 값 하나만 변경할때 이용하였다.

그러나 만약, 복수의 여러가지를 동시에 바꾸고 싶을 때는? 클래스선택자를 이용한다!

(1) body부분 - 아이디 선택자와 동일하나, id가 아니라 **, class = "임의의 값"**을 입력한다.

(2) head부분 - #아닌 .  을 입력한다.



```html
<head>
    <style>
        h1 { 
            color : red;
        	text-decoration : underline;
        }
        #special {
 			font-size : 30px           
        }
        .cancle {
            text-decoration: line-through;
        }
    </style>
</head>

<body>
    <h1 class="canle"> HTML </h1>
    <ul>
        <li class="canle">태그</li>
        <li>서버연결</li>
        <li class="canle">링크</li>
  		<li id = "special"> 이것만 아이디선택자</li> 
    </ul>
    	
</body>
```



### 4. 다양한 선택자 기법

어떤 태그 하위에 있는 태그들을 변경하고 싶을 때 이용한다

**<1> 특정 태그 아래 있는 하위 태그 모두  선택하기**

```html
ul li {
    color:red;
} 
// <ul> 하위에 있는 <li> 태그 모두를 색상을 붉은 색으로 변경
// 하위 태그 선택자를 쓸 때는, 상-하위 태그 들을 띄어쓰기로 입력한다
```

**<2> 태그 동시에서 선택자로 설정하기**

```html
ul, li{
	background-color : skyblue;
}
//<ul> 태그와 <li> 태그 동시에 값을 변경 시키고 싶을 때 ','를 쓴다.
```

**<3> 특정 태그 아래에 있는 하위 태그만 선택하기**

```html
#lecture>li {
    border:1px solid red;
}

//lecture로 설정해놓은 아이디 선택자 아래있는 li 들만 값을 변경함.
```

<전체내용>

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      ul li{
        color:red;
      }
      #lecture>li{
        text-decoration : underline;
      }
      ul,ol{
        background-color: powderblue;
      }
    </style>
  </head>
  <body>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
    </ul>
    <ol>
      <li>HTML</li>
      <li>CSS
        <ol id="lecture">
          <li>selector</li>
          <li>declaration</li>
        </ol>
      </li>
      <li>JavaScript</li>
    </ol>
  </body>
</html>

```

![1549964836379](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\1549964836379.png)

