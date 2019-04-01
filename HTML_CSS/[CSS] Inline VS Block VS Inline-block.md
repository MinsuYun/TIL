# [CSS] Inline VS Block VS Inline-block

[참조: <https://thrillfighter.tistory.com/468>]



CSS 에서  컨텐츠를 화면에 표시하는 방법을 택할 때

### display : Inline[,Block, Inline-block] 을 사용할 수 있다.



```html
<html>
    <body>
        <a href=" http://hocalhost">inline</a>속성과 <div>Block속성</div>
    </body>
</html>
```



화면에 표시되는 내용은 아래와 같다.

![1553835757173](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\1553835757173.png)



다시 말해, inline은 다른 텍스트나 이미지와 한 줄에 함께 쓰일 때 사용하며, 한 줄 전체를 사용하고 싶을 때는 block을 이용한다.



### 1. a태그 span태그 img태그 vs p태그, div태그

1.a태그, span태그 - 기본적으로 **inline** 속성을 Default 값으로 지니고 있다.

2.p태그, div태그 - 기본적으로 **block** 속성을 Default 값으로 지니고 있다.



### 2. inline 태그와 block 태그의 성질

- **Inline**

  -width, height, margin 속성들을 가질 수 없다. (이런 속성을 지정한다면 다 무시된다.)

  -만약 줄간격을 조정하고 싶다면, line-height 속성을 사용할 수 있다.

   (또는, display: block을 추가한 다음 width, height, margin등을 이용 할 수 있다.)

  inline 속성을 갖는 태그가 연속으로 위치 할 때는, 두 내용을 구별 할 수 있을 정도의 간격이 생긴다.

- **block**

  -width, height, margin 속성을 가질 수 있다.



**=>** **inline 속성을 가지는 태그는 하위 태그로 block속성을 가지는 태그(div, p 등)을 사용 할 수 없다. 하지만 반대로 block 속성을 가지는 태그는 하위 태그로 inline속성을 가지는 태그(img, span, a)를 둘 수 있다.**



### 3. Display 속성들

1.none - 해당 요소를 제거

2.inline

3.block

**4.inline--block - inline 속성(한 줄 내 에서 다른 요소들과 연결되는 속성) 과 block 속성(width, height, margin등의 속성)을 동시에 가짐**



### 4. inline-block 

```html
<html>
    <body>
        <a href=" http://hocalhost">inline</a>속성과 <div>block</div> 속성
    </body>
</html>
```

![1553837060353](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\1553837060353.png)



위 세번 째 그림과 같이, div태그 와 같이 block속성을 default값으로 가지는 태그들이 다른 값 들과 한 줄에 함께 쓰이고 자 할 때 이용한다.



![1553837316002](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\1553837316002.png)

[참조 : <http://css.webcodehelpers.com/2014/05/css-display-block-vs-inline-block-vs.html>]

