import React from 'react';
import { Wand2 } from 'lucide-react';
import { ToneType } from '../types';

interface MemeFormProps {
  prompt: string;
  tone: ToneType;
  onPromptChange: (prompt: string) => void;
  onToneChange: (tone: ToneType) => void;
  onGenerate: () => void;
  isGenerating: boolean;
}

const MemeForm: React.FC<MemeFormProps> = ({
  prompt,
  tone,
  onPromptChange,
  onToneChange,
  onGenerate,
  isGenerating,
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 mb-8">
      <div className="space-y-6">
        <div>
          <label htmlFor="prompt" className="block text-sm font-medium text-gray-700 mb-2">
            Your Prompt
          </label>
          <textarea
            id="prompt"
            value={prompt}
            onChange={(e) => onPromptChange(e.target.value)}
            placeholder="Describe your meme idea..."
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 min-h-[100px] transition duration-200"
            disabled={isGenerating}
          />
        </div>

        <div>
          <label htmlFor="tone" className="block text-sm font-medium text-gray-700 mb-2">
            Tone
          </label>
          <select
            id="tone"
            value={tone}
            onChange={(e) => onToneChange(e.target.value as ToneType)}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            disabled={isGenerating}
          >
            <option value="humor">Humor</option>
            <option value="sarcasm">Sarcasm</option>
            <option value="wholesome">Wholesome</option>
            <option value="motivational">Motivational</option>
          </select>
        </div>

        <button
          onClick={onGenerate}
          disabled={!prompt.trim() || isGenerating}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-lg transition duration-200 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Wand2 className="w-5 h-5" />
          <span>{isGenerating ? 'Generating...' : 'Generate Meme'}</span>
        </button>
      </div>
    </div>
  );
};

export default MemeForm;