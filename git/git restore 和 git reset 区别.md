# git restore 和 git reset 区别

### 1. git restore 用法总结

```shell
git restore --staged <file_name>
```

> 将暂存区的修改重新放回工作区（包括对文件自身的操作，如添加文件、删除文件）

```shell
git restore <file_name> 
```

> 丢弃工作区的修改（不包括对文件自身的操作，如添加文件、删除文件）

### 2. git reset 用法总结

```shell
git reset HEAD <file_name> 
```

> 丢弃暂存区的修改，重新放回工作区，会将暂存区的内容和本地已提交的内容全部恢复到未暂存的状态，不影响原来本地文件(相当于撤销git add 操作，不影响上一次commit后对本地文件的修改) （包括对文件的操作，如添加文件、删除文件）

```shell
git reset –hard HEAD 
```

> 清空暂存区，将已提交的内容的版本恢复到本地，本地的文件也将被恢复的版本替换（恢复到上一次commit后的状态，上一次commit后的修改也丢弃）