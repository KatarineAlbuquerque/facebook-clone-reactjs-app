import React from 'react';
import Image from '../image/Image';

function Action(props) {
    return (
        <article className="action">
            <Image id={props.id} class={props.class} img={props.img} />
            <p>{props.text}</p>
        </article>
    )
}

export default Action;