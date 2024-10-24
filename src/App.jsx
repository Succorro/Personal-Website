import React, { useEffect, useState } from 'react';
import { Box } from 'lucide-react';

const RedirectPage = () => {
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    if (countdown === 0) {
      window.location.href = 'https://stevengutierrez.pages.dev';
      return;
    }

    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [countdown]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center p-4">
      <div className="text-center">
        <div className="mb-6 animate-bounce">
          <Box size={64} className="text-indigo-600" />
        </div>

        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          This Page Has Moved
        </h1>

        <p className="text-gray-600 mb-8">
          You'll be automatically redirected in {countdown} second{countdown !== 1 ? 's' : ''}...
        </p>

        <a
          href="https://stevengutierrez.pages.dev"
          className="inline-flex items-center px-6 py-3 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors duration-200"
        >
          Go there now
        </a>
      </div>
    </div>
  );
};

export default RedirectPage;