import React, { ChangeEvent, useState } from 'react';
import IPhoto from '../IPhoto';

export default function LSUPhoto(props: any) {
    let photo = props.photo;
    console.log('photo LSU:>> ', photo);
    console.log('props :>> ', props);
    
    // const [titleInState, setTitleInState] = useState(photo.title);

    /* todo #14 */
    return (
        <div>
            <img src={props.photo.url} alt={props.photo.title} />
            <p>
                {/* todo #16 */}
                {/* falsch: die Prop von Prop-Objekt heißt nicht handleChange, sondern onChange */}
                {/* <input id={props.photo.id} defaultValue={props.photo.title} onChange={(ev) => props.handleChange(ev)} /> */}
                <input id={props.photo.id} defaultValue={props.photo.title} onChange={(ev) => props.onChange(ev)} />
            </p>
        </div>
    )

} 