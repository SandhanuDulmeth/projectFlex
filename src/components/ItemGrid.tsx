import React from 'react';
import ItemCard from './ItemCard';
import { ShopItem } from '../types';

interface ItemGridProps {
  items: ShopItem[];
}

const ItemGrid: React.FC<ItemGridProps> = ({ items }) => {
  return (
    <div className="container mx-auto px-2 sm:px-4 py-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
        {items.map(item => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ItemGrid;