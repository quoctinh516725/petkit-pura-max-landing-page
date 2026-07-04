---
name: create-react-component
description: Tạo một React functional component mới bằng TypeScript, sử dụng Tailwind CSS và Framer Motion.
---

# Hướng dẫn tạo React Component cho Petkit Pura Max

Sử dụng kỹ năng này bất cứ khi nào cần tạo một component mới (UI component hoặc Section component).

## Quy trình Thực hiện

### 1. Tạo file Component
Tạo file tại đường dẫn thích hợp:
- UI components: `src/components/ui/<ComponentName>.tsx`
- Section components: `src/components/sections/<SectionName>.tsx`

### 2. Cấu trúc Code Template
Mọi component phải sử dụng cấu trúc TypeScript strict, định nghĩa Props interface và xuất ra tường minh.

```tsx
import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

export interface ComponentNameProps extends HTMLMotionProps<'div'> {
  title?: string;
  className?: string;
}

export const ComponentName: React.FC<ComponentNameProps> = ({
  title,
  className = '',
  ...props
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`relative w-full ${className}`}
      {...props}
    >
      {title && (
        <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
      )}
      {/* Component content here */}
    </motion.div>
  );
};
```

## Lưu ý Quan trọng
1. **Responsive**: Đảm bảo component thích ứng tốt trên mobile (`sm:`, `md:`, `lg:`).
2. **Animation**: Luôn sử dụng `framer-motion` cho các phần tử tương tác hoặc các section xuất hiện khi cuộn trang (viewport animations).
3. **Accessibility**: Sử dụng thẻ ngữ nghĩa (`section`, `article`, `header`, `button`, `input` đi kèm labels) và thuộc tính `aria-*` nếu cần.
