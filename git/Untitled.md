###  Git的使用

***

1. 查看文件状态 (红色-未提交到缓存区，绿色-已添缓存区)

   ```git
   git status
   ```

2. 把代码提交到缓存区

   ```git
   git add .
   ```

3. 提交代码并备注

   ```git
   git commit -m "备注内容"
   ```

4. 拉取代码

   ```git
   git pull
   ```

5. 将代码推到远程分支上

   ```git
   git push -u origin 分支名
   ```

6. 查看分支

   ```git
   git branch     // 本地分支
   git branch -r  // 远程分支
   git branch -a  // 本地和远程
   ```

7. 操作分支

   ```
   git branch 分支名   	 // 新建本地分支
   git checkout 分支名	// 切换本地分支
   git checkout -b 分支名	 // 新建并切换到分支
   git branch -d 分支名    // 删除本地分支
   
   git push origin HEAD -u // 推送本地分支到远程仓库
   git branch -m 旧分支 新分支 	// 修改分支名称
   git push origin :旧分支  	  // 删除远程分支
   git branch -dr [remote/branch] // 删除远程分支
   
   git rebase -i HEAD~number  // 将dev分支中的number个提交化为一个提交
   git rebase master  //dev基于master的，将master内容合并到自己修改之处
   git status // 若有冲突 查看
   git rebase --continue  // 解决冲突后，继续走完rebase
   
   git checkout master  // 切换到master
   git merge dev  // 将dev合并到master
   git push origin master  // 合并完毕之后提交
   ```

8. 将本地分支和远程分支合并关联

   ```
   git push --set-upstream origin 分支名
   ```

9. 多个远程仓库

   ```
   git remote -v // 查看关联的所有仓库
   git remote add (name) (path)  // 添加一个远程仓库
   git fetch <name>  // 拉取远程仓库代码
   git remote set-url origin <path>  // 修改远程仓库
   ```
   
9. 删除分支

   ```
   git rm --cached filename // 仅仅删除远程分支文件，不删除本地文件
   git rm filename  //  删除本地文件与远程分支文件
   
   git rm -r --cached directoryname // 删除远程文件夹directoryname
   git rm -r directoryname  //  删除本地文件夹与远程分支文件夹
   
   git commit -m "delete remote file filename "
   git push -u origin master(此处是当前分支的名字)
   
   ```
   
12. 更新远程分支，更新remote索引

    ```
    git fetch
    ```

13. 打上版本号

    ```shell
    git tag v0.1.0
    git push origin --tags
    ```

14. 查看提交提交记录

    ```shell
    git log // 历史记录
    git log -p // 当前记录
    git diff // 当前改动
    ```

15. 标签管理

    ```shell
    // 本地
    git tag -l // 查看标签
    git  tag -d [] // 删除
    git tag -l | xargs git tag -d // 删除所有
    git push origin <tagname> // 推送单个标签
    git push origin --tags  // 推送全部未推送的标签
    
    // 远程
    git show-ref --tag  // 查看标签
    git push origin :refs/tags/v1.1 // 删除
    git push origin --delete tags v1.1 // 删除
    git show-ref --tag | awk '/2018.*/{print ":" $2}' | xargs git push origin // 批量删除
    ```
    
15. 回滚

    ```shell
    // 恢复更改的文件
    git restore <file>
    // 暂存区的文件撤回工作区 不撤销内容
    git restore --staged <file>
    
    // 取消暂存区的文件
    git reset HEAD
    
    // 本地切换到要回滚的分支，之后：
    git reset HEAD^            # 回退所有内容到上一个版本  
    git reset HEAD^ hello.php  # 回退 hello.php 文件的版本到上一个版本  
    git reset 052e           # 回退到指定版本
    
    // --hard 参数撤销工作区中所有未提交的修改内容，将暂存区与工作区都回到上一次版本，并删除之前的所有信息提交：
    
    // 本地切换到要回滚的分支，之后：
    git reset –hard HEAD~3  # 回退上上上一个版本  
    git reset –hard  bae128  # 回退到某个版本回退点之前的所有信息。 
    git reset --hard origin/master    # 将本地的状态回退到和远程的一样 
    // 再强制回滚远程的分支：
    git push origin HEAD --force

15. 解决冲突

    ```shell
    git stash  # 备份当前的工作区的内容，让工作区保证和上次提交的内容一致。同时，将当前的工作区内容保存到Git栈中
    git commit
    git stash pop  # 从Git栈中读取最近一次保存的内容，恢复工作区的相关内容
    在终端下依次输入上述代码就可以让服务器上的代码更新到了本地，而且你本地修改的代码也没有被覆盖
    之后使用add，commit，push命令即可更新本地代码到服务器
    ```
    
    
# 代码提交规范

- `feat`             功能方面的提交
- `fix`               Bug方面的提交
- `perf`             性能方面的提交
- `style`           针对代码样式的提交（不是CSS样式）
- `docs`             文档方面的提交
- `test`             测试方面的提交
- `data`             数据方面的提交
- `refactor`     重构方面的提交
- `build`           编译打包方面的提交
- `ci`                 持续集成方面的提交
- `cd`                 持续集成方面的提交
- `db`                 数据库方面的提交
- `chore`           其他修改，比如构建流程，依赖管理
- `revert`         回滚方面的提交
- `workflow`     工作流方面的提交
- `types`           定义TS类型方面的提交
- `config`         项目方面的提交
- `refine`         优化方面的提交
- `clean`           清除废弃多余无用代码文件的提交
- `dependency` 依赖管理方面的提交