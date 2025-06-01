import React from 'react';
import { ShopItem } from '../types';

interface ItemCardProps {
  item: ShopItem;
}

const ItemCard: React.FC<ItemCardProps> = ({ item }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-[1.02] cursor-pointer w-full">
      <div className="relative w-full" style={{ aspectRatio: '500/674' }}>
        <iframe 
          src={item.iframeUrl}
          width="100%"
          height="100%"
          style={{ 
            border: 'none', 
            overflow: 'hidden',
            width: '100%',
            height: '100%',
            display: 'block',
            margin: 0,
            padding: 0,
            position: 'absolute',
            top: 0,
            left: 0
          }}
          scrolling="no"
          frameBorder="0"
          allowFullScreen={true}
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        />
      </div>
    </div>
  );
};

export default ItemCard;