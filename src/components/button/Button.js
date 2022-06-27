import React from 'react';
import Image from '../image/Image';

function Button(porps) {
    return(
        <button>
            <Image id={""} class={""} img={porps.img} /> {porps.text}
        </button>
    )
}

export default Button;