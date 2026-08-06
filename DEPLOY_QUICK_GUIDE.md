# 🚀 HƯỚNG DẪN DEPLOY NHANH LÊN GITHUB PAGES

## 1️⃣ Tạo Repository Trên GitHub

**Bước 1:** Đăng nhập GitHub → Tạo repository mới
- Tên: `portfolio` hoặc `CV_Fontend_ToVanMinhNhat`
- Chọn **Public**
- Không cần initialize with README

---

## 2️⃣ Mở Terminal Tại Thư Mục Của Bạn

**Windows:**
```bash
# Tại thư mục CV_Fontend_ToVanMinhNhat, bấm Shift + Chuột phải → Mở PowerShell
```

**macOS/Linux:**
```bash
cd /path/to/CV_Fontend_ToVanMinhNhat
```

---

## 3️⃣ Chạy Các Lệnh Này

```bash
# Khởi tạo Git
git init

# Thêm tất cả file
git add .

# Commit lần đầu
git commit -m "Initial commit"

# Thêm remote (thay YOUR_USERNAME và REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git

# Đổi tên branch sang main
git branch -M main

# Push lên GitHub
git push -u origin main
```

---

## 4️⃣ Bật GitHub Pages

1. Vào **Settings** của repository
2. Chọn **Pages** ở menu trái
3. **Source:** Chọn `Deploy from a branch`
4. **Branch:** Chọn `main` → Click **Save**

✅ **Xong!** Website sẽ có sẵn tại:
```
https://YOUR_USERNAME.github.io/REPO_NAME
```

---

## 📝 Lần Sau Muốn Update Code

```bash
# Chỉnh sửa file...

git add .
git commit -m "Cập nhật nội dung"
git push origin main
```

**GitHub Pages sẽ tự động update trong 1-2 phút!**

---

## ✨ Chỉnh Sửa Nội Dung

### Landing Page (index.html)
- Thay đổi tên, mô tả, ảnh, kỹ năng

### CV (cv/index.html)
- Nhấn "Bật chỉnh sửa trực tiếp" để sửa trên trình duyệt
- Nhấn "In / Tải PDF" để xuất PDF

---

**Cần giúp? Xem chi tiết trong README.md** 📖
