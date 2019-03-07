# [CSS] Display 속성

## 개요

`display` 속성은 요소를 어떻게 보여줄지를 결정한다
주로 4가지 속성값이 쓰이는데, 태그마다 기본값이 다르다.

- `none` : 보이지 않음
- `block` : 블록 박스
- `inline` : 인라인 박스
- `inline-block` : block과 inline의 중간 형태

### none

태그가 보이지 않게 되는데, `visibility` 속성을 `hidden`으로 설정한 것과 달리, 영역도 차지하지 않는다..

### block

p, div 태그 등이 이에 해당 된다.

가로 길이가 기본적으로 `100%`이며, `block`인 태그를 이어서 사용하면 줄바꿈 되어 보인다.
`width`, `height` 속성을 지정 할 수 있으며, 레이아웃 배치시 주로 쓰인다.

### inline

span, b, i 태그 등이 이에 해당된다.
`block` 과 달리 줄 바꿈이 되지 않고, `width`와 `height`를 지정 할 수 없습니다.

### inline-block

`block`과 `inline`의 중간 형태라고 볼 수 있는데, 줄 바꿈이 되지 않지만 크기를 지정 할 수 있다.
Internet Explorer 7 이하에서는 사용할 수 없으며 `*zoom: 1` 이라는 속성을 사용하면 비슷하게 사용할 수 있있다.