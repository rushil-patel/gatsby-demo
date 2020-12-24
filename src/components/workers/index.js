import ImageWorker from './image-loader.worker.js';



export const ImageLoader = typeof window === 'object' && new ImageWorker()