import React from 'react';

export default function ComponentProps(props: {numberOfStars: number}) {
    console.log('props :>> ', props);
    let numberOfStars = props.numberOfStars;
    return(
        <span>
            {'*'.repeat(numberOfStars)}
        </span>
    )
}
