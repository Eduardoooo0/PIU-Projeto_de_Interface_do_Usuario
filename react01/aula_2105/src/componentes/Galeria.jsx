import React, { useState } from 'react';
import Tema from './Tema';

const imageList = [
  {
    id: 1,
    src: './arlon.jpg',
    alt: 'Arlon',
    thumb: './arlon.jpg',
  },
  {
    id: 2,
    src: './braia.jpg',
    alt: 'Braia',
    thumb: './braia.jpg',
  },
  {
    id: 3,
    src: './hiandro.jpg',
    alt: 'Hiandro',
    thumb: './hiandro.jpg',
  },
  {
    id: 4,
    src: './teo.jpeg',
    alt: 'Teófilo Calixto',
    thumb: './teo.jpeg',
  },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(imageList[0]);

  return (
    <> 
    <div>
        <Tema/>
    </div>
    <div style={styles.container}>
        <div style={styles.thumbnails}>
            {imageList.map((image) => (
                <img
                    key={image.id}
                    src={image.thumb}
                    alt={image.alt}
                    style={{
                    ...styles.thumb,
                    border: image.id === selectedImage.id ? '2px solid blue' : '2px solid transparent',
                }}
                onClick={() => setSelectedImage(image)}
                />
            ))}
        </div>
        <div style={styles.preview}>
            <img src={selectedImage.src} alt={selectedImage.alt} style={styles.mainImage} />
            <p>{selectedImage.alt}</p>
        </div>
    </div>
    </>
    );
};

const styles = {
  container: {
    maxWidth: '900px',
    margin: '0 auto',
    padding: '20px',
  },
  preview: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  mainImage: {
    width: '100%',
    maxHeight: '500px',
    objectFit: 'cover',
    borderRadius: '8px',
  },
  thumbnails: {
    display: 'flex',
    justifyContent: 'center',
    gap: '12px',
    flexWrap: 'wrap',
  },
  thumb: {
    width: '100px',
    height: '120px',
    objectFit: 'cover',
    cursor: 'pointer',
    borderRadius: '4px',
    transition: '0.3s',
  },
};

export default Gallery;
