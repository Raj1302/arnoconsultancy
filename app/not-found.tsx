import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* 404 Heading */}
        <h1 className="text-9xl font-times text-violet-600 mb-4">404</h1>
        
        {/* Message */}
        <h2 className="text-3xl sm:text-4xl font-times mb-4">
          Page <span className="italic">Not Found</span>
        </h2>
        <p className="text-gray-600 text-lg mb-8">
          The page you are looking for might have been removed, had its name changed, 
          or is temporarily unavailable.
        </p>

        {/* Back to Home Button */}
        <Link 
          href="/"
          className="inline-flex items-center justify-center bg-violet-600 text-white 
                     px-8 py-4 rounded-full font-medium transition-all duration-300
                     hover:bg-violet-700 hover:scale-105 hover:shadow-lg
                     active:scale-95"
        >
          Back to Home
          <svg 
            className="w-5 h-5 ml-2" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" 
            />
          </svg>
        </Link>

        {/* Optional: Decorative Element */}
        <div className="absolute inset-0 -z-10 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]" />
        </div>
      </div>
    </div>
  );
} 