---
title: Vim学习
index: true
editLink: false
---
# 简介

# 安装 `NeoVim`
`NeoVim` 是当前最流行的第三方版本，推荐使用。以下罗列了常用的安装方法，详情请参考 [NeoVim 安装指南](https://github.com/neovim/neovim/wiki/Installing-Neovim)。
::: code-tabs#vim

@tab mac
```bash
# Homebrew
brew install neovim
```

@tab windows
```powershell
# Winget
winget install Neovim.Neovim
```

@tab linux
```bash
# Debian / Ubuntu
sudo apt-get install neovim
```

:::

安装完成后在 `Shell` 中运行 `nvim` 即可启动 `NeoVim`。
# 常用命令
## 工作模式
`Vim` 拥有 4 种不同的工作模式：
- 普通模式：打开文件时的默认模式，处于其他模式时按下 `ESC` 键即可返回改模式。
- 插入模式：普通模式下按 `i/o/a` 即可进入，进行文本编辑操作。
- 命令行模式：
- 可视化模式：

## 光标移动
### 字符移动
`k` 上
`j` 下
`h` 左
`l` 右

### 单词移动
`w`
`b`
`e`
`E`
`ge`
`2w`

### 行移动


### 屏幕移动


## 文本操作
### 基本操作


### 查找与替换


### 保存与退出




# 配置文件 `.vimrc`




# 按键映射
