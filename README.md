# the-first

静态示例站 —— 可直接部署到 GitHub Pages 的简单前端示例。

文件说明：
- index.html
- styles.css
- script.js

本地运行：
1. 把仓库 clone 到本地：
   git clone https://github.com/tumaoxiao/the-first.git
2. 进入目录并启动静态服务器：
   cd the-first
   python3 -m http.server 8000
3. 在浏览器打开：http://localhost:8000

自动部署：
- 已添加 GitHub Actions 工作流（位于 .github/workflows/deploy-pages.yml），在每次 push 到 main 时会自动构建并部署到 GitHub Pages（使用官方 Pages actions），无需额外 token。
- 第一次成功运行后，Pages 会自动发布；你可以在仓库 Settings -> Pages 查看发布状态与站点 URL。

自定义域：
- 若需要自定义域，请创建一个名为 `CNAME` 的文件，文件内容仅为你的域名（例如 mysite.example.com），我可以一并帮你添加.
