# CSS typography

### Font-size

```html
<style>
    #px { font-size: 1rem;}
</style>
```

// 단위는 px도 있지만, 화변 비율 변환에 반응하지 못하는 고정값이므로, rem을 쓰도록한다.



### Color

```html
<style>
    .students { color: #00FF00}
</style>
```

color: red, color: white 와 같이 직관적인 색의 이름을 적어주어도 괜찮지만, 만약 더욱 디테일한 색상을 찾아서 적용하고 싶다면, 

https://www.w3schools.com/css/css_colors.asp 를 참고하여, 16진법 컬러를 참조하여 위의 예제처럼 붙여넣기를 하면 된다.



**[일반텍스트 컬러변경]**

위와 같이 { color : 색상명 }

**[배경컬러 변경]**

{background-color : 색상명}

**[border color 변경]**

{border: 2px solid 색상명}





### Text Align

글자 위치 조정

```html
h1 {
text-align : justify;
border: 3px solid powderblue;
}
```

* justify - 화면에 맞게 자동 위치조정
* left - 왼쪽
* right - 오른쪽
* center - 가운데



### font

font-family 는 서체를 지정하는 property. 

```html
h1 {
font-family : "Times New Roman", Times, serif;
}
```

위 코드의 의미는 'h1태그에 엮인 코드들 폰트 모양을 'Times New Roman'으로 지정한다'라는 의미이다. 그런데 만약 사용자 컴퓨터에 Times New Roman이라는 폰트가 저장이 되어있지 않다면 글자가 깨져서 보이기 때문에, 만약에 ' "Times New Roman"이 없다면 대신 두번째 방안으로 Times 라는 폰트를 적용해라' 라는 의미가 된다. 

그리고 맨 마지막 serif는 글꼴의 장식을 의미한다.

![1550233766570](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\1550233766570.png)

**[serif  VS san-serif]**

위 그림의 위가 san-serif , 아래가 serif 이다.

모든 폰트에서 이렇게 글자 끝마디마디에 장식을 달아주면 serif , 아니면 san-serif이다.



<폰트 종류 및 자주 많이 사용 되는 폰트를 확인 하고 싶다면 아래 링크를 확인!>

http://www.fontreach.com/#top



### line-weight 

line-weight는 폰트의 두께를 의미한다.

```html
h1 {
    font-weight: bold;
}
```

대체로 bold만 기억하면 된다.



### line-height 

line-height 행과 행 사이의 간격을 지정한다. 기본 normal  값은 1.2이며, 이 수치를 기준으로 간격을 조정하면 된다. 

```html
#orange {
    line-height : 1.5;
}
```



### font

폰트와 관련된 여러 속성을 축약형으로 표현하는 속성이다. 형식은 아래와 같으며, 순서를 지켜서 기술해야한다.

특히, font-size, font-family는 필수로 포함해야 한다.

```html
h1 {
    font: 5rem, arial, sans-serif
}
```

