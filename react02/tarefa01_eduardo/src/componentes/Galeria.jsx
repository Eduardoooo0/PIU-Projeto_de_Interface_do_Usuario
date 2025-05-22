import React, { useState } from 'react';
import Tema from './Tema';

const imageList = [
  { id: 1, src: './arlon.jpg', alt: 'Arlon, Chico pleto de Jardim', thumb: './arlon.jpg' },
  { id: 2, src: './braia.jpg', alt: 'Braia, Bandido perigoso', thumb: './braia.jpg' },
  { id: 3, src: './hiandro.jpg', alt: 'Hiandro, O rei delas', thumb: './hiandro.jpg' },
  { id: 4, src: './teo.jpeg', alt: 'Teófilo Calixto, O rei do clash royale', thumb: './teo.jpeg' },
  { id: 5, src: './italo.jpg', alt: 'Ítalo, o Lima Verde', thumb: './italo.jpg' },
  { id: 6, src: './nilso.jpg', alt: 'Nilso, O embarilson', thumb: './nilso.jpg' },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <> 
      <div style={styles.container}>
        <div style={styles.thumbnails}>
          {imageList.map((image) => (
            <img
              key={image.id}
              src={image.thumb}
              alt={image.alt}
              style={{
                ...styles.thumb,
                border: image.id === selectedImage?.id ? '2px solid blue' : '2px solid transparent',
              }}
              onClick={() => setSelectedImage(image)}
            />
          ))}
        </div>

        <div style={styles.preview}>
          {selectedImage ? (
            <>
              <img src={selectedImage.src} alt={selectedImage.alt} style={styles.mainImage} />
              <p>{selectedImage.alt}</p>
            </>
          ) : (
            <p></p>
          )}
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
    width: '50%',
    maxHeight: '450px',
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
