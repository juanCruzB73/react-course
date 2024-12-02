import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';



export const ImageGalery=({images=[]})=> {
  return (
    <ImageList sx={{ width: '70%', height: 450 }} cols={4} rowHeight={200}>
      {images.map((image) => (
        <ImageListItem key={image}>
          <img
            srcSet={`${image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={`${image}?w=164&h=164&fit=crop&auto=format`}
            alt="img de la nota"
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}