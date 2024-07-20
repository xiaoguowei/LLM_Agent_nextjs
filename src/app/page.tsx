// Page component using next/navigation
"use client";

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    // 当组件挂载后，直接跳转到登录页面
    router.push('/auth/signin');
  }, []); // 空依赖数组意味着这个effect只在组件挂载时运行一次

  // 由于页面会立即重定向，下面的返回部分实际上不会渲染
  return null;
}