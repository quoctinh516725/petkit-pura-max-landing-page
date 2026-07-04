# 🐱 Petkit Pura Max - Máy Dọn Vệ Sinh Mèo Thông Minh Tự Động
> Trang giới thiệu Landing Page cao cấp & Hệ thống Quản trị Thời gian thực phục vụ tư vấn sản phẩm thông minh.

Dự án này là một trang **Landing Page Scrollytelling kết hợp thương mại điện tử mini** giới thiệu thiết bị vệ sinh mèo thông minh **Petkit Pura Max 2**, tích hợp trợ lý ảo AI Chatbot tư vấn khách hàng và hệ thống Dashboard Admin cập nhật dữ liệu thời gian thực (Real-time) qua Socket.io.

---

## 🚀 Tính Năng Nổi Bật

### 1. Trải nghiệm Client & Landing Page (WOW Effect)
* **Giao diện Scrollytelling & Parallax:** Sử dụng **Framer Motion** để tạo hiệu ứng chuyển động mượt mà khi cuộn trang, mang lại cảm xúc thương hiệu cao cấp.
* **Mini E-Commerce (Thương mại điện tử nhỏ):**
  * **Giỏ hàng (Cart):** Thêm/bớt/xem giỏ hàng dạng Drawer tiện lợi.
  * **Danh sách yêu thích (Favorites):** Lưu trữ sản phẩm yêu thích của khách hàng.
  * **Đồng bộ hóa dữ liệu:** Giỏ hàng và sản phẩm yêu thích tự động đồng bộ hóa với `localStorage` để không mất dữ liệu khi làm mới trang.
* **Tích hợp Chatbot AI Tư Vấn:** Hộp thoại chat trực tuyến tích hợp API AI (Gemini/OpenAI) hỗ trợ tư vấn sản phẩm thông minh thông qua Serverless Functions bảo mật.
* **Form Đăng Ký Tư Vấn (Newsletter/Voucher):** Kiểm tra tính hợp lệ dữ liệu nhập (họ tên, SĐT) và lưu trữ trực tiếp vào cơ sở dữ liệu qua REST API.

### 2. Trang Quản Trị Admin Dashboard (Premium Light Theme & Real-time)
* **Giao diện sáng (Light Theme) cao cấp:** Thiết kế hiện đại, bố cục dạng lưới (grid layout) với độ tương phản cao, chuyên nghiệp.
* **Thống kê tổng quan (Stats Cards):** Hiển thị tổng số lượng đăng ký, tổng số mèo nuôi đăng ký, giá trị doanh thu tiềm năng từ giỏ hàng và giá trị giỏ hàng trung bình.
* **Tìm kiếm & Bộ lọc:** Tìm kiếm tức thời (real-time filtering) khách hàng bằng Tên hoặc Số điện thoại.
* **Cập nhật thời gian thực (Socket.io):**
  * Tự động đồng bộ và hiển thị thông tin đăng ký mới ngay lập tức mà không cần tải lại trang.
  * Hàng đăng ký mới sẽ nhấp nháy làm nổi bật (flash green highlight) trong 5 giây.
  * Hiển thị thông báo Toast nổi góc màn hình để quản trị viên dễ dàng nhận diện.
* **Hành động nhanh (Quick Actions):** Xem nhanh chi tiết giỏ hàng của từng khách hàng, tổng giá trị đơn hàng và nút **Gọi điện tư vấn ngay** liên kết nhanh.

---

## 🛠️ Công Nghệ Sử Dụng (Tech Stack)

### Frontend
* **Core:** React 18 + TypeScript (Strict mode) + Vite
* **Styling:** Tailwind CSS (Tối ưu hóa class tiện ích)
* **State Management:** Redux Toolkit (Quản lý giỏ hàng, yêu thích, sản phẩm đã xem)
* **Animations:** Framer Motion (Hardware-accelerated transitions)
* **Icons:** Lucide Icons

### Backend
* **Server Framework:** NodeJS + ExpressJS
* **Database & ORM:** PostgreSQL (Supabase) + Prisma ORM
* **Real-time Engine:** Socket.io (Hỗ trợ kết nối WebSocket hai chiều)

---

## ⚙️ Hướng Dẫn Cài Đặt & Chạy Cục Bộ (Local Installation)

### Yêu cầu hệ thống
* Node.js phiên bản 18 trở lên.
* PostgreSQL Database (hoặc tài khoản Supabase).

### Các bước thiết lập

1. **Khởi tạo mã nguồn:**
   ```bash
   git clone https://github.com/quoctinh516725/petkit-pura-max-landing-page.git
   cd petkit-pura-max-landing-page
   ```

2. **Cài đặt thư viện phía Frontend (Client):**
   ```bash
   npm install
   ```

3. **Cài đặt thư viện phía Backend (Server):**
   ```bash
   cd server
   npm install
   ```

4. **Thiết lập biến môi trường (`.env`):**
   Tạo tệp `.env` bên trong thư mục `/server` và thêm thông tin kết nối database:
   ```env
   DATABASE_URL="postgresql://username:password@host:port/database?schema=public"
   PORT=5000
   ```

5. **Chạy Migration Cơ sở dữ liệu (Prisma):**
   ```bash
   npx prisma migrate dev --name init
   npx prisma generate
   ```

6. **Chạy dự án:**
   * **Bật Frontend (chạy ở cổng 5173 mặc định):**
     ```bash
     # Tại thư mục gốc dự án
     npm run dev
     ```
   * **Bật Backend (chạy ở cổng 5000 mặc định):**
     ```bash
     # Tại thư mục /server
     npm run dev
     ```

Mở trình duyệt truy cập `http://localhost:5173` để xem Landing Page và `http://localhost:5173/admin` để truy cập trang quản trị.

---

## 🖥️ Trang Quản Trị (/admin)

Trang quản trị của dự án được tối ưu hóa cho công việc của nhân viên tư vấn khách hàng:
* **Đường dẫn truy cập:** `http://localhost:5173/admin` (sau khi khởi động server).
* **Cơ chế hoạt động:**
  * Khi khách hàng điền form đăng ký tư vấn tại Landing Page, dữ liệu sẽ được lưu vào cơ sở dữ liệu Supabase thông qua REST API.
  * Đồng thời, Socket.io phía Backend sẽ phát một tín hiệu đến client Admin đang kết nối.
  * Trang Admin nhận tín hiệu này, tự động tải dữ liệu mới lên đầu danh sách, hiển thị thông báo Toast nổi góc màn hình và nhấp nháy dòng mới màu xanh trong 5 giây để nhân viên phản hồi nhanh nhất.
* **Các tác vụ trên Dashboard:**
  * Xem nhanh 4 chỉ số thống kê quan trọng ở hàng trên cùng.
  * Tìm kiếm nhanh khách hàng theo tên và số điện thoại.
  * Click vào một khách hàng để xem chi tiết danh sách sản phẩm trong giỏ hàng và tổng đơn giá dự kiến của họ ở bảng bên phải.
  * Thực hiện cuộc gọi nhanh bằng cách click vào nút **Gọi điện tư vấn ngay** (hỗ trợ liên kết giao thức `tel:` trực tiếp trên trình duyệt hoặc điện thoại di động).

---

## 📁 Cấu Trúc Thư Mục Dự Án
```text
petkit-pura-max-landing-page/
├── server/                     # Mã nguồn Backend NodeJS Express
│   ├── prisma/                 # Schema & Migrations database của Prisma
│   ├── src/
│   │   ├── config/             # Cấu hình Database kết nối
│   │   ├── controllers/        # Xử lý các logic request/response API & Socket emit
│   │   ├── repositories/       # Tương tác truy vấn DB qua Prisma Client
│   │   ├── routes/             # Định tuyến API endpoint (/api/consult, /api/consultations)
│   │   └── services/           # Nghiệp vụ xử lý logic
│   └── server.js               # Điểm chạy khởi nguồn NodeJS HTTP & Socket.io Server
│
├── src/                        # Mã nguồn Frontend React
│   ├── assets/                 # Font chữ, hình ảnh, tài nguyên tĩnh
│   ├── components/
│   │   ├── ui/                 # Các UI component tái sử dụng (Button, Toast, Card,...)
│   │   └── sections/           # Các phân đoạn chính (Hero, Features, ConsultForm, AdminDashboard,...)
│   ├── store/                  # Quản lý State bằng Redux Toolkit
│   ├── App.tsx                 # Routing và layout trang
│   └── main.tsx                # Điểm khởi chạy ứng dụng React
├── vite.config.ts              # Cấu hình Vite & Proxy chuyển tiếp API/Websocket
└── README.md                   # Báo cáo dự án
```

---

## 📈 Tối Ưu Hóa & SEO Technical
* **Lazy Loading:** Áp dụng `React.lazy` và `Suspense` cho toàn bộ các phần bên dưới nếp gấp trang (features, specs, chatbot, newsletter form) giúp tải trang ban đầu (FCP/LCP) cực nhanh.
* **SEO Metadata:** Cấu hình đầy đủ thẻ `<title>`, `<meta name="description">` và các thẻ Open Graph để website hiển thị đẹp mắt khi chia sẻ trên mạng xã hội.
* **Google PageSpeed Insights:** Điểm số tối ưu hóa trên thiết bị di động đạt >= **85/100** thông qua việc nén ảnh sang định dạng `.webp` và tối ưu cấu trúc DOM.
