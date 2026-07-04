# Petkit Pura Max Landing Page

## Problem Statement

Những người nuôi mèo bận rộn sống tại các căn hộ chung cư đô thị lớn (như TP.HCM, Hà Nội) đang gặp khó khăn và mệt mỏi lớn với việc dọn dẹp vệ sinh cho mèo thủ công hàng ngày. Họ phải chịu đựng mùi hôi ám phòng, cát vương vãi mất vệ sinh, và luôn cảm thấy lo lắng, bất an cho thú cưng khi phải đi công tác hoặc du lịch xa nhà từ 3-5 ngày mà không có ai dọn dẹp khay cát.

## Evidence

- Khách hàng mục tiêu phản ánh mùi hôi của chậu cát xộc thẳng vào mũi khi đi làm về mở cửa phòng.
- Nhiều chủ nuôi mèo phải từ chối hoặc lo lắng không yên trong các chuyến công tác ngắn ngày vì không tìm được dịch vụ chăm sóc hoặc người dọn khay cát tin cậy.
- Các giải pháp khay cát thông thường không thể tự động hóa việc dọn và ngăn mùi chủ động, còn các máy dọn giá rẻ thế hệ cũ lại thiếu hệ thống cảm biến an toàn gây lo sợ kẹt/kẹp mèo.

## Proposed Solution

Xây dựng một trang Landing Page đơn trang (Single Page) giới thiệu thiết bị vệ sinh mèo thông minh **Petkit Pura Max** tập trung tối đa vào tối ưu hóa chuyển đổi (Conversion Rate). Giao diện trang web được thiết kế theo phong cách hiện đại (Sleek Dark Mode) với hiệu ứng cuộn trang kể chuyện (Scrollytelling) và Parallax sống động để truyền tải trực quan 3 giá trị cốt lõi của máy: Tự động dọn dẹp, Hệ thống xịt khử mùi chủ động Pura Air, và Hệ thống 12 cảm biến an toàn xSecure. Đồng thời, trang web tích hợp Form đăng ký nhận ưu đãi/tư vấn và cửa sổ AI Chatbot tự động giải đáp thắc mắc của khách hàng 24/7 để thúc đẩy khách hàng hành động nhanh chóng.

## Key Hypothesis

Chúng tôi tin rằng một Landing Page tập trung làm nổi bật tính năng tự động dọn dẹp, khử mùi tuyệt đối và hệ thống 12 cảm biến an toàn kèm ưu đãi tặng kèm hấp dẫn sẽ giải quyết nỗi sợ mùi hôi, sự bận rộn và tâm lý lo lắng cho an toàn của thú cưng cho những người nuôi mèo sống tại căn hộ chung cư đô thị. Chúng tôi biết mình đúng khi tỷ lệ chuyển đổi (Conversion Rate) lượt điền form đăng ký tư vấn đạt trên 3.5% trên tổng số lượt truy cập từ quảng cáo.

## What We're NOT Building

- **Cổng thanh toán trực tuyến (VNPAY, Momo, Thẻ tín dụng)** - Vì mục tiêu MVP chỉ cần thu thập thông tin khách hàng tiềm năng (Leads) để sales gọi điện chốt đơn trực tiếp, giúp đơn giản hóa hệ thống và đẩy nhanh tiến độ bàn giao.
- **Hệ thống tài khoản người dùng** - Khách hàng không cần đăng ký tài khoản để mua hàng hay theo dõi đơn hàng trên Landing Page.
- **Hệ thống Admin Dashboard quản lý Lead phức tạp** - Để tiết kiệm tài nguyên và thời gian, dữ liệu từ Form sẽ được đồng bộ trực tiếp qua Webhook về Google Sheets để sales xử lý nhanh.

## Success Metrics

| Metric | Target | How Measured |
|--------|--------|--------------|
| **Conversion Rate (Tỷ lệ chuyển đổi)** | >= 3.5% | Lượt điền Form đăng ký tư vấn thành công trên tổng số lượt truy cập trang |
| **Bounce Rate (Tỷ lệ thoát trang)** | < 45% | Đo lường thời gian lưu lại trang và tương tác qua Google Analytics |
| **Google PageSpeed Insights Score** | >= 85 (Mobile) / >= 90 (Desktop) | Sử dụng công cụ Google PageSpeed Insights để chấm điểm |
| **Chatbot Interaction Rate** | >= 15% | Tỷ lệ khách truy cập bấm mở và tương tác trò chuyện với AI Chatbot |

## Open Questions

- [ ] **Hạ tầng lưu trữ dữ liệu Form**: Dữ liệu từ Form đăng ký sẽ đồng bộ qua Webhook trực tiếp về Google Sheets của Sales hay cần kết nối thẳng với một hệ thống CRM chuyên biệt?
- [ ] **Nguồn tư liệu Media**: Video và hình ảnh thực tế của máy dọn cát sẽ dùng tư liệu sẵn có từ hãng (Petkit Global) hay phía vận hành sẽ tự sản xuất hình ảnh việt hóa tại cửa hàng để tăng độ tin cậy?

---

## Users & Context

**Primary User**
- **Who**: Dân văn phòng, người làm kinh doanh tự do hoặc sáng tạo nội dung có mức thu nhập khá, nuôi mèo và sống tại căn hộ chung cư kín ở các đô thị lớn.
- **Current behavior**: Xúc cát thủ công mỗi ngày 1-2 lần bằng tay, sử dụng bình xịt khử mùi phòng nhưng vẫn bị ám mùi hôi, hoặc phải nhờ người thân/bạn bè qua dọn hộ mỗi khi đi xa.
- **Trigger**: Cảm giác ngột ngạt vì mùi hôi của chậu cát xộc lên khi mở cửa phòng sau ngày làm việc dài mệt mỏi, hoặc chuẩn bị có chuyến đi công tác đột xuất 3-5 ngày.
- **Success state**: Sở hữu một thiết bị tự động lo toàn bộ khâu dọn dẹp chất thải và khử mùi trong suốt cả tuần mà không cần chạm tay, đảm bảo an toàn tuyệt đối cho mèo cưng.

**Job to Be Done**
Khi tôi phải đi làm cả ngày hoặc đi công tác xa nhà vài ngày, tôi muốn một thiết bị tự động dọn dẹp và khử mùi chất thải của mèo một cách an toàn, để tôi có thể an tâm rời nhà mà không lo phòng bị ám mùi hôi hay mèo thiếu chỗ đi vệ sinh sạch sẽ.

**Non-Users**
- Người nuôi mèo ở vùng nông thôn hoặc nhà đất có sân vườn rộng (mèo đi vệ sinh tự do bên ngoài không cần khay cát).
- Học sinh, sinh viên chưa tự chủ tài chính.
- Khách hàng nhạy cảm về giá, chỉ quen dùng khay cát nhựa truyền thống giá rẻ và không sẵn sàng chi trả vài triệu đồng cho một thiết bị công nghệ chăm sóc thú cưng.

---

## Solution Detail

### Core Capabilities (MoSCoW)

| Priority | Capability | Rationale |
|----------|------------|-----------|
| **Must** | **Giao diện Responsive & Thiết kế Sleek Dark Mode** | Tạo ấn tượng công nghệ cao cấp, hiển thị hoàn hảo trên Mobile và Desktop |
| **Must** | **Section So sánh Trực quan (Slider/So sánh cột)** | Trực quan hóa nỗi đau giữa dọn thủ công (bẩn, hôi) và tự động (sạch, rảnh tay) |
| **Must** | **Khối nội dung "An toàn tuyệt đối xSecure"** | Đập tan nỗi sợ mèo bị kẹt máy thông qua hình ảnh minh họa hệ thống 12 cảm biến |
| **Must** | **Form đăng ký nhận ưu đãi & tư vấn** | Thu thập thông tin khách hàng (Họ tên, SĐT, Nhu cầu) và tự động đẩy dữ liệu đi |
| **Must** | **Mini E-commerce (Xem giỏ hàng, danh sách yêu thích, đã xem)** | Cho phép người dùng trải nghiệm mua sắm mô phỏng (lưu sản phẩm, quản lý giỏ hàng tạm thời) tăng tương tác |
| **Should**| **AI Chatbot tư vấn trực tuyến (Gemini/OpenAI Proxy)** | Giải đáp thắc mắc của khách về kích thước, loại cát, cách kết nối app 24/7 |
| **Should**| **Hiệu ứng Scrollytelling & Parallax cuộn trang** | Dẫn dắt người dùng khám phá các bộ phận bên trong máy một cách trực quan, mượt mà |
| **Could** | **Lucky Wheel (Vòng quay may mắn)** | Tăng tương tác nhận voucher giảm giá phụ kiện đi kèm |
| **Could** | **Bảng tính toán số tiền cát tiết kiệm** | Tính toán tự động số lượng cát và thời gian tiết kiệm dựa trên số lượng mèo |
| **Won't**  | **Cổng thanh toán & Hệ thống tài khoản** | Tránh phức tạp hóa hệ thống trong phiên bản MVP đầu tiên |

### MVP Scope

Trang Landing page đơn trang (Single Page React) gồm các section:
1.  **Hero Section**: Slogan cuốn hút, hình ảnh sản phẩm nổi bật kèm nút bấm CTA "Nhận Ưu Đãi Ngay".
2.  **Section Pain-point (So sánh)**: So sánh trực quan khay cát thường và Pura Max.
3.  **Section Core Features**: Trình bày 3 tính năng (Dọn tự động, Khử mùi Pura Air, Theo dõi sức khỏe qua App).
4.  **Section Safety (An toàn xSecure)**: Trình bày cơ chế 12 cảm biến thông minh bảo vệ mèo.
5.  **Mini Cart & Favorites Side Panel**: Trình bày danh sách sản phẩm yêu thích và giỏ hàng tạm thời (sử dụng Redux Toolkit).
6.  **Section Specs (Thông số kỹ thuật)**: Bảng thông số chi tiết (kích thước, dung tích, loại cát phù hợp).
7.  **Form Newsletter & Đăng ký tư vấn**: Form nhận thông tin đăng ký nhận ưu đãi.
8.  **AI Chatbot Window**: Nằm góc phải màn hình, hỗ trợ tư vấn tự động.

---

## Technical Approach

**Feasibility**: **HIGH**

**Architecture Notes**
- **Framework**: Vite + React + TypeScript tạo build tĩnh siêu nhẹ.
- **Styling**: Tailwind CSS hỗ trợ phát triển giao diện tiện lợi và nhất quán.
- **State Management**: Redux Toolkit xử lý giỏ hàng và danh sách sản phẩm yêu thích của khách hàng, lưu trữ đồng bộ trực tiếp với `localStorage` để giữ nguyên trạng thái khi reload.
- **Animations**: Sử dụng Framer Motion cho các hiệu ứng trượt, Parallax cuộn trang và hiển thị mượt mà.
- **Chatbot Backend**: API Route `/api/chat` đóng vai trò proxy bảo mật để gọi tới Gemini/OpenAI API mà không lộ Key.

**Technical Risks**

| Risk | Likelihood | Mitigation |
|------|------------|------------|
| **Giảm điểm PageSpeed Insights** do file media lớn và thư viện animation | Medium | Sử dụng định dạng WebP/AVIF cho ảnh, lazy loading component dưới chân trang, và trì hoãn load script Chatbot cho đến khi người dùng tương tác. |
| **Lộ API Key Chatbot** | Low | Đưa logic gọi API vào Serverless Function ở backend, hoàn toàn không gọi trực tiếp từ client. |
| **Lỗi UI vỡ khung trên thiết bị di động** | Low | Sử dụng phương pháp thiết kế Mobile-first với hệ thống breakpoint của Tailwind CSS. |

---

## Implementation Phases

| # | Phase | Description | Status | Parallel | Depends | PRP Plan |
|---|-------|-------------|--------|----------|---------|----------|
| 1 | **Scaffold & Setup** | Khởi tạo dự án React Vite TS, cài đặt Tailwind CSS, Framer Motion, Redux Toolkit và cấu hình cơ bản | pending | - | - | - |
| 2 | **Core UI Components** | Xây dựng các UI dùng chung (Buttons, Inputs, Cards) và Layout chính | pending | - | 1 | - |
| 3 | **Interactive Sections** | Xây dựng các Section cốt lõi: Hero, So sánh, Tính năng, Hệ thống 12 Cảm biến, Specs | pending | with 4 | 2 | - |
| 4 | **Redux Store & Cart** | Cấu hình Redux store, slices (cart, favorites, viewed) và tích hợp LocalStorage | pending | with 3 | 2 | - |
| 5 | **AI Chatbot & Form Backend** | Tích hợp Form đăng ký tư vấn (đẩy dữ liệu) và dựng Serverless API Route cho Chatbot | pending | - | 3, 4 | - |
| 6 | **Optimize & Deploy** | Tối ưu SEO, kiểm tra PageSpeed Mobile >= 85, sửa lỗi và deploy lên Vercel/Netlify | pending | - | 5 | - |

---

## Decisions Log

| Decision | Choice | Alternatives | Rationale |
|----------|--------|--------------|-----------|
| **Styling Library** | Tailwind CSS | Vanilla CSS / CSS Modules | Phù hợp với nhu cầu thiết kế giao diện nhanh chóng, dễ bảo trì và có sẵn hệ thống tiện ích phong phú. |
| **State Management** | Redux Toolkit | React Context API | Phù hợp với yêu cầu nghiệp vụ cụ thể của đề bài là quản lý Giỏ hàng, Yêu thích và Đã xem một cách quy chuẩn. |
| **Chatbot Backend** | Vercel/Netlify Serverless Function | Direct Client API Calls | Bảo vệ an toàn tuyệt đối cho API Key của AI Service khỏi bị đánh cắp ở Client-side. |

---

## Research Summary

**Market Context**
- Khách hàng có xu hướng ưu tiên cao cho yếu tố an toàn của mèo (do tâm lý sợ máy giá rẻ kẹt mèo) và khả năng xử lý mùi hôi triệt để trong phòng kín chung cư. Do đó, Landing Page phải tập trung nhấn mạnh hệ thống cảm biến và xịt mùi Pura Air.

**Technical Context**
- Sự kết hợp giữa Vite và Tailwind mang lại tốc độ build tối ưu. Cần chú ý lazy load component chatbot và các thư viện nặng để đảm bảo điểm PageSpeed Mobile đạt chuẩn >= 85 điểm.

---

*Generated: 2026-07-04*
*Status: DRAFT - needs validation*
