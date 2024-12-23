import { useState } from 'react';
import { Meme, ToneType } from '../types';
import { UnsplashImageService } from '../services/unsplashService';

const imageService = new UnsplashImageService();

export const useMemeGenerator = () => {
  const [generatedMeme, setGeneratedMeme] = useState<Meme | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const generateMeme = async (prompt: string, tone: ToneType) => {
    setIsGenerating(true);
    try {
      // Search for relevant images based on the prompt
      const searchResults = await imageService.searchImages(prompt);
      
      if (searchResults.length === 0) {
        throw new Error('No images found');
      }

      // Select a random image from the results
      const randomIndex = Math.floor(Math.random() * searchResults.length);
      const selectedImage = searchResults[randomIndex];

      const newMeme: Meme = {
        id: Date.now().toString(),
        template: selectedImage.alt_description || 'Custom Meme',
        topText: prompt,
        bottomText: `Generated with ${tone} tone`,
        imageUrl: selectedImage.urls.regular,
      };

      setGeneratedMeme(newMeme);
    } catch (error) {
      console.error('Error generating meme:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  return {
    generatedMeme,
    isGenerating,
    generateMeme,
  };
};