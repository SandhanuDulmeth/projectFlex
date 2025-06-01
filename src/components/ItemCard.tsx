import React from 'react';
import { ShopItem } from '../types';

interface ItemCardProps {
  item: ShopItem;
}

const ItemCard: React.FC<ItemCardProps> = ({ item }) => {
  const handleClick = () => {
    if (item.whatsAppNumber) {
      window.open(`https://wa.me/${item.whatsAppNumber}?text=I'm%20interested%20in%20${encodeURIComponent(item.name)}`, '_blank');
    } else {
      window.open(item.postUrl, '_blank');
    }
  };

  return (
    <div 
      className="bg-white border border-purple-300 rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:scale-102 cursor-pointer"
      onClick={handleClick}
    >
      <div className="aspect-square overflow-hidden">
        <img 
          src={item.imageUrl} 
          alt={item.name} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-4">
        <h3 className="text-purple-800 text-xl font-semibold text-center">
          {item.name}
        </h3>
      </div>
    </div>
  );
};

export default ItemCard;