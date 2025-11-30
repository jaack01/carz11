import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center bg-gray-50 dark:bg-dark-800">
        <div className="text-center px-4">
          <h1 className="text-6xl md:text-9xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-2xl md:text-4xl font-bold mb-4">Page Not Found</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
            Sorry, the page you are looking for doesn't exist or has been moved.
          </p>
          <Link href="/" className="primary-btn">
            Back to Home
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
