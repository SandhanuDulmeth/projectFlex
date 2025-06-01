import React from 'react';
import ItemCard from './ItemCard';
import { ShopItem } from '../types';

interface ItemGridProps {
  items: ShopItem[];
}

const ItemGrid: React.FC<ItemGridProps> = ({ items }) => {
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map(item => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ItemGrid;