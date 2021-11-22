# Android 规范

## 命名规范

> 项目applicationId命名

采用单词，字母全部小写，或者单词加“-”，结构（com.ak.项目名单词）

如：com.ak.health      com.ak.library-base

> 函数命名

采用单词驼峰规则名字，使函数名尽量可以推测其用途属性具有描述性

如：  public void  getListHistory( ) { }    

> 变量命名

采用首字母小写单词驼峰规则名字，使变量名尽量可以推测其用途属性具有描述性

如：private int msgCount=1;

定义布尔值使用小写 boolean  

如：private boolean  isShowTitle=true;

> 图片资源文件命名

图片资源命名方式，以功能为组织形式，有利于查看资源文件。

> 图片命名原则：

1. 采用单词全拼，或者大家公认无岐义的缩写（比如：`icon`，`bg`，`btn`等）

2. 采用下划线进行连接

3. 采用 “模块+功能” 命名法，模块分为公共模块、私有模块。公共模块主要包括统一的背

4. 景，导航条，标签，公共的按钮背景，公共的默认图等等；私有模块主要根据 `APP` 的业务

5. 功能模块划分，比如用户中心，消息中心等

6. 背景图采用以 `bg` 作为前缀

7. 普通状态的图片以 `normal` 作为后缀，高亮状态的图片以 `selected` 作为后缀

   

> 图片命名示例：

图标图片命名：icon_me_share.png

背景图片命名：bg_me_title.png

按钮图片命名：

btn_me_back.png

btn_me_back_normal.png

btn_me_back_selected.png

## 目录规范

> 整体结构

项目采用mvvm架构，Retrofit+Okhttp+RxJava

![Image text](/doc/project_library.png)

![Image text](/doc/project_tree.png)

> 子模块结构：

![Image text](/doc/project_module.png)

## 编码规范

> 方法声明规范

1. 使方法名尽量可以推测其用途属性具有描述性
2. 前括号提至方法后
3. 方法与方法之间需换行
4. 代码写完后需要进行代码格式化 Ctrl+Alt+L 默认格式化代码

![Image text](/doc/project_code.png)

> 注释说明

1.每个class头部需要进行注释说明

2.每个变量后面需要进行备注说明

3.方法前面需要增加一个简单说明用途

![Image text](/doc/project_code_note.png)