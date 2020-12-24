import React from "react"
import InfiniteScroll from "react-infinite-scroll-component"
import PropTypes from 'prop-types';
import Image from './Image';

const ImageGallery = ({images, loading, fetchImages}) => {
    return (
        <InfiniteScroll
        dataLength = {images.length}
        next = {() => fetchImages}
        hasMore = {false}
        loader = {
                <p style={{ textAlign: "center", marginTop: "1%" }}></p>
            }
        >
            <div className="image-grid">
                {!loading ? images.map(image => {
                        return (
                            <React.Fragment key={image.public_id}>
                                <Image src={image.url} width={image.width} height={image.height} />
                            </React.Fragment>
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