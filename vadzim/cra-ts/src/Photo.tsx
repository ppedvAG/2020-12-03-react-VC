import React from 'react';
import IPhoto from './IPhoto';

export default function Photo(props: { photo: IPhoto }) {
    let photo = props.photo;
    console.log('photo 1st variant:>> ', photo);
    return (
        <div>
            <p>Photo works</p>
            <img src={photo.url} alt={photo.title} />
            <p>{photo.title}</p>
        </div>
    )

} 