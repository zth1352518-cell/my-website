# 🌐 我的学习分享平台

一个专业的学习分享网站，采用左右分栏布局，整合了 AI、投资理财、专业会计、个人成长四大知识模块。

## ✨ 特点

- 🎯 **四大模块**：AI、投资、会计、成长，系统化知识分类
- 📱 **响应式布局**：左右分栏设计，完美适配各种设备
- 🚀 **快速加载**：纯静态网站，速度飞快
- 💰 **完全免费**：使用 Vercel 免费托管
- 🔄 **易于更新**：直接编辑 HTML 添加内容

## 📁 项目结构

```
personal-website/
├── index.html          # 首页（包含所有模块内容）
├── about.html          # 关于我
├── css/
│   └── style.css       # 全局样式
├── js/
│   └── main.js         # 交互脚本
├── images/
│   ├── avatar.jpg      # 头像图片（需要你自己添加）
│   └── bg.jpg          # 背景图片（可选）
└── README.md           # 说明文档
```

## 🎨 网站结构

### 四大知识模块

| 模块 | 图标 | 内容 |
|------|------|------|
| **AI 人工智能** | 🤖 | AI技术、提示词工程、AI工具应用 |
| **投资理财** | 💰 | 基金定投、价值投资、财富增值 |
| **专业会计** | 📊 | 会计准则、财务分析、报表编制 |
| **个人成长** | 🌱 | 学习方法、时间管理、知识体系 |

### 每个模块包含四个部分

1. **学习笔记**：该模块相关的学习心得和文章
2. **资源下载**：该模块相关的PDF、工具、模板等资源
3. **学习路径**：该模块的学习路线图或课程大纲
4. **推荐资源**：该模块推荐的书单、课程、网站等

## 🚀 快速开始

### 方法一：本地预览

1. **直接打开**
   ```
   打开 personal-website 文件夹
   双击 index.html 文件即可在浏览器中查看
   ```

2. **使用本地服务器（可选）**
   ```bash
   # 使用 Python
   python -m http.server 8000

   # 使用 Node.js
   npx serve
   ```

### 方法二：部署到 Vercel（推荐）

#### 拖拽部署（最简单）

1. 访问 [vercel.com](https://vercel.com) 并注册/登录
2. 登录后点击 "New Project"
3. 拖拽 `personal-website` 整个文件夹到页面中
4. 等待部署完成，获得免费域名！

#### Git 部署（进阶）

```bash
# 1. 在 GitHub 创建新仓库

# 2. 在本地初始化 Git
cd personal-website
git init
git add .
git commit -m "初始版本"

# 3. 推送到 GitHub
git remote add origin https://github.com/你的用户名/仓库名.git
git branch -M main
git push -u origin main

# 4. 在 Vercel 导入 GitHub 仓库
```

## ✏️ 如何更新网站内容

### 添加学习笔记

在 `index.html` 中找到对应模块的"学习笔记"标签页，添加新的笔记卡片：

```html
<article class="note-card">
    <div class="note-date">2024-01-20</div>
    <h3 class="note-title">你的笔记标题</h3>
    <p class="note-excerpt">笔记摘要内容...</p>
    <div class="note-tags">
        <span class="note-tag">标签1</span>
        <span class="note-tag">标签2</span>
    </div>
</article>
```

### 添加资源文件

在对应模块的"资源下载"标签页，添加新的资源卡片：

```html
<div class="file-card">
    <div class="file-icon pdf"></div>
    <div class="file-name">文件名称.pdf</div>
    <div class="file-description">文件描述</div>
    <div class="file-meta">
        <span>📄 PDF</span>
        <span>📦 5MB</span>
    </div>
    <button class="file-download-btn" onclick="window.open('你的网盘链接', '_blank')">
        ⬇️ 下载文件
    </button>
</div>
```

### 修改推荐资源

在对应模块的"推荐资源"标签页，添加推荐卡片：

```html
<div class="recommend-card">
    <div class="recommend-type">📚 书籍</div>
    <h4 class="recommend-title">书名</h4>
    <p class="recommend-desc">书籍简介</p>
</div>
```

### 添加学习路径

在"学习路径"标签页，添加新的学习步骤：

```html
<div class="path-item">
    <div class="path-number">1</div>
    <div class="path-content">
        <h4>阶段标题</h4>
        <p>阶段描述</p>
        <div class="path-tags">
            <span class="tag-item">4周</span>
            <span class="tag-item">入门</span>
        </div>
    </div>
</div>
```

## 🎨 自定义

### 修改网站标题

在 `index.html` 和 `about.html` 的 `<title>` 标签中修改：

```html
<title>你的网站名称</title>
```

### 修改导航栏

在所有 HTML 文件的导航栏部分修改：

```html
<a href="index.html" class="nav-logo">你的网站名</a>
```

### 修改颜色主题

编辑 `css/style.css`，修改 `:root` 中的颜色变量：

```css
:root {
    --primary-color: #0066cc;    /* 主色调 */
    --accent-color: #ff6b35;     /* 强调色 */
    /* ... */
}
```

## 📝 更新和部署

### 更新内容

1. 修改 `index.html` 中的内容
2. 保存文件

### 重新部署

**Vercel 拖拽部署：**
- 在 Vercel 网站后台点击 "Redeploy"

**Git 部署：**
```bash
git add .
git commit -m "添加了新内容"
git push
# Vercel 会自动检测并部署
```

## 🔧 常见问题

### Q: 模块切换不工作？
A: 检查浏览器控制台是否有 JavaScript 错误，确保 `js/main.js` 文件存在。

### Q: 如何添加新模块？
A: 需要修改 `index.html` 中的侧边栏导航和对应的模块内容区域。

### Q: 网盘链接如何设置？
A: 将文件上传到百度网盘或夸克网盘，创建分享链接，然后在资源卡片的 `onclick` 中填入链接。

### Q: 如何更换域名？
A:
1. 购买域名（推荐在阿里云、腾讯云）
2. 在域名管理后台添加 DNS 记录指向 Vercel
3. 在 Vercel 项目设置中添加自定义域名

## 📚 模块内容说明

### AI 人工智能模块
- **学习笔记**：ChatGPT提示词、AI工具使用等
- **资源下载**：AI学习路线图、提示词模板库等
- **学习路径**：AI基础 → 提示词工程 → AI工具实战
- **推荐资源**：相关书籍、课程、文档

### 投资理财模块
- **学习笔记**：价值投资理念、基金定投策略等
- **资源下载**：投资收益计算器、基金筛选指标等
- **学习路径**：理财基础 → 基金投资 → 股票投资
- **推荐资源**：投资书籍、APP、社区

### 专业会计模块
- **学习笔记**：会计准则解读、财务报表分析等
- **资源下载**：财务报表模板、会计科目表等
- **学习路径**：会计基础 → 财务报表 → 财务管理
- **推荐资源**：专业书籍、资讯平台、学习APP

### 个人成长模块
- **学习笔记**：高效学习方法、时间管理心得等
- **资源下载**：年度计划模板、习惯追踪表等
- **学习路径**：自我认知 → 方法建立 → 持续实践
- **推荐资源**：成长类书籍、知识服务平台

## 🎯 后续扩展方向

1. **搜索功能**：添加全局搜索，快速找到内容
2. **评论系统**：为笔记添加评论互动功能
3. **访问统计**：集成 Google Analytics
4. **自动化**：使用 GitHub Actions 自动部署
5. **CMS集成**：接入 Headless CMS 实现内容管理

## 💡 提示

- 定期备份网站文件
- 图片文件建议每张小于 1MB
- 网盘分享链接注意有效期，定期更新
- 可以使用 Git 管理版本，方便回滚

---

**祝你的学习分享平台建设顺利！** 🎉

有问题可以参考 Vercel 文档或搜索相关教程。
