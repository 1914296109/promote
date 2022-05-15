# mac 系统node版本管理工具 n （windows 用nvm）
n可以帮助我们便捷的在不同的版本之间切换。
n不支持windows系统
以下所有的操作都在终端进行
1. 安装n,使用npm安装，一般安装全局的包，需要sudo 命令, 密码为mac开机密码。
   ```shell
    sudo npm install -g n
    ```
2. 查看n的版本
   ```shell
   n --version
   ```
3. 安装Node
   - 安装最新的lts版本
    ```
    sudo n lts  // 服务器开发建议使用lts版本
    ```
    - 安装最新的版本
    ```
    sudo n latest
    ```
    - 安装指定版本
    ```
    sudo n 12.16.3
    ```
# 安装node 12.16.3的版本
四、版本切换
终端输入`n`可以看到已经安装的node版本
使用键盘的上下键，选择想要使用的版本
选好后直接按回车键，即可切换到所选的版本
# 卸载node12.16.3版本
```
sudo n uninstall 12.16.3
```
