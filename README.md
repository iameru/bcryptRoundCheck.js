Just a small tool to check bcrypt rounds performance on mashines to determine a good proportion between userfriendlieness and security as with each round security rises but it takes exponantially more time to hash.

```bash
pnpm install
node bcryptRounds.js
```


example output:

```
 (main) exercises/bcryptrounds $ node bcryptRounds.js                  26ms 
OS: linux
KERNEL: 5.13.19-2-MANJARO
CPU's: Intel(R) Core(TM) i5-7300U CPU @ 2.60GHz
-------------------------------
trying for bcryptcosts with maxtime: 1.234 seconds to hash
hashed 4 rounds in 6 miliseconds
hashed 5 rounds in 8 miliseconds
hashed 6 rounds in 17 miliseconds
hashed 7 rounds in 31 miliseconds
hashed 8 rounds in 28 miliseconds
hashed 9 rounds in 38 miliseconds
hashed 10 rounds in 73 miliseconds
hashed 11 rounds in 147 miliseconds
hashed 12 rounds in 295 miliseconds
hashed 13 rounds in 590 miliseconds
hashed 14 rounds in 1181 miliseconds
rechecking last valid round
-------------- Result -----------------
hashed 14 rounds in 1157 miliseconds
hashed 14 rounds in 1166 miliseconds
hashed 14 rounds in 1153 miliseconds
14 rounds mean 16384 iterations / bcrypt factor
```
