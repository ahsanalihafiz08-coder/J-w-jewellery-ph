export interface CollectionItem {
  id: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  image: string;
  piecesCountText: string;
  highlights: string[];
  price?: string;
}

export interface FeaturedProduct {
  id: string;
  name: string;
  category: string;
  subtitle: string;
  description: string;
  metal: string;
  finishing: string;
  image: string;
  features: string[];
  price?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Rings' | 'Necklaces' | 'Earrings' | 'Bracelets';
  description: string;
  image: string;
  aspect: 'portrait' | 'square' | 'landscape';
}

export interface FeatureItem {
  icon: string;
  title: string;
  description: string;
}
