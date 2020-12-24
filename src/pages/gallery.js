import React from 'react';
import Layout from '../components/layout';
import InfiniteImages from '../components/InfiniteImages';
import SEO from '../components/seo';

const Gallery = () => {
    return (
        <Layout>
            <SEO title="Gallery"/>
            <InfiniteImages/>
        </Layout>
    )
}

export default Gallery