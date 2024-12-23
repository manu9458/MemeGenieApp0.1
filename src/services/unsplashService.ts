import { ImageSearchService, SearchResult } from '../types';

const UNSPLASH_ACCESS_KEY = 'oph5K7cZu__ba4fTZI-IpN5hiLPxsMRHfoyMtApkdr4'; // You'll need to replace this with a real key

export class UnsplashImageService implements ImageSearchService {
  async searchImages(query: string): Promise<SearchResult[]> {
    try {
      const response = await fetch(
        `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&per_page=10`,
        {
          headers: {
            Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error('Failed to fetch images');
      }

      const data = await response.json();
      return data.results;
    } catch (error) {
      console.error('Error fetching images:', error);
      // Fallback to default images if the API fails
      return this.getFallbackImages();
    }
  }

  private getFallbackImages(): SearchResult[] {
    return [
      {
        id: '1',
        urls: {
          regular: 'https://images.unsplash.com/photo-1531259683007-016a7b628fc3?w=800&auto=format&fit=crop',
        },
        alt_description: 'Fallback image 1',
      },
      {
        id: '2',
        urls: {
          regular: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop',
        },
        alt_description: 'Fallback image 2',
      },
    ];
  }
}