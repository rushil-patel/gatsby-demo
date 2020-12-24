import React, {useEffect, useState} from "react"

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
  // const [objectUrl, setObjectUrl] = useState(null);
  const sizeClassName = getImageSizeClass(width, height);
  const imageClassName = 'image-item';

  // useEffect( () => {
  //   ImageLoader.fetchImage(src).then(async (blob) => {
  //     //   const compressedBlob = await imageCompression(blob, {
  //     //     maxWidthOrHeight: 1000,
  //     //     useWebWorker: true,
  //     //     exifOrientation: 1
  //     // });
  //     const compressedBlob = blob;
  //     const url = URL.createObjectURL(compressedBlob);
  //       setObjectUrl(url);
  //     })
  // }, [src, setObjectUrl])

  return (
      <div className={`${imageClassName} ${sizeClassName}`}>
        <img src={src} />
      </div>
    );
}

export default Image
