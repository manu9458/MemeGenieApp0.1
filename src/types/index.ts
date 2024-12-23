export interface Meme {
  id: string;
  template: string;
  topText: string;
  bottomText: string;
  imageUrl: string;
}

export interface SearchResult {
  id: string;
  urls: {
    regular: string;
  };
  alt_description: string;
}

export type ToneType = 'humor' | 'sarcasm' | 'wholesome' | 'motivational';

export interface ImageSearchService {
  searchImages: (query: string) => Promise<SearchResult[]>;
}