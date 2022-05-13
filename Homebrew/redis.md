# redis

1. 开始安装

   ```shell
   brew install redis
   # 最后控制台出现，后证明安装成功
   ==> Summary
   /usr/local/Cellar/redis/版本号
   
   # error: could not lock config file .git/config: Permission denied
   # Error: Command failed with exit 255: git
   # If you don't have the permissions, run
   sudo chown -R $(whoami):admin /usr/local/* && sudo chmod -R g+rwx /usr/local/*
   ```

2. 配置 redis

   ```shell
   cd /usr/local/ect/
   vim redis.conf
   # 也可以找到文件夹 command+shift+G 输入/usr/local/ect/
   ```

   

