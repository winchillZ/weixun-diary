# 🚀 Vercel 部署教程（已安装 Vercel CLI）

## 📋 准备工作

✅ Vercel CLI 已安装
✅ 构建文件已准备好：`/workspace/weixun-diary/build/`
✅ 你已有 Vercel 账号

---

## 🎯 方法一：使用 Vercel CLI 部署（推荐）

### 第一步：登录 Vercel

在终端中运行：

```bash
cd /workspace/weixun-diary/build
vercel login
```

然后选择你的登录方式：
- **GitHub** - 推荐，如果你用 GitHub 注册
- **GitLab** - 如果你用 GitLab 注册
- **Bitbucket** - 如果你用 Bitbucket 注册
- **Email** - 如果你用邮箱注册

按照提示完成登录。

---

### 第二步：部署到生产环境

登录成功后，运行：

```bash
vercel --prod
```

部署过程中会问几个问题，**直接回车使用默认值即可**：

```
? Set up and deploy "~/workspace/weixun-diary/build"? [Y/n] y
? Which scope do you want to deploy to? [你的用户名]
? Link to existing project? [y/N] n
? What's your project's name? weixun-diary
? In which directory is your code located? ./
? Want to modify these settings? [y/N] n
```

等待部署完成（约 30-60 秒）。

---

### 第三步：获取网址

部署完成后，终端会显示：

```
✔ Production: https://weixun-diary-xxx.vercel.app [30s]
```

这个网址就是你的在线原型！✅

---

## 🎯 方法二：通过 Vercel 网站部署（更简单）

如果你不想用命令行，可以用网页界面：

### 第一步：准备文件

1. 下载文件：`/workspace/weixun-diary-build.zip` (908KB)
2. 解压缩得到 `build` 文件夹

### 第二步：登录 Vercel

访问：https://vercel.com/login

使用你的 GitHub/GitLab/Bitbucket 账号登录

### 第三步：创建新项目

1. 点击右上角 **"Add New..."** 按钮
2. 选择 **"Project"**

### 第四步：上传文件

有两种方式：

#### 方式A：拖拽上传（最快）
1. 在页面中找到 **"Import Git Repository"** 下方的空白区域
2. 或者直接访问：https://vercel.com/new
3. 将解压后的 `build` 文件夹拖拽到页面上
4. 等待上传完成

#### 方式B：使用 Git 仓库
1. 先将项目推送到 GitHub
2. 在 Vercel 中选择该仓库
3. 点击 **"Import"**

### 第五步：配置项目

1. **Framework Preset**: 选择 **"Other"**
2. **Root Directory**: 默认 `./`
3. **Build Command**: 留空（已构建）
4. **Output Directory**: 留空或 `./`

点击 **"Deploy"** 按钮

### 第六步：等待部署

等待 10-30 秒，看到庆祝动画就成功了！

### 第七步：获取网址

部署成功后，你会看到：
- 一个随机生成的网址：`https://weixun-diary-xxx.vercel.app`
- 点击 **"Visit"** 按钮即可访问

---

## 🎨 自定义域名（可选）

部署成功后，你可以绑定自己的域名：

### 在 Vercel 中添加域名

1. 进入项目页面
2. 点击 **"Settings"** → **"Domains"**
3. 输入你的域名（如：`app.weixun-diary.com`）
4. 点击 **"Add"**

### 配置 DNS

在域名服务商（阿里云、腾讯云等）配置：

**A 记录**：
- 主机记录：`app`（或 `@`）
- 记录类型：`A`
- 记录值：`76.76.21.21`

**CNAME 记录**（推荐）：
- 主机记录：`app`
- 记录类型：`CNAME`
- 记录值：`cname.vercel-dns.com`

等待 DNS 生效（几分钟到几小时）

---

## 🔄 如何更新部署

### 使用 CLI 更新

```bash
cd /workspace/weixun-diary/build
vercel --prod
```

每次更新会生成一个新的预览链接，生产链接保持不变。

### 使用网页更新

1. 修改文件后重新构建
2. 访问：https://vercel.com
3. 进入项目 → 点击 **"Redeploy"**

---

## 📊 查看部署状态

### 在 CLI 中查看

```bash
vercel ls              # 查看所有部署
vercel inspect [url]   # 查看详细信息
vercel logs [url]      # 查看日志
```

### 在网页中查看

访问：https://vercel.com/dashboard

可以看到：
- 部署历史
- 访问统计
- 构建日志
- 性能分析

---

## 🛠️ 常用 Vercel 命令

```bash
vercel                  # 部署预览版本
vercel --prod           # 部署生产版本
vercel ls              # 查看所有部署
vercel rm [url]        # 删除某个部署
vercel domains         # 管理域名
vercel env             # 管理环境变量
vercel logs            # 查看日志
```

---

## ⚡ 快速部署步骤（总结）

**如果你想在 1 分钟内完成：**

```bash
# 1. 进入构建目录
cd /workspace/weixun-diary/build

# 2. 登录（如果还没登录）
vercel login

# 3. 部署到生产环境
vercel --prod

# 4. 访问显示的网址
```

就这么简单！✅

---

## 🎁 Vercel 免费套餐包含

- ✅ 无限部署次数
- ✅ 自动 HTTPS
- ✅ 全球 CDN
- ✅ 每月 100GB 带宽
- ✅ 自动构建和部署
- ✅ 预览部署
- ✅ 自定义域名
- ✅ 环境变量管理

完全够用！💜

---

## ❓ 常见问题

### Q: 部署后页面空白？
A: 检查浏览器控制台错误。确保所有文件都在 `build` 文件夹中。

### Q: 如何查看错误日志？
A: 运行 `vercel logs` 或在网页 Dashboard 查看

### Q: 如何删除旧的部署？
A: 在 Dashboard 中可以删除，或运行 `vercel rm [url]`

### Q: 如何让团队成员一起管理？
A: 在 Settings → Members 中邀请团队成员

### Q: 如何设置环境变量？
A: 在 Settings → Environment Variables 中添加

---

## 🚀 现在就开始

**只需三步：**

```bash
# 第一步：进入目录
cd /workspace/weixun-diary/build

# 第二步：登录（如果还没登录）
vercel login

# 第三步：部署
vercel --prod
```

部署成功后，你会立即获得一个可以分享的网址！

---

需要我帮你解决部署过程中的任何问题吗？💜
