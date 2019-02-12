# HTML Tag

### a - 링크

```html
<a target="_blank" href="https://ko.wikipedia.org/wiki/%EB%8F%84%EB%84%90%EB%93%9C_%EC%BB%A4%EB%88%84%EC%8A%A4" title="전설적인 프로그래머">도널드 커누스</a>
```

target = "_blank"  : 링크창 열면 새탭으로 열리게 된다.

herf ="링크할 주소 복붙"

title = "tool tip"

### p  /p - 단락 설정



### br - 띄어쓰기



### Img - 이미지 삽입

-컴퓨터에 내장된 이미지를 페이지로 삽입 ( 반드시 현재 진행중인 파일과 같은 폴더에 사진을 저장 해 주어야 함.)

```html
<img src = "파일제목.확장자명" width = "200" height="300" alt = "사진묘사" title="설명">
```

src - 파일제목.확장자명

width - 너비설정

height - 높이설정

*둘 중 하나만 입력하면, 나머지 하나는 자동적으로 계산해서 설정 된다.

alt - 파일제목이 잘 못 입력되거나 변질 될때, 페이지 상에서 원래 이 자리에 어떤 사진이 있었는지 설명하게 된다.

title - tool tip이 나오게 된다.



### table - 표 삽입

```html
<table border = "2">
  <thead>	    
    <tr>
    	<td>이름</td>  <td>성별</td>  <td>주소</td>  <td>회비</td>
    </tr>
  </thead> 
  <tbody>  
      <tr>
    	<td>윤민수</td>  <td>남자</td>  <td rowspan = "2">광진구</td> <td>1000</td>
    </tr>
    <tr>
    	<td>윤민아</td>  <td>여자</td>  <td>500</td>
    </tr>
  </tbody>
  <tfoot>
  	<tr>
    	<td colspan ="3"</td>  <td>1500</td> 
    </tr>  
    
  </tfoot>
     
</table>
```

* table - 표를 시작할 것이다 알림
* thead / tbody / tfoot 표 내에서의 제목/본문/꼬리 부분

-위 예제에서는 thead는 첫째줄,  tbody는 둘,셋째줄, tfoot은 맨 아랫줄 생성

* tr - 한 행이 시작 됨을 알림  , /tr 닫아주면 행 끝남
* td - 한 행에 들어갈 각 각 개별 데이터들을 입력할 때 씀
* colspan - 열합치기
* rowspann  - 행합치기

![1549874687371](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\1549874687371.png)

### 입력양식 -form

사용자가 입력한 로그인 / 선택 정보 등  여러가지 데이터들을 서버쪽으로 보내주는 태그



**[로그인창 만들어보기]**

```html
<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <title>로그인</title>
</head>

<body>
<form action ='http://localhost/login.php'>
  <p>아이디: <input type = 'text' name="id" value="아이디를 입력하세요"></p>
  <p>비밀번호: <input type = 'password' name="pw" value="패스워드를 입력하세요"> </p>
  <p><input type="submit" value="로그인"></p>
</form>

</html>
```



![1549873360167](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\1549873360167.png)

- form action = "http~~" 를 통해 입력한 정보들이 아래 주소(서버side)로 전송된다.라고 알려줌
- input 

-type = 'text' - 문자를 입력할 창이 생김

-type = 'password' - 비밀번호를 입력할 창이 생김. 창에 번호를 입력하면 자동 숨김 처리 된다.

-type = 'submit' - 제출 버튼이 생성된다. 제출 버튼을 누르면 form action에서 설정한 서버 주소로 정보를 전송하게 된다. 

name = '' --> 서버쪽에서 읽어들일 내용

value = '' -> 각 창에 미리 어떠한 값을 저장해 둔다. submit의 경우, 버튼 이름을 등록하는 용도로 쓴다.



**[댓글창 만들어보기]**

```html
<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <title>댓글</title>
</head>

<body>
<form action ='http://localhost/login.php'>
  <p>아이디:  <input type = 'text' name="id" value="아이디를 입력하세요"></p>
  <p>비밀번호: <input type = 'password' name="pw" value="패스워드를 입력하세요"> </p>
  <p>
    <textarea cols="50" rows="5">댓글을 입력하세요</textarea>
  </p>
  <p><input type="submit" value="등록"></p>
</form>

</html>

```

![1549873771832](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\1549873771832.png)



- textarea - 넓은 면적의 텍스트창 만들기

-<textarea cols='50' rows'5'> 댓글을 입력하세요 </textarea>

--> 50글자가 들어갈 만한 행 넓이와, 5문장이 들어갈만한 열 길이가 생성. 



**[선택지 만들기]**

```html
<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <title>선택지</title>
</head>

<body>
  <form action="http://localhost/size.php">
  <h3>신발 size</h3>
    <select name="shoes size">
      <option value="230">230</option>
      <option value="240">240</option>
      <option value="250">250</option>
      <option value="260">260</option>
      <option value="270">270</option>
      <option value="280">280</option>
    </select>
    <input type="submit" value="선택">
  </form>
</body>
</html>

```

![1549874600231](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\1549874600231.png)

**[선택창 만들기 단일/복수]**

```html
<head>
  <meta charset="utf-8">
  <title>선택지</title>
</head>

<body>
  <form action="http://localhost/size.php">
  <p>
    <h3>신발 색상(단일선택)</h3>
    블랙 <input type="radio" name="color" value="black">
    화이트(추천) <input type="radio" name="color" value="white" checked>
    레드 <input type="radio" name="color" value="red">
  </p>
  <p>
    <h3>사은품(복수선택)</h3>
    양말 <input type="checkbox" name="gift" value="socks" checked>
    휴지 <input type="checkbox" name="gift" value="tissue" checked>
  </p>
  <input type="submit" value="선택">
  </form>
</body>
</html>
```

radio - 클릭 원 생성(단일선택 가능)

checkbox - 복수선택 창 생성(복수선택 가능)

checked - 페이지 화면 초기부터 미리 찍혀있게 끔 만든ㅁ

![1549880466520](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\1549880466520.png)