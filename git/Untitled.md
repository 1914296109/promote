### Git的使用

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
   
9. 取消更改

   ```
   git status
   git restore <file>
   git status
   ```
   
   

# 代码提交规范

- `feat` // 新增功能
- `fix` // 修复 Bug
- `perf` // 性能提升
- `style` // 优化代码格式
- `docs` // 编写文档
- `test` // 编写测试
- `refactor` // 代码重构
- `build` // 编译打包
- `ci` // 持续集成
- `cd` // 持续部署
- `chore` // 其他修改，比如构建流程
- `revert` // 代码回滚
- `workflow` // 工作流
- `types` // 定义变量类型
- `config` // 项目配置
- `dependency` // 项目依赖