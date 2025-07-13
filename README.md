Overview
Dự án web xem dự báo thời tiết viết bằng React + TypeScript + SCSS.
Cho phép người dùng tìm kiếm thành phố, xem thời tiết hiện tại, đổi đơn, dự báo theo giờ và theo 21 ngày.

Interface

![Screenshot1](https://github.com/Kanyo77/tk-weather--app/blob/dbeadbc893b19dda4f56111e6ce926f26087062c/Screenshot1.png)

![Screenshot2](https://github.com/Kanyo77/tk-weather--app/blob/cf9b64b311241e5a0fb95bfd38efedba0d66a460/Screenshot2.png)

![Screenshot3](https://github.com/Kanyo77/tk-weather--app/blob/cf9b64b311241e5a0fb95bfd38efedba0d66a460/Screenshot3.png)

Features

- Tìm kiếm thành phố với gợi ý tự động
-  Hiển thị thời tiết hiện tại (nhiệt độ, độ ẩm, gió, UV,...)
-  Dự báo theo giờ (scroll ngang)
-  Dự báo 21 ngày (mock dữ liệu)
-  Chuyển đổi theme Light / Dark
-  Đổi đơn vị đo: Metric / Imperial / Auto
-  Lưu cài đặt người dùng bằng LocalStorage
-  Dữ liệu lấy từ file JSON giả lập API

Tech Stack

- React 19 – component và hook (`useState`, `useEffect`, `useContext`)
- Vite – công cụ build nhanh, hiện đại
- TypeScript – kiểm tra kiểu dữ liệu, code rõ ràng
- SCSS Modules – styling theo component
- Context API – quản lý state toàn cục
- Bootstrap Icons & React Icons – icon giao diện đẹp
- LocalStorage – lưu theme, đơn vị đo, thành phố đã chọn
- Mock JSON – thay thế API thật (tập trung luyện UI + logic)
- ESLint – kiểm tra quy chuẩn code
- Axios – sẵn sàng để tích hợp API thật

Installation
1) Sao chép từ github: git clone https://github.com/Kanyo77/tk-weather--app


2) Cài đặt thư viện: npm install 

3) Khởi chạy server dev: npm run dev
