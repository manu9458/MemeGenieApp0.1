import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import MemeForm from './components/MemeForm';
import MemeGenerator from './components/MemeGenerator';
import { ToneType } from './types';
import { useMemeGenerator } from './hooks/useMemeGenerator';

function App() {
  const [prompt, setPrompt] = useState('');
  const [tone, setTone] = useState<ToneType>('humor');
  const { generatedMeme, isGenerating, generateMeme } = useMemeGenerator();

  const handleGenerate = () => {
    if (prompt.trim()) {
      generateMeme(prompt, tone);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Transform Your Ideas Into Memes
            </h1>
            <p className="text-lg text-gray-600">
              Let AI create the perfect meme from your text prompt
            </p>
          </div>

          <MemeForm
            prompt={prompt}
            tone={tone}
            onPromptChange={setPrompt}
            onToneChange={setTone}
            onGenerate={handleGenerate}
            isGenerating={isGenerating}
          />

          <MemeGenerator
            meme={generatedMeme}
            isGenerating={isGenerating}
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;