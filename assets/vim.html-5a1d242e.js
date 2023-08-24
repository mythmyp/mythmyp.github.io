import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as s,o as l,c as h,a as e,b as a,d as c,w as i,e as u}from"./app-50bc1ec9.js";const m={},b=e("h1",{id:"简介",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#简介","aria-hidden":"true"},"#"),a(" 简介")],-1),v=e("h1",{id:"安装-neovim",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#安装-neovim","aria-hidden":"true"},"#"),a(" 安装 "),e("code",null,"NeoVim")],-1),p=e("code",null,"NeoVim",-1),_={href:"https://github.com/neovim/neovim/wiki/Installing-Neovim",target:"_blank",rel:"noopener noreferrer"},f=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token comment"},"# Homebrew"),a(`
brew `),e("span",{class:"token function"},"install"),a(` neovim
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),x=e("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell"},[e("pre",{class:"language-powershell"},[e("code",null,[e("span",{class:"token comment"},"# Winget"),a(`
winget install Neovim`),e("span",{class:"token punctuation"},"."),a(`Neovim
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),g=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token comment"},"# Debian / Ubuntu"),a(`
`),e("span",{class:"token function"},"sudo"),a(),e("span",{class:"token function"},"apt-get"),a(),e("span",{class:"token function"},"install"),a(` neovim
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),k=u('<p>安装完成后在 <code>Shell</code> 中运行 <code>nvim</code> 即可启动 <code>NeoVim</code>。</p><h1 id="常用命令" tabindex="-1"><a class="header-anchor" href="#常用命令" aria-hidden="true">#</a> 常用命令</h1><h2 id="工作模式" tabindex="-1"><a class="header-anchor" href="#工作模式" aria-hidden="true">#</a> 工作模式</h2><p><code>Vim</code> 拥有 4 种不同的工作模式：</p><ul><li>普通模式：打开文件时的默认模式，处于其他模式时按下 <code>ESC</code> 键即可返回改模式。</li><li>插入模式：普通模式下按 <code>i/o/a</code> 即可进入，进行文本编辑操作。</li><li>命令行模式：</li><li>可视化模式：</li></ul><h2 id="光标移动" tabindex="-1"><a class="header-anchor" href="#光标移动" aria-hidden="true">#</a> 光标移动</h2><h3 id="字符移动" tabindex="-1"><a class="header-anchor" href="#字符移动" aria-hidden="true">#</a> 字符移动</h3><p><code>k</code> 上<br><code>j</code> 下<br><code>h</code> 左<br><code>l</code> 右</p><h3 id="单词移动" tabindex="-1"><a class="header-anchor" href="#单词移动" aria-hidden="true">#</a> 单词移动</h3><p><code>w</code><br><code>b</code><br><code>e</code><br><code>E</code><br><code>ge</code><br><code>2w</code></p><h3 id="行移动" tabindex="-1"><a class="header-anchor" href="#行移动" aria-hidden="true">#</a> 行移动</h3><h3 id="屏幕移动" tabindex="-1"><a class="header-anchor" href="#屏幕移动" aria-hidden="true">#</a> 屏幕移动</h3><h2 id="文本操作" tabindex="-1"><a class="header-anchor" href="#文本操作" aria-hidden="true">#</a> 文本操作</h2><h3 id="基本操作" tabindex="-1"><a class="header-anchor" href="#基本操作" aria-hidden="true">#</a> 基本操作</h3><h3 id="查找与替换" tabindex="-1"><a class="header-anchor" href="#查找与替换" aria-hidden="true">#</a> 查找与替换</h3><h3 id="保存与退出" tabindex="-1"><a class="header-anchor" href="#保存与退出" aria-hidden="true">#</a> 保存与退出</h3><h1 id="配置文件-vimrc" tabindex="-1"><a class="header-anchor" href="#配置文件-vimrc" aria-hidden="true">#</a> 配置文件 <code>.vimrc</code></h1><h1 id="按键映射" tabindex="-1"><a class="header-anchor" href="#按键映射" aria-hidden="true">#</a> 按键映射</h1>',18);function w(N,V){const o=s("ExternalLinkIcon"),r=s("CodeTabs");return l(),h("div",null,[b,v,e("p",null,[p,a(" 是当前最流行的第三方版本，推荐使用。以下罗列了常用的安装方法，详情请参考 "),e("a",_,[a("NeoVim 安装指南"),c(o)]),a("。")]),c(r,{id:"9",data:[{id:"mac"},{id:"windows"},{id:"linux"}],"tab-id":"vim"},{title0:i(({value:n,isActive:d})=>[a("mac")]),title1:i(({value:n,isActive:d})=>[a("windows")]),title2:i(({value:n,isActive:d})=>[a("linux")]),tab0:i(({value:n,isActive:d})=>[f]),tab1:i(({value:n,isActive:d})=>[x]),tab2:i(({value:n,isActive:d})=>[g]),_:1}),k])}const E=t(m,[["render",w],["__file","vim.html.vue"]]);export{E as default};