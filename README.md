# 🌤️ Weather App

Ứng dụng web xem dự báo thời tiết được xây dựng bằng **React + TypeScript + SCSS**.  
Cho phép người dùng tìm kiếm thành phố, xem thời tiết hiện tại, đổi đơn vị đo, chuyển theme, dự báo theo giờ và 21 ngày.

---

## 📸 Interface

![Screenshot1](https://github.com/Kanyo77/tk-weather--app/blob/dbeadbc893b19dda4f56111e6ce926f26087062c/Screenshot1.png)

## 🚀 Features

- 🔍 Tìm kiếm thành phố với gợi ý tự động
- 🌡️ Hiển thị thời tiết hiện tại (nhiệt độ, độ ẩm, gió, UV,...)
- 🕒 Dự báo theo giờ (scroll ngang)
- 📅 Dự báo 21 ngày (mock dữ liệu)
- 🎨 Chuyển đổi giao diện Light / Dark
- 📏 Đổi đơn vị đo: Metric / Imperial / Auto
- 💾 Lưu cài đặt người dùng bằng LocalStorage
- 📂 Dữ liệu lấy từ file JSON mô phỏng API

![Screenshot2](https://github.com/Kanyo77/tk-weather--app/blob/cf9b64b311241e5a0fb95bfd38efedba0d66a460/Screenshot2.png)

![Screenshot3](https://github.com/Kanyo77/tk-weather--app/blob/cf9b64b311241e5a0fb95bfd38efedba0d66a460/Screenshot3.png)

## 🛠️ Tech Stack

- **React 19** – component và hook (`useState`, `useEffect`, `useContext`)
- **Vite** – công cụ build nhanh, hiện đại
- **TypeScript** – kiểm tra kiểu dữ liệu, code rõ ràng
- **SCSS Modules** – styling theo component
- **Context API** – quản lý state toàn cục
- **Bootstrap Icons** & **React Icons** – icon giao diện đẹp
- **LocalStorage** – lưu theme, đơn vị đo, thành phố đã chọn
- **Mock JSON** – giả lập API (không cần kết nối mạng)
- **ESLint** – kiểm tra quy chuẩn code
- **Axios** – sẵn sàng tích hợp API thật trong tương lai

---

## ⚙️ Installation

```bash
# 1. Sao chép dự án từ GitHub
git clone https://github.com/Kanyo77/tk-weather--app
cd tk-weather--app

# 2. Cài đặt thư viện
npm install

# 3. Khởi chạy server phát triển
npm run dev
