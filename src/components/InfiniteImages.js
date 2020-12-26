import React, { useState, useEffect } from "react"
import axios from 'axios';
import ImageGallery from './ImageGallery';
import './gallery.scss';

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
            setImages(images)
            setLoading(false);
        }).catch(error => {
            console.log(error);
        });
    };

    return (
        <ImageGallery images={images} loading={loading} fetchImages={fetchImages} />
    );
}

export default InfiniteImages;

