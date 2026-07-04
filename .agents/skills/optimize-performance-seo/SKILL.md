---
name: optimize-performance-seo
description: Tối ưu hiệu năng ứng dụng (lazy load, nén ảnh, giảm kích thước bundle) và cấu hình thẻ SEO/Open Graph cho Landing Page.
---

# Hướng dẫn Tối ưu Performance và SEO cho Petkit Pura Max

Sử dụng kỹ năng này trước khi deploy hoặc khi xây dựng các thẻ SEO/Meta, tối ưu hóa các tệp tài nguyên (ảnh, fonts, scripts).

## Quy trình Thực hiện

### 1. Triển khai SEO Component
Tạo một component SEO để inject các thẻ meta động vào thẻ `<head>` của trang:
```tsx
import React from 'react';
import { Helmet } from 'react-helmet-async'; // Hoặc sử dụng thẻ meta native trong Next.js

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  image = '/assets/og-image.jpg',
  url = window.location.href,
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
    </Helmet>
  );
};
```

### 2. Tối ưu Hiệu năng (PageSpeed Mobile >= 85)
*   **Lazy Loading Components**:
    ```tsx
    import React, { lazy, Suspense } from 'react';
    
    const SpecSection = lazy(() => import('./components/sections/SpecSection'));
    const Chatbot = lazy(() => import('./components/sections/Chatbot'));

    function App() {
      return (
        <div>
          <HeroSection />
          <Suspense fallback={<div className="h-64 bg-slate-900 animate-pulse" />}>
            <SpecSection />
            <Chatbot />
          </Suspense>
        </div>
      );
    }
    ```
*   **Tối ưu Hình ảnh**:
    - Chuyển đổi định dạng ảnh sang WebP/AVIF.
    - Cấu hình thẻ `<img loading="lazy" width="..." height="..." />` cho các hình ảnh dưới màn hình đầu tiên (below-the-fold).
    - Sử dụng thuộc tính `fetchpriority="high"` cho hình ảnh nổi bật nhất trên Hero section để cải thiện chỉ số LCP.
