"use client";

export default function ClientWrapper({ children }) {
  return <div suppressHydrationWarning>{children}</div>;
} 