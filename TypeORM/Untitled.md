# TypeORM学习笔记

## 概述

- TypeORM是⼀个对象关系映射框架，它可以运⾏在 NodeJS、Browser、Cordova、PhoneGap、Ionic、React Native、Expo 和Electron 平台上。
- 可以与 TypeScript 和 JavaScript (ES5,ES6,ES7,ES8)⼀起使⽤。
- 它的⽬标是始终⽀持最新的 JavaScript 特性并提供额外的特性以帮助你开发任何使⽤数据库的（不管是只有⼏张表的⼩型应⽤还是拥有多数据库的⼤型企业应⽤）应⽤程序。
- 还兼容各种主流数据库

安装
--------------------------------------------------------
```shell
npm install typeorm -g
```

> tips: 如果出现安装失败，那么就是没有权限的问题。mac就在代码前输⼊sudo提升权限,windows就使⽤右键管理员⾝份运⾏再复制以上的代码。

生成项目
--------------------------------------------------------
```shell
typeorm init --name MyProject --database mysql
```

- name 是创建的项目名称
- mysql 要使用的数据库

## 配置文件

```typescript
{
"type":"mysql",// 数据库类型
"host":"localhost",// 数据库地址
"port":3306,// 端⼝号
"username":"test",// ⽤户名
"password":"test",// 密码
"database":"test",// 使⽤哪⼀个数据库
"synchronize":true,// 是否同步，就是将⾥⾯定义的数据模块同步到数据库⽣成数据表
"logging":false,// src/entity是否打印⽇志执⾏语句时候输出原⽣也可以配置成⼀个数组指定的执⾏类型,sqlsql["query", "error", "schema"]sql
"entities":[
"src/entity/**/*.ts"// 实体类的路径
],
"migrations":[
"src/migration/**/*.ts"// 数据库迁移⽂件⽣成路径
],
"subscribers":[
"src/subscriber/**/*.ts"
],
"cli":{
"entitiesDir":"src/entity",
"migrationsDir":"src/migration",
"subscribersDir":"src/subscriber"
}
}
```

## 实体类

```typescript
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn({
      type: 'bigint'
  })
  id: number;

  @Column({
    type: 'varchar', // 字段类型
    nullable: false, // 是否为空
    length: 64, // 长度
    unique: true, // 是否唯一
    name: 'phone_number', // 映射到表的字段名，如果是一样的可以不指定
    comment: '用户手机号码'
  })
  phoneNumber: string;

  @Column({
    length: 64,
  })
  password: string;
```

- Entity() 就相当于映射到数据库中的表,class 的名字就对应表的名字
- PrimaryGeneratedColumn() 相对应表的主键，⽽且是⾃动递增的。
- PrimaryColumn() 这个就是主键不⾃动递增
- Column() 表⽰表中的列
- type配置字段类型,在mysql中字符类型可能是char、varchar、text,数字类型可能是int、tinyint,⼩数类型可能是float、double、decimal(10,2)等。
- name: 真正映射到mysql数据库中字段名字,如果不指定会默认以对象的字段为名字(建议都指定)
- length: 长度,⽐如在mysql中字段为varchar的时候指定字段长度
- nullable: 在mysql中字段是否可以为NULL值,默认为false
- select: 改字段是否可以被查询出来(针对使⽤typeORM的查寻操作,不针对你使⽤原⽣SQL语句操作),默认true表⽰可以被查询出来
- default: 默认值,⽐如插⼊数据的时候,没传递该字段的值,就默认⼀个值
- unique: 是否唯⼀约束
- comment: 备注该字段是做什么的(建议都写上,⽅便阅读)
- enum: 枚举类型
- array: 该列是否以数组

