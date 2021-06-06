import React from 'react';

const ImageList = ({ images }) => {

  const 

  const listOfImages = images.map(({ id, description, urls }) => {
    return <img key={id} src={urls.regular} alt={description} />;
  });

  return <div>{listOfImages}</div>;
};

export default ImageList;
