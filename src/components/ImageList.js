import React from 'react';

const ImageList = ({ images }) => {
  const listOfImages = images.map((e) => {
    return <img key={e.id} src={e.urls.regular} alt="car" />;
  });

  return <div>{listOfImages}</div>;
};

export default ImageList;
