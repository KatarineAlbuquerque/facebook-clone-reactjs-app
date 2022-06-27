import React from 'react';
import Image from '../image/Image';
import Input from '../input/Input';

function PostPensamento(props) {
    return (
        <article id="pensando">
            <Image id={""} class={""} img={props.img} />
            <Input placeholder={"No que você está pensando?"} />
        </article>
    )
}

export default PostPensamento;