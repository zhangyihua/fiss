# fiss

一个基于 [fis3](http://fis.baidu.com/fis3/index.html) 的前端解决方案。

## 联系我们

[![Gitter](https://badges.gitter.im/zhangyihua/fiss.svg)](https://gitter.im/zhangyihua/fiss?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

## 安装

```cli

	npm install fiss -g

```

## 使用

```

Usage: fiss <command>

Commands:

  init [command|template] [filename] [options]     init project/file scaffold with the specified template type
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

目前 fiss 基于 fis3 定制了 `init` 和 `release` 命令。

同时，我们移除了 fis3 的 `install`，统一使用 **[fecom](https://github.com/icefox0801/fecom)** 进行组件管理。

## 资源列表

- 命令
  * [fiss-command-init](https://github.com/fiss-scaffold/fiss-command-init)
  * [fiss-command-release](https://github.com/fiss-scaffold/fiss-command-release)

- 插件
  * [fis-lint-html-hint](https://github.com/fiss-scaffold/fis-lint-html-hint)
  * [fiss-lint-csslint](https://github.com/fiss-scaffold/fiss-lint-csslint)
  * [fiss-lint-eslint](https://github.com/fiss-scaffold/fiss-lint-eslint)
  * [fis3-media-manage](https://github.com/fiss-scaffold/fis3-media-manage)
  * [fis3-deploy-skip-packed-x](https://github.com/fiss-scaffold/fis3-deploy-skip-packed-x)
  * [fis3-deploy-ftp-x](https://github.com/fiss-scaffold/fis3-deploy-ftp-x)
  * [fis-parser-node-sass-x](https://github.com/fiss-scaffold/fis-parser-node-sass-x)
  * [fis3-postpackager-loader-x](https://github.com/fiss-scaffold/fis3-postpackager-loader-x)

- 工程模板
  * [simple-m](https://github.com/fiss-scaffold/simple-m)
  * [sample-amd](https://github.com/fiss-scaffold/sample-amd)
  * [sample-use-components](https://github.com/fiss-scaffold/sample-use-components)
