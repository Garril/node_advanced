/* 前置
  文件的权限位mode、标识位flag、文件描述符fd等
  （要操作文件涉及权限）
===============================================================
/*
/*
一： 权限位
  3种权限-- 读、写、执行
  字母代表   r  w   x
  数字代表   4  2   1 （任意两个相加得到的和都是唯一，可以逆推）
  不具备权限则为 0

$ ll
total 6
-rw-r--r-- 1 admin 197121 2211  8月  2 23:34 package.json     
-rw-r--r-- 1 admin 197121  224  8月  1 01:14 package-lock.json
-rw-r--r-- 1 admin 197121   35  7月 26 01:14 README.md        
drwxr-xr-x 1 admin 197121    0  8月  2 23:58 src/
d代表文件夹-rwx可读写执行- r root用户，后面的xr -x其他用户，不管

问题如下：
  mkdir fs
  cd fs
  touch test.js
  ll
输出：total 0
    -rw-r--r-- 1 admin 197121 0  8月  3 00:20 test.js
如何把文件改为只读？

执行：chomd 444 test.js
测试：vim test.js
===============================================================
*/
/* 二：文件标识位 flag
  找表看，r、s、w、x、+、a的拼接，代表对文件的操作方式，可读、可写等等权限
 */
/* 
  三：文件描述符fd
    操作系统会为每个打开的文件分配一个名为文件描述符的数值标识，
    文件操作这些文件描述符来识别与追踪每个特定的文件
    在node每操作一个文件，文件描述符递增，从3开始
    0、1、2分别代表 process.stdin(标准输入)，process.stdout(标准输出),process.stderr(错误输出)
===============================================================
*/