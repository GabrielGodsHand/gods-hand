"use client";
import dynamic from "next/dynamic";

const GodsHandTestPage = dynamic(() => import("@/components/Testing"), {
  ssr: false,
  loading: () => <div>Loading...</div>,
});

export default function TestingPage() {
  return <GodsHandTestPage />;
}
