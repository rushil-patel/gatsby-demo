import React from "react"

const getImageSizeClass = (width, height) => {
  const ratio = width / height;
  const TALL = 0.6, WIDE = 1.3;
  // const SQUARE = 1.0,
  if (ratio < TALL) {
    return 'image-tall'
  } else if (ratio > WIDE) {
    return 'image-wide'
  } else {
    return 'image-square'
  }
}

const Image = (props) => {
  const { src, width, height } = props;
  const sizeClassName = getImageSizeClass(width, height);
  const imageClassName = 'image-item';

  return (
      <div className={`${imageClassName} ${sizeClassName}`}>
        <img src={src} />
      </div>
    );
}

export default Image
