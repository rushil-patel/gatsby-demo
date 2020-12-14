import React, { useState, useEffect } from "react"
import axios from 'axios';
import ImageGallery from './ImageGallery';
import './gallery.css';

const InfiniteImages = () => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchImages()
    }, []);

    const endpoint = "/.netlify/functions/fetch";

    const fetchImages = () => {
        axios(endpoint).then(res => {
            setImages([...images, ...res.data.images]);
            setLoading(false);
        });
    };

    return (
        <ImageGallery images={images} loading={loading} fetchImages={fetchImages} />
    );
}

export default InfiniteImages;

