import React from 'react';

const LoadingOverlay = ({ isVisible }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[10000] bg-black flex items-center justify-center">
      <div className="flex flex-col items-center">
        {/* Spinner */}
        <div className="w-12 h-12 border-4 border-primary-blue border-t-transparent rounded-full animate-spin mb-4"></div>

        {/* Loading text */}
        <div className="text-white text-lg font-medium">
          Carregando...
        </div>

        {/* Logo */}
        <div className="text-primary-blue text-xl font-bold mt-2">
          IT Business
        </div>
      </div>
    </div>
  );
};

export default LoadingOverlay;