export interface GuideTopic {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string; // Thumbnail image (fallback)
  posterImageUrl?: string; // Optional image to display inside the viewer (side-by-side)
  slideUrl: string; // Google Slide Embed URL
  downloadUrl?: string; // Link to download the file
  tag: string;
  themeColor: string;
  textColor: string;
}

export enum ViewMode {
  GRID = 'GRID',
  SINGLE_VIEWER = 'SINGLE_VIEWER',
  ALL_VIEWER = 'ALL_VIEWER',
}