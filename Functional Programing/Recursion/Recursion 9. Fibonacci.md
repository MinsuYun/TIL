# Recursion 9. Fibonacci

Q . 피보나치 수열을 리커전의 방법으로 구현하라



A.

```javascript
function fibo(n) {
    if(n===0 || n===1) return n;
    	reutrn fibo(n-1) + fibo(n-2)
}
```



**B. Memoization**



```javascript
var fibo = ( function(){
    var memo = {};
    
    function inner(n) {
        var value;
        
        if( n in memo ) {
            value = memo[n];
        } else {
            if( n===0 || n===1 ) {
                value = n
            } else {
                value = inner(n-1) + inner(n-2);
            }
         
        }
      return value;
    }
   return inner;
})()

fibo(4) // 3
fibo(5) // 5
fibo(6) // 8
```

