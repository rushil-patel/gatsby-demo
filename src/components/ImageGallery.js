import React from "react"
import InfiniteScroll from "react-infinite-scroll-component"
import PropTypes from 'prop-types';

const ImageGallery = ({images, loading, fetchImages}) => {
    return (
        <InfiniteScroll
        dataLength = {images.length}
        next = {() => fetchImages}
        hasMore = {true}
        loader = {
                <p style={{ textAlign: "center", marginTop: "1%" }}>
                    More doggo incoming 🐕 🐕...
                </p>
            }
        >
            <div className="image-grid">
                {!loading ? images.map(image => {
                        return (
                            <div className="image-item" key={image.id}>
                                <img src={image.urls.regular} alt={image.alt_description} />
                            </div>
                        )
                    }) : ""
                }
            </div>
        </InfiniteScroll>
    )
};

ImageGallery.propTypes = {
    images: PropTypes.array,
    loading: PropTypes.bool,
    fetchImages: PropTypes.func,
  }

export default ImageGallery