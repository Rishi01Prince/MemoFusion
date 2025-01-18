import { Metadata } from "next";
import Link from 'next/link'

import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  title: "MemoFusion",
  description: "MemoFusion - Collaborate seamlessly",
};

export default function Home() {
  
  return (
    <DefaultLayout>
      <div className="text-center p-4">
        <h1 className="text-2xl font-bold mb-4">Welcome to MemoFusion</h1>
        <Link href="/workspace">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Go to the Workspace
        </button>
        </Link>
      </div>
    </DefaultLayout>
  );
}
