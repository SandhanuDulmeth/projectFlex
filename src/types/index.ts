export interface ShopItem {
  id: string;
  name?: string;
  iframeUrl: string;
  width?: number;
  height?: number;
  category: 'homeware' | 'other';
}