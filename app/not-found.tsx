import Link from "next/link";

export default function PageNotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
      <p className="text-2xl text-gray-600 mb-8">Page Not Found</p>
      <Link href="/" legacyBehavior>
        <a className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
          Go back to Home
        </a>
      </Link>
    </div>
  );
}
