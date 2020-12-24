import React, { useState, useEffect } from "react"
import axios from 'axios';
import ImageGallery from './ImageGallery';
import './gallery.scss';
import {ImageLoader} from './workers';
import imageCompression from 'browser-image-compression';


const InfiniteImages = () => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchImages()
    }, []);

    const endpoint = "/.netlify/functions/fetch";

    const fetchImages = () => {
        axios(endpoint).then(res => {
            const images = res.data.images.filter(img => !img.url.includes('heic'));
            console.log(images, res);
            Promise.all(images.map(img => {
                return ImageLoader.fetchImage(img.secure_url).then(async (blob) => {
                    const compressedBlob = await imageCompression(blob, {
                        maxWidthOrHeight: 1000,
                        useWebWorker: false,
                        exifOrientation: 1
                    }).catch(err => {
                        console.log(err);
                    });

                    const url = URL.createObjectURL(compressedBlob);
                    console.log(url);
                    return {
                        ...img,
                        url
                    };
                });
            })).then(resultImages => {
                console.log('done');
                setImages(resultImages)
                setLoading(false);
            }).catch(err => {
                console.log(err)
            });
        }).catch(error => {
            console.log(error);
        });
    };

    return (
        <ImageGallery images={images} loading={loading} fetchImages={fetchImages} />
    );
}

export default InfiniteImages;

