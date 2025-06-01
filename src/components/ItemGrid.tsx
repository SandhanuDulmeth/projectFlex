import React, { useState } from 'react';
import ItemCard from './ItemCard';
import { ShopItem } from '../types';

interface ItemGridProps {
  items: ShopItem[];
}

const categories = [
  { key: 'all', label: 'All' },
  { key: 'homeware', label: 'Homeware' },
  { key: 'other', label: 'Other' }
];

const ItemGrid: React.FC<ItemGridProps> = ({ items }) => {
  const [selected, setSelected] = useState<'all' | 'homeware' | 'other'>('all');

  const filteredItems =
    selected === 'all'
      ? items
      : items.filter((item) => item.category === selected);

  return (
    <div className="container mx-auto px-2 sm:px-4 py-6">
      <div className="flex flex-wrap gap-2 sm:gap-4 justify-center mb-8">
        {categories.map((cat) => (
          <button
            key={cat.key}
            className={`px-4 py-2 rounded-full font-semibold transition-colors duration-200 border
              ${selected === cat.key
                ? 'bg-purple-700 text-white border-purple-700'
                : 'bg-white text-purple-700 border-purple-300 hover:bg-purple-100'}`}
            onClick={() => setSelected(cat.key as 'all' | 'homeware' | 'other')}
          >
            {cat.label}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
        {filteredItems.map(item => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ItemGrid;