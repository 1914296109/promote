# **GitHub Actions 持续集成**

### 1.**什么是 GitHub Actions**

> 持续集成由很多操作组成，比如抓取代码、运行测试、登录远程服务器，发布到第三方服务等等。GitHub 把这些操作就称为 actions。

> GitHub 允许开发者把每个 Actions 写成独立的脚本文件，存放到代码仓库，使其他开发者可以在自己的 Actions 中引用，这样一来就可以产生许多奇妙的效应。

### 2.一些官方文档

- [GitHub Actions 介绍](https://blog.lucien.ink/go/aHR0cHM6Ly9oZWxwLmdpdGh1Yi5jb20vZW4vYXJ0aWNsZXMvYWJvdXQtYWN0aW9ucw==)
- [语法说明](https://blog.lucien.ink/go/aHR0cHM6Ly9oZWxwLmdpdGh1Yi5jb20vZW4vZ2l0aHViL2F1dG9tYXRpbmcteW91ci13b3JrZmxvdy13aXRoLWdpdGh1Yi1hY3Rpb25zL3dvcmtmbG93LXN5bnRheC1mb3ItZ2l0aHViLWFjdGlvbnM=)
- [内置变量和语法](https://blog.lucien.ink/go/aHR0cHM6Ly9oZWxwLmdpdGh1Yi5jb20vZW4vZ2l0aHViL2F1dG9tYXRpbmcteW91ci13b3JrZmxvdy13aXRoLWdpdGh1Yi1hY3Rpb25zL2NvbnRleHRzLWFuZC1leHByZXNzaW9uLXN5bnRheC1mb3ItZ2l0aHViLWFjdGlvbnM=)
- [可以触发 workflow 的事件](https://blog.lucien.ink/go/aHR0cHM6Ly9oZWxwLmdpdGh1Yi5jb20vZW4vZ2l0aHViL2F1dG9tYXRpbmcteW91ci13b3JrZmxvdy13aXRoLWdpdGh1Yi1hY3Rpb25zL2V2ZW50cy10aGF0LXRyaWdnZXItd29ya2Zsb3dz)
- [GitHub Action + Release：打造 Electron 持续交付系统](https://zhuanlan.zhihu.com/p/164901026)

### 3.基本概念

1. **workflow**
   一个 `.yml` 文件对应一个 workflow，也就是一次持续集成。一个 GitHub 仓库可以包含多个 workflow，只要是在 `.github/workflow` 中的 `.yml` 文件都会被 GitHub 执行。
2. **job**
   一个 workflow 可以包含多个 job，每个 job 代表一个持续集成任务
3. **step**
   一个 job 可以包含多个 step，每个 step 代表 job 中的一个步骤
4. **on**
   一个 workflow 的触发条件，决定了当前的 workflow 在什么时候被执行