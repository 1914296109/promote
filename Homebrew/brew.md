# Homebrew 包管理工具

1. 安装 Homebrew

   ```shell
   /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
   ```

2. 校验安装

   ```shell
   brew -v                  
   Homebrew 2.4.13
   Homebrew/homebrew-core (git revision 81b05; last commit 2020-08-23)
   Homebrew/homebrew-cask (git revision 70c2bf; last commit 2020-08-23)
   ```

3. brew 的基本使用

   ```shell
   brew install <packageName>
   brew uninstall <packageName>
   brew services start <packageName>
   brew services stop <packageName>
   #如安装 node
   brew install node
   #如卸装 node
   brew uninstall node
   #如开启redis服务
   brew services start redis
   #如停止redis服务
   brew services stop redis
   #查看redis服务进程
   ps -ef | grep redis
   #redis-cli连接redis服务
   redis-cli -h 127.0.0.1 -p 6379
   ```