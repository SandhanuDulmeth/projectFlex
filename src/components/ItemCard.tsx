import React from 'react';
import { ShopItem } from '../types';

interface ItemCardProps {
  item: ShopItem;
}

const ItemCard: React.FC<ItemCardProps> = ({ item }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-[1.02] cursor-pointer w-full">
      <iframe 
        src={item.iframeUrl}
        width="100%"
        height="674"
        style={{ 
          border: 'none', 
          overflow: 'hidden',
          width: '100%',
          maxWidth: '500px',
          display: 'block',
          height: '674px',
          margin: 0,
          padding: 0,
          position: 'relative'
        }}
        scrolling="no"
        frameBorder="0"
        allowFullScreen={true}
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      />
    </div>
  );
};

export default ItemCard;