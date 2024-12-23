import React from 'react';
import { Share2, Download } from 'lucide-react';
import { Meme } from '../types';

interface MemeControlsProps {
  meme: Meme | null;
  onShare: () => void;
  onDownload: () => void;
}

const MemeControls: React.FC<MemeControlsProps> = ({ meme, onShare, onDownload }) => {
  return (
    <div className="flex flex-wrap gap-4">
      <button
        onClick={onShare}
        disabled={!meme}
        className="flex-1 flex items-center justify-center space-x-2 bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <Share2 className="w-5 h-5" />
        <span>Share</span>
      </button>
      
      <button
        onClick={onDownload}
        disabled={!meme}
        className="flex-1 flex items-center justify-center space-x-2 bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <Download className="w-5 h-5" />
        <span>Download</span>
      </button>
    </div>
  );
};

export default MemeControls;