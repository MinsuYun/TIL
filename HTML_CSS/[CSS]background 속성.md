# background 속성

background 속성은 태그의 배경을 지정하는 속성이다.

대표적인 것으로 아래와 같은 것들이 있다.

- background-color : 배경색
- background-image:  배경이미지
- background-repeat: 배경 이미지 반복 여부
- background-position: 배경 이미지 위치
- background-size: 배경 이미지 크기 조정



### background-color

```css
#a {
    background-color : #FF00CC;
}

#b {
    background-color : green;
}
```



### background-image

배경 이미지를 설정하며, 주로 이미지 경로를 지정한다. 특이사항은 이미지를 삽입하게 되면, 해당 태그의 컨테이너 크기와 상관없이 삽입하고자 하는 이미지의 크기가 그대로 삽입 된다.

만약 이미지보다 컨테이너 크기가 크다면 이미지는 반복되어 표시되게 된다.

```css
#a {
    background-image = url(www.~~~);
}
```



### background-size

배경이미지가 컨테이너 크기와 사이즈가 맞지 않거나 원하는 사이즈로 변경하고 싶은 경우 아래와 같은 속성을 이용한다.

- auto 기본값으로 배경 이미지 원래의 width, height 그대로 표시

- px/cm(길이) 길이 단위로 배경이미지의 width와 height를 설정

- % 너비와 높이를 퍼센테이지로 조종. 첫번째는 width, 두번째는 height를 나타낸다.

  (ex) background-size = 50% 50%

- cover 배경 지역이 배경 이미지로 완전히 덮힌다.

- initial 기본값으로 초기화



### background-repeat

배경이미지가 해당 태그의 컨테이너의 크기 보다 작게 된다면 이미지는 이를 맞추기위해 이미지를 반복하여 나타낸다.(바둑판식으로) 이런 것이 싫다면 repeat되는 현상을 없앨 수 있다.

```css
.a {
    background-repeat : no-repeat;
    background-repeat : repeat;
    background-repeat : repeat-x;
    background-repeat : repeat-y;
}
```



### background-position

아무 설정을 하지 않는다면 이미지는 일반적으로 왼쪽부터 이미지를 나타낸다. 만약 중간이나 오른쪽 또는 위 아래로 옮기고 싶다면 해당 속성을 사용하면 된다.

margin, padding을 사용하는 것과 비슷하게  띄어쓰기를 기준으로 x좌표, y좌표를 지정한다.

픽셀 뿐만 아니라, left, top, center, bottom, right 등 상수를 사용 할 수 있다.

```css
.a {
	background-position : center center; //중간으로 배치
    background-position:30px right; background-repeat: repeat ;
	background-position:-100px -60px; background-repeat: repeat-x; 
	background-position:40px -90px; background-repeat: repeat-y; 
}
```

