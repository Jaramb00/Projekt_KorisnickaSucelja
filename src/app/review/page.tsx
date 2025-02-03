import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Review",
};
export default function BlogPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-10">
      <h1 className="text-6xl font-extrabold tracking-tight">Review</h1>
    </main>
  );
}