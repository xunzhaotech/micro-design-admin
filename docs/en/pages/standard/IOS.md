# iOS规范
## 命名规范

> 文件/文件夹命名

采用首字母大写的大驼峰命名法 `(Camel-Case)`

如：```LoginViewController.swift```



> 函数命名

采用首字母小写的小驼峰命名法` (Camel-Case)`

如：```func myFunc() {}```



>  变量命名

采用首字母小写的小驼峰命名法 `(Camel-Case)` ，使变量名尽量可以推测其用途属性具有描述性，切勿使用拼音命名

正确示范：```let puppy = Puppy()```

错误示范：```let xiaoGou = Puppy()```



> 图片资源文件命名

图片资源命名方式，以功能为组织形式，有利于查看资源文件。



**命名原则：**

1. 采用单词全拼，或者大家公认无岐义的缩写（比如：`nav`，`bg`，`btn`等）

2. 采用下划线进行连接

3. 采用 “模块+功能” 命名法，模块分为公共模块、私有模块。公共模块主要包括统一的背

   景，导航条，标签，公共的按钮背景，公共的默认图等等；私有模块主要根据 `APP` 的业务

   功能模块划分，比如用户中心，消息中心等

4. 背景图采用以 `bg` 作为前缀

5. 普通状态的图片以 `normal` 作为后缀，高亮状态的图片以 `selected` 作为后缀



**命名示例：**

导航条背影图片：`bg_nav_bar@2x.png`

导航返回按钮：`nav_back_normal@2x.png`，`nav_back_selected@2x.png`

标签item图片：`tabbar_record_normal@2x.png`，`tabbar_record_selected@2x.png`





## 目录规范
> 整体结构：

![Image text](/doc/ios_total_structure.png)


> 主要模块结构：

![Image text](/doc/ios_main_structure.png)


> 子模块结构：

![Image text](/doc/ios_sub_structure.png)

## 编码规范

> 方法声明规范

1. 前括号提至方法后
2. 同一模块功能代码写在一起
3. 不同模块功能换行写
4. 方法与方法之间需换行

```swift
override func viewDidLoad() {
    super.viewDidLoad()

    setupHeadView()
    setupTableView()
  
    getCellDatas()
}

func setupHeadView() {
	
}

func setupTableView() {

}

func getCellDatas() {

}
```



> 空格规范
1. 符号两边需留出空格。如 `=、&&、||` 等
2. 冒号 `：` 只需在后面留出空格
3. 采用四个空格进行缩进

```swift
func myFunc() {
    let condition1 = true
    let condition2: Bool = false

    if condition1 && condition2 {
        // do something...
    }

    if condition1 || condition2 {
        // do something...
    }
}
```



> 模块方法分类

1. 使用 `extension` 对 `viewController` 进行分类
2. 使用 `// MARK:- ` 、`// TODO: - ` 、`// FIXME: - ` 进行标记

```swift
// MARK: - Private Functions
extension LoginViewController {
    // TODO: - 用来表示待完成，或者待解决问题
  	// FIXME: - 用来表示待解决的问题
}

// MARK: - Action Functions
extension LoginViewController {
    
}

// MARK: - xxx DataSource
extension LoginViewController {
    
}

// MARK: - xxx Delegate
extension LoginViewController {
    
}
```