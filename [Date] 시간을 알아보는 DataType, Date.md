```

```

# [Date] 시간을 알아보는 DataType, Date

웹 브라우저상에 현재 시간을 표시 하고 싶은가? 그렇다면 반드시 알아야 할 데이터타입 Date!

웹 브라우저에 현재 시간을 표시하는 방법을 통해 Date를 다루는 법을 알아보자.



```javascript
var currentTime = new Date();
//인스턴스 currentTime을 콘솔에 찍으면 "Sun Feb 24 2019 01:14:43 GMT+0900 (한국 표준시) {}" 와 같은 값이 표시 되는 것을 확인 할 수 있다. 즉, 현재 시간정보를 담아내는 객체를 만들어 준것이다. 이를 통해 시간, 분, 초, 날짜, 요일 등을 모두 불러 올 수 있다. 
```



```javascript
currentTime.getHours() //현재 시
currentTime.getMinutes() //현재 분
currentTime.getSeconds() //현재 초
currentTime.getDay() //오늘 요일( 일:0 ~ 토:6) --> 0~6까지의 숫자로 표시 된다.
currentTime.getDate() //오늘 날짜 (01~31)
currentTime.getYear() //현재 연도
currentTime.getMonth() //현재 월 (1월 :0 ~ 12월:11) --> 0~11까지의 숫자로 표시 된다.
```



위와 같이 써주면 된다. 아래는 실제로 웹 브라우저상에서 시간을 표시하기 위해 짠 실제 코드이다.

<HTML>

```html
<!DOCTYPE <!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Your Today</title>
    <link rel="stylesheet" href="main.css">
</head>
<body>
    <div class="js-clock">
        <h1 class="clockTitle">00:00</h1>  --> ** 이 부분에 주목 **
    </div> 
    <script src="index.js"></script>    
</body>
</html>
```

<JS>

```javascript
const clockTitle = document.querySelector(".clockTitle")

fucntion getTime(){
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    const currentMinutes = currentMinutes.getMinutes();
    const currentSeconds = currentTime.getSeconds();
    
    clockTitle.innerHTML = `${currentHour < 10 ? `$0{currentHour}' : currentHour} : ${currentMinutes < 10 ? `$0{currentMinutes}` : currentMinutes} : ${currentSeconds < 10 ? `$0{currentSeconds}` : currentSeconds}`
    //위의 clockTitle.innerHTML의 타입은 string이다.
    //위의 코드는 각 시,분,초가 10 미만일 때, 두 자리로 표시되게 만들어라는 뜻 ex) 02:05:06
}

function init(){
   getTime(); --> //옵션 1. 일반적으로 실행할 떄.
   setInterval(getTime, 1000); --> //옵션 2. 1초 마다 실시간으로 시간 업데이트 시켜줌. 첫 번째 인자로는 실행시키고자 하는 함수, 두번 째 인자로는 시간 간격을 의미하며 miliseconds 기준
};
init();
```

