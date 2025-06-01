import React from 'react';

const FacebookPost: React.FC = () => {
  return (
    <div className="w-full max-w-[500px] mx-auto my-4">
      <iframe 
        src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02jgP3zuKvhycHfCN32XDKq6oUJtAHocrSFEqxDvcCKUtgBBvqiHece67vweHBHq8ml%26id%3D61576760342310&show_text=true&width=500" 
        width="500" 
        height="674" 
        style={{ border: 'none', overflow: 'hidden' }} 
        scrolling="no" 
        frameBorder="0" 
        allowFullScreen={true} 
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      />
    </div>
  );
};

export default FacebookPost; 