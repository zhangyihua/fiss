# fiss

一个基于 [fis3](http://fis.baidu.com/fis3/index.html) 的前端解决方案。

## 安装

```cli
	
	npm install fiss -g

```

## 使用

```

Usage: fiss <command>

Commands:

  init [command|template] [filename] [options]     init project/file scaffold with the specified template type
  install                                          install components
  release [media name]                             build and deploy your project
  server <command> [options]                       launch a server
  inspect [media name]                             inspect the result of fis.match

Options:

  -h, --help                print this help message
  -v, --version             print product version and exit
  -r, --root <path>         specify project root
  -f, --file <filename>     specify the file path of `fis-conf.js`
  --no-color                disable colored output
  --verbose                 enable verbose mode

```

目前 fiss 基于 fis3 拓展 `init` 命令，执行 `fiss init -h` 查看详细，或查看 [fiss-command-init](https://github.com/zhangyihua/fiss-command-init) 说明。

## 资源列表

- fiss 插件资源：[fiss-plugins](https://github.com/fiss-plugins)
- fiss 模板资源：[fiss-scaffold](https://github.com/fiss-scaffold)
