import React from 'react';
import MemePreview from './MemePreview';
import MemeControls from './MemeControls';
import { Meme } from '../types';

interface MemeGeneratorProps {
  meme: Meme | null;
  isGenerating: boolean;
}

const MemeGenerator: React.FC<MemeGeneratorProps> = ({ meme, isGenerating }) => {
  const handleShare = () => {
    if (meme) {
      // Implement sharing functionality
      console.log('Sharing meme:', meme);
    }
  };

  const handleDownload = () => {
    if (meme) {
      // Implement download functionality
      console.log('Downloading meme:', meme);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
      <MemePreview meme={meme} isGenerating={isGenerating} />
      <div className="mt-6">
        <MemeControls
          meme={meme}
          onShare={handleShare}
          onDownload={handleDownload}
        />
      </div>
    </div>
  );
};

export default MemeGenerator;