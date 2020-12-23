import React from 'react';
import './Children.css';

export default function CardParent() {
    return(
        <div>
            <Card color='red'>
                <h1>Card red</h1>
            </Card>
            <Card color='blue'>
                <h1>Card blue</h1>
            </Card>
        </div>
    )
}

function Card(props: any) {
    return(
    <div className={'Card Card-' + props.color}>
        {props.children}
    </div>
    )
}