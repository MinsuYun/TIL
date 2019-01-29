# Unique 메소드 모음집

### [s]

* startsWith - 특정 문자를 시작으로 하는 값을 뱉어낸다

  ```javascript
  function cardType(cardNumber) {
      if(cardNumber.startsWith('345')) {
          return 'Kakao'
      } else if( cardNumber.startsWith('999')) {
          return 'Shinhan'
      } else {
          return 'Kukmin';
      }
  }
  console.log(cardType('999382-384-3827-49')) // Shinhan
  
  ```

  