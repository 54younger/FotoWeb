# Avocadofoto · 商业摄影网站

A minimalist photography site built with Vite + React + Tailwind, deployed via Cloudflare Pages and optimized with Cloudflare Image Transform.

## 🔧 Tech Stack

- **Frontend**: Vite + React + Tailwind CSS
- **Deployment**: Cloudflare Pages
- **Code Hosting**: GitHub
- **Image Delivery**: Cloudflare Image Transform (`/cdn-cgi/image/`)

## 📸 Features

- Responsive photo galleries
- Categorized sections: Graduation, Headshots, Portraits
- Promotion banner + booking CTA
- Avocado green branding

## 🚀 Deployment Guide

See [DEPLOYMENT.md](./DEPLOYMENT.md) for step-by-step deployment using Cloudflare Pages.

## 📂 Folder Structure
.
├── public/                     # 静态资源（如图片、favicon、robots.txt）
│   └── .htaccess               # 可选服务器配置
├── src/                        # 主源码目录
│   ├── components/             # 可复用组件
│   │   └── ui/                 # UI 子组件
│   │       ├── AnnouncementBar.jsx
│   │       ├── Footer.jsx
│   │       ├── Header.jsx
│   │       └── Layout.jsx
│   ├── lib/                    # 工具函数
│   │   └── utils.js
│   ├── pages/                  # 页面组件（多用于路由控制）
│   │   ├── AboutPage.jsx
│   │   ├── ContactPage.jsx
│   │   ├── GalleryPage.jsx
│   │   ├── HomePage.jsx
│   │   └── ServicesPage.jsx
│   ├── App.jsx                 # 应用入口组件
│   ├── index.css               # Tailwind 全局样式
│   └── main.jsx                # Vite 入口文件
├── .gitignore
├── index.html                 # 项目入口 HTML（由 Vite 注入）
├── package.json
├── package-lock.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js             # Vite 构建配置
└── README.md                  # 项目说明文档


## 📃 License

For commercial use only by Avocadofoto.
