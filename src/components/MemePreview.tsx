import React from 'react';
import { Meme } from '../types';

interface MemePreviewProps {
  meme: Meme | null;
  isGenerating: boolean;
}

const MemePreview: React.FC<MemePreviewProps> = ({ meme, isGenerating }) => {
  if (isGenerating) {
    return (
      <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg flex items-center justify-center">
        <div className="animate-pulse flex flex-col items-center space-y-2">
          <div className="w-8 h-8 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
          <div className="text-gray-400">Generating your meme...</div>
        </div>
      </div>
    );
  }

  if (!meme) {
    return (
      <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg flex items-center justify-center">
        <div className="text-gray-400">Your meme will appear here</div>
      </div>
    );
  }

  return (
    <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg relative overflow-hidden">
      <img
        src={meme.imageUrl}
        alt={meme.template}
        className="object-cover w-full h-full"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-between p-4">
        <div className="text-center uppercase text-2xl font-bold text-white text-stroke bg-black bg-opacity-30 px-4 py-2 rounded">
          {meme.topText}
        </div>
        <div className="text-center uppercase text-2xl font-bold text-white text-stroke bg-black bg-opacity-30 px-4 py-2 rounded">
          {meme.bottomText}
        </div>
      </div>
    </div>
  );
};

export default MemePreview;