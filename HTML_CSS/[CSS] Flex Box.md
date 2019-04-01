# [CSS] Flex Box

[출처] <https://joshuajangblog.wordpress.com/2016/09/19/learn-css-flexbox-in-3mins/>



css에서 display 속성으로서, 

- block
- inline
- inline-block

이 있었다.



이번 시간에는 display를 자동적으로 정렬 시켜주는 속성인 flex를 알아본다.



### flex



![1553840859477](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\1553840859477.png)

```css
display: flex;
```

위에 그림에서 

- blue box - container
- red box - item(container 안에 포함 됨)

라고 가정하자.



### 수평레이아웃

```css
.container {
    display: flex;
}
```

![1553841004368](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\1553841004368.png)

container의 display속성을 flex로 설정하면, 위의 그림과 같이 정렬이 된다. 주의 할 점은, 안에 있는 빨간색 item들 또한 위의 그림처럼 자동 정렬 된다는 점이다.



### 수직레이아웃 (flex-direction : column)

만약 container안에 있는 빨간색 item들을 수직으로 정렬하고 싶다면?

```css
.container {
    display: flex;
    flex-direction : column;
}
```

위와 같이 **'flex-direction : column'** 이라고 지정해 준다. 만약 아이템들을 다시 가로로 정렬 해주고 싶다면, '**flex-direction: row'** 이라고 지정해준다.



###  justify-content VS align-items

container 안에 있는 item 박스들을 container 안에서 사용자의 기호에 맞게 정렬해 주고 싶을 땐, **'justify-content'** 와 **'align-items'**를 이용할 수 있다.



- **justify-content** : 중심축(수평)을 기준으로 item 박스를 정렬한다

  ```css
  .container {
      display: flex;
      flex-direction: low;
      justify-content: center;
  }
  ```

  

![1553841482896](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\1553841482896.png)

- align-items : 교차죽(수직)을 기준으로 item 박스를 정렬한다.

```css
.container {
    display: flex;
    flex-direction: low;
    justify-content: center;
    align-items: center;
}
```

![1553841593362](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\1553841593362.png)





### Justify-content와 Align-items의 속성값들



#### Justify-content:

- flex-start(default)
- flex-end
- center
- space-between
- space-around

![1553842477903](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\1553842477903.png)

[출처: <https://css-tricks.com/almanac/properties/j/justify-content/>]

#### Align-items:

- flex-start(default)
- flex-end
- center
- baseline
- stretch



![1553842559132](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\1553842559132.png)

[출처 : <https://css-tricks.com/almanac/properties/a/align-items/>]

