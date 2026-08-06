# Tô Văn Minh Nhật - Portfolio & CV Website

Website cá nhân chuyên nghiệp của Tô Văn Minh Nhật - Front-end Developer, được xây dựng bằng **ReactJS** + **Node.js** + **Tailwind CSS**.

## 📁 Cấu Trúc Thư Mục

```
CV_Fontend_ToVanMinhNhat/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx            # Navigation component
│   │   ├── Hero.jsx              # Hero section
│   │   ├── About.jsx             # About section
│   │   ├── Projects.jsx          # Projects section
│   │   ├── Skills.jsx            # Skills section
│   │   ├── Contact.jsx           # Contact section
│   │   └── Footer.jsx            # Footer component
│   ├── App.jsx                   # Main App component
│   ├── main.jsx                  # React entry point
│   └── index.css                 # Global styles
├── cv/
│   └── index.html               # CV interactive (HTML + CSS)
├── index.html                   # Vite HTML template
├── package.json                 # Dependencies & scripts
├── vite.config.js               # Vite configuration
├── tailwind.config.js           # Tailwind CSS configuration
├── postcss.config.js            # PostCSS configuration
├── server.js                    # Node.js production server
└── README.md                    # Documentation
```

## 🎯 Công Nghệ Sử Dụng

- **Frontend:** ReactJS 18 + Vite
- **Styling:** Tailwind CSS 3
- **Backend:** Node.js + Express
- **Build Tool:** Vite
- **Package Manager:** npm

## 🚀 Cài Đặt & Chạy Locally

### 1. Cài Đặt Dependencies

```bash
npm install
```

### 2. Chạy Development Server

```bash
npm run dev
```

Ứng dụng sẽ tự động mở tại **http://localhost:3000**

### 3. Build Production

```bash
npm run build
```

### 4. Chạy Production Server

```bash
npm run serve
```

## 📝 Scripts Có Sẵn

- `npm run dev` - Chạy development server
- `npm run build` - Build production
- `npm run preview` - Preview build locally
- `npm run serve` - Build và chạy server

# Thêm tất cả file vào staging area
git add .

# Commit lần đầu
git commit -m "Initial commit: Portfolio & CV website"

# Thêm remote repository (thay YOUR_USERNAME và REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git

# Push code lên GitHub
git branch -M main
git push -u origin main
```

**Ví dụ:** Nếu username là `Dieter9905` và repo tên là `portfolio`:
```bash
git remote add origin https://github.com/Dieter9905/portfolio.git
git push -u origin main
```

### Bước 3: Kích Hoạt GitHub Pages

1. Vào GitHub → Repository của bạn
2. Chọn tab **Settings**
3. Chọn **Pages** ở menu bên trái
4. Phần **Build and deployment**:
   - **Source:** Chọn **Deploy from a branch**
   - **Branch:** Chọn **main** (hoặc main/)
   - Click **Save**

### Bước 4: Xác Nhận Deploy

Sau 1-2 phút:
- GitHub Pages sẽ hiển thị URL của trang web
- Thường là: `https://YOUR_USERNAME.github.io/REPO_NAME`
- **Ví dụ:** `https://Dieter9905.github.io/portfolio`

## 📝 Lệnh Git Thường Dùng

### Cập nhật code đã chỉnh sửa:

```bash
# Xem trạng thái thay đổi
git status

# Thêm những file đã thay đổi
git add .

# Commit với message
git commit -m "Cập nhật nội dung CV"

# Push lên GitHub
git push origin main
```

### Xem lịch sử commit:

```bash
git log --oneline
```

## 🔧 Chỉnh Sửa Nội Dung

### Tùy chỉnh Landing Page:

Mở `index.html` và chỉnh sửa:

```html
<!-- Thay đổi tên, mô tả -->
<h1>Tô Văn Minh Nhật</h1>
<p>Front-end Developer</p>

<!-- Thay đổi thông tin liên hệ -->
<a href="tel:0798141377">0798141377</a>
<a href="mailto:minhnhat13246@gmail.com">minhnhat13246@gmail.com</a>

<!-- Thay đổi GitHub, LinkedIn -->
<a href="https://github.com/Dieter9905">GitHub</a>
<a href="https://www.linkedin.com/in/YOUR_PROFILE">LinkedIn</a>
```

### Tùy chỉnh CV:

Mở `cv/index.html` → Ở landing page nhấn nút **"Bật chỉnh sửa trực tiếp"** để sửa trực tiếp trên trình duyệt.

## 📱 Responsive Design

Website đã được tối ưu cho:
- 📱 Mobile (< 640px)
- 📱 Tablet (640px - 1024px)
- 💻 Desktop (> 1024px)

## 🎨 Công Nghệ Sử Dụng

- **HTML5** - Markup
- **Tailwind CSS** - Styling
- **JavaScript** - Interactivity
- **Font Awesome** - Icons
- **Google Fonts** - Typography

## 🌐 Domain Custom (Optional)

Nếu bạn muốn dùng domain riêng thay vì GitHub Pages URL:

1. Mua domain từ Namecheap, GoDaddy, v.v...
2. Vào **Settings → Pages**
3. Mục **Custom domain**, nhập domain của bạn
4. Cấu hình DNS từ nhà cung cấp domain

## 📞 Liên Hệ

- **Phone:** 0798141377
- **Email:** minhnhat13246@gmail.com
- **GitHub:** github.com/Dieter9905
- **Location:** TP. Hồ Chí Minh, Việt Nam

---

**Chúc mừng! Website của bạn đã sẵn sàng deploy trên GitHub Pages!** 🎉
