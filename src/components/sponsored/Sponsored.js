import React from 'react';
import Image from '../image/Image';

function Sponsored(props) {
    return (
        <section className="nav-3-posts">
            <Image id={""} class={""} img={props.detalhes} />
            <article>
                <h4>{props.title}</h4>
                <p>Maecenas ornare sapien.</p>
            </article>
        </section>
    )
}

export default Sponsored;