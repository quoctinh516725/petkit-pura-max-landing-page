# QUY TẮC CỐT LÕI (PROJECT RULES) - PETKIT PURA MAX

Tệp này định nghĩa các tiêu chuẩn phát triển dự án Landing Page giới thiệu thiết bị vệ sinh mèo thông minh **Petkit Pura Max**. Mọi tác vụ tạo mới hoặc chỉnh sửa mã nguồn của AI đều phải tuân thủ nghiêm ngặt các quy tắc này.

---

## 1. Công nghệ chính (Core Tech Stack)
*   **Frontend**: React (Vite) + TypeScript (strict mode)
*   **Styling**: Tailwind CSS
*   **State Management**: Redux Toolkit (quản lý giỏ hàng, sản phẩm yêu thích, sản phẩm đã xem)
*   **Animation**: Framer Motion (hiệu ứng cuộn trang Scrollytelling, Parallax, và Hover Micro-interactions)
*   **Chatbot Backend**: Vercel/Netlify Serverless Functions (gọi API Gemini/OpenAI bảo mật)

---

## 2. Tiêu chuẩn Mã nguồn (Coding Standards)

### 2.1. Cấu trúc thư mục (Directory Structure)
Mã nguồn phải được tổ chức khoa học như sau:
```text
src/
├── assets/             # Hình ảnh, icons, logo sản phẩm
├── components/         # Các UI component dùng chung và các Section (Hero, Features, Specs, Form, Chatbot)
│   ├── ui/             # Các component cơ bản (Button, Input, Card)
│   └── sections/       # Các section chính trên Landing Page
├── store/              # Redux store, slices, và hooks
├── hooks/              # Custom hooks tiện ích (useScroll, useWindowSize)
├── utils/              # Các hàm helper, logic định dạng
├── api/                # Các hàm gọi API client
├── App.tsx             # Component chính quản lý layout và luồng chính
└── main.tsx            # Điểm khởi chạy ứng dụng
```

### 2.2. Quy tắc Component & TypeScript
*   **Kiểu dữ liệu**: Luôn khai báo kiểu dữ liệu tường minh (Interface/Type) cho Props và State. Tuyệt đối **không** dùng kiểu `any`.
*   **Functional Components**: Sử dụng cú pháp Arrow Function (`const Component: React.FC<Props> = (...) => {}`).
*   **Tailwind CSS**:
    *   Sắp xếp các class Tailwind theo thứ tự tiêu chuẩn (Layout -> Box sizing -> Spacing -> Typography -> Background -> Effect -> Transition).
    *   Sử dụng biến màu sắc nhất quán để dễ chuyển đổi giao diện (Dark Mode).
    *   Tránh lạm dụng inline style trừ khi cần tính toán động (ví dụ: Parallax offset).

---

## 3. Quản lý trạng thái với Redux Toolkit
*   Tách biệt các slice logic rõ ràng (ví dụ: `cartSlice.ts`, `favoritesSlice.ts`, `viewedSlice.ts`).
*   Luôn sử dụng `useAppDispatch` và `useAppSelector` đã được định nghĩa kiểu thay cho `useDispatch` và `useSelector` mặc định.
*   **Đồng bộ dữ liệu (Persistence)**: Lưu trữ các trạng thái giỏ hàng và danh sách yêu thích vào `localStorage` thông qua middleware tự viết hoặc redux-persist để dữ liệu không bị mất khi reload trang.

---

## 4. Tối ưu hóa hiệu năng & Điểm PageSpeed (Mobile >= 85)
*   **Hình ảnh**: Sử dụng định dạng ảnh hiện đại (`.webp`, `.avif`). Luôn khai báo thuộc tính `width`, `height` và thuộc tính `loading="lazy"` cho các ảnh không nằm trong khung nhìn đầu tiên (Hero Section).
*   **Lazy Loading**: Sử dụng `React.lazy` và `Suspense` đối với các component nặng hoặc các section nằm dưới chân trang (như Newsletter Form, Specs Table, Chatbot Window) để tối ưu thời gian tải trang ban đầu (LCP, FCP).
*   **Animation**:
    *   Chỉ animate các thuộc tính kích hoạt GPU (transform: `translate3d`, `scale`, `rotate` và `opacity`).
    *   Tránh animate các thuộc tính gây reflow (width, height, top, left, margin).

---

## 5. Tối ưu SEO Technical
*   Mỗi trang hoặc thẻ cha cao nhất phải chứa đầy đủ thông tin metadata thông qua các thẻ tiêu chuẩn:
    *   `<title>`: Có định dạng thu hút, ví dụ: "Petkit Pura Max - Máy Dọn Vệ Sinh Mèo Thông Minh Tự Động".
    *   `<meta name="description">`: Mô tả ngắn gọn dưới 160 kỹ tự, chứa các từ khóa chính.
    *   **Open Graph**: Cung cấp đầy đủ `og:title`, `og:description`, `og:image`, `og:type` để hiển thị chuyên nghiệp khi chia sẻ liên kết trên Facebook, Zalo, Telegram.
*   Tuân thủ cấu trúc phân cấp tiêu đề HTML5 (`h1` duy nhất cho Hero Title, `h2` cho các section lớn, `h3` cho các tính năng chi tiết).

---

## 6. Bảo mật & Tích hợp API Chatbot
*   **Bảo mật Key**: Tuyệt đối không hardcode API Key của Gemini/OpenAI trong mã nguồn frontend.
*   **Proxy API**: Chatbot phải gửi tin nhắn thông qua endpoint `/api/chat` (Serverless Function). Endpoint này sẽ chịu trách nhiệm giao tiếp với nhà cung cấp AI bằng API Key được đọc từ biến môi trường (`process.env` hoặc `import.meta.env` trên môi trường deploy).

---

## 7. Quản lý mã nguồn (Git & GitHub)
*   **Quản lý chi nhánh (Branching)**:
    *   Duy trì hai nhánh chính là `main` (nhánh production ổn định) và `development` (nhánh phát triển chính).
    *   Các tính năng mới cần phát triển trên nhánh feature nhánh phụ được tách từ `development` (ví dụ: `feature/chatbot`, `feature/cart`), sau đó tạo Pull Request (PR) để merge lại vào `development`.
*   **Quy chuẩn Commit Message**:
    *   Commit message phải rõ ràng, súc tích, mô tả đúng nội dung thay đổi. Khuyến khích sử dụng chuẩn Conventional Commits (ví dụ: `feat:`, `fix:`, `docs:`, `style:`, `refactor:`, `perf:`).

