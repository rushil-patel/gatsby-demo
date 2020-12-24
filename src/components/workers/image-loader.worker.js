export async function fetchImage(url = '') {
    console.log('worker recieved:', url);
    const response = await fetch(url);
    const fileBlob = await response.blob();
    return fileBlob;
};