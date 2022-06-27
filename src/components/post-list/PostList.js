import React from 'react';
import Image from '../image/Image';

function PostList(props) {
    return (
        <article className="posts">
            <Image id={""} class={""} img={props.img} />
            <p>{props.text}</p>
        </article>
    )
}

export default PostList;