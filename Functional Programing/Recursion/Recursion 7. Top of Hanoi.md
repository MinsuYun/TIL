# Recursion 7. Top of Hanoi

![1552123959012](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\1552123959012.png)



Q. 1번 Pole에 n개의 원반이 있을 때, 3번 Pole 에 새롭게 원반 탑을 쌓는데 걸리는 횟수는?

condition1 . Pole은 3개다

condition2. 작은 원반은 항상 큰 원반 위에 존재해야한다.



Answer

```javascript
function Hanoi(n){
    if(n=1) return 1;
    	return Hanoi(n-1) * 2 + 1
}
```



=> (Tip)맨 아래 놓은 가장 큰 원반과 나머지 원반 두 가지로만 생각한다.