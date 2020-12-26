import React, {useState, useEffect} from "react"
import { ImageLoader } from './workers';
import imageCompression from 'browser-image-compression';

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
  const [url, setUrl] = useState(null);

  useEffect(() => {
    ImageLoader.fetchImage(src).then(async (blob) => {
      const compressedBlob = await imageCompression(blob, {
          maxWidthOrHeight: 1000,
          useWebWorker: false,
          exifOrientation: 1
      }).catch(err => {
          console.log(err);
      });

      const objectUrl = URL.createObjectURL(compressedBlob);
      setUrl(objectUrl);
    })
  }, [src])


  return (
      <div className={`${imageClassName} ${sizeClassName}`}>
        {!url ? 'loading' : <img src={url} />}
      </div>
    );
}

export default Image
